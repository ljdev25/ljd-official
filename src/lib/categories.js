import { supabase } from "@/lib/supabase/client";
import { supabaseAdmin } from "@/lib/supabase/server";
import { slugify } from "@/lib/slugify";

const PUBLIC_COLUMNS = "id, name, slug, description, created_at";

export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select(PUBLIC_COLUMNS)
    .order("name", { ascending: true });

  if (error) throw new Error(`Failed to load categories: ${error.message}`);
  return data;
}

export async function getCategoryBySlug(slug) {
  const { data, error } = await supabase
    .from("categories")
    .select(PUBLIC_COLUMNS)
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw new Error(`Failed to load category: ${error.message}`);
  return data;
}

export async function createCategory({ name, description }) {
  const { data, error } = await supabaseAdmin
    .from("categories")
    .insert({ name, slug: slugify(name), description: description || null })
    .select(PUBLIC_COLUMNS)
    .single();

  if (error) throw new Error(`Failed to create category: ${error.message}`);
  return data;
}

export async function updateCategory(id, { name, description }) {
  const { data, error } = await supabaseAdmin
    .from("categories")
    .update({ name, slug: slugify(name), description: description || null })
    .eq("id", id)
    .select(PUBLIC_COLUMNS)
    .single();

  if (error) throw new Error(`Failed to update category: ${error.message}`);
  return data;
}

export async function deleteCategory(id) {
  const { error } = await supabaseAdmin.from("categories").delete().eq("id", id);
  if (error) throw new Error(`Failed to delete category: ${error.message}`);
}
