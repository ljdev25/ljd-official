import { supabase } from "@/lib/supabase/client";
import { supabaseAdmin } from "@/lib/supabase/server";
import { slugify } from "@/lib/slugify";

const PUBLIC_COLUMNS =
  "id, title, slug, excerpt, content, category_id, cover_image_url, published_at, categories(id, name, slug)";
const PUBLIC_CARD_COLUMNS =
  "id, title, slug, excerpt, cover_image_url, published_at, categories(id, name, slug)";
const ADMIN_COLUMNS =
  "id, title, slug, excerpt, content, category_id, cover_image_url, status, published_at, created_at, updated_at, categories(id, name, slug)";

export async function getPublishedArticles({ search, categorySlug, limit = 50, offset = 0 } = {}) {
  let query = supabase
    .from("articles")
    .select(PUBLIC_CARD_COLUMNS)
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (search) {
    query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`);
  }

  if (categorySlug) {
    query = query.eq("categories.slug", categorySlug);
  }

  const { data, error } = await query;
  if (error) throw new Error(`Failed to load articles: ${error.message}`);

  // Supabase can't filter on an embedded relation's column directly, so
  // when filtering by category we drop rows the join didn't actually match.
  return categorySlug ? data.filter((a) => a.categories?.slug === categorySlug) : data;
}

export async function getArticleBySlug(categorySlug, slug) {
  const { data, error } = await supabase
    .from("articles")
    .select(PUBLIC_COLUMNS)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw new Error(`Failed to load article: ${error.message}`);
  if (!data || data.categories?.slug !== categorySlug) return null;
  return data;
}

export async function getRelatedArticles(categoryId, excludeId, limit = 3) {
  if (!categoryId) return [];

  const { data, error } = await supabase
    .from("articles")
    .select(PUBLIC_CARD_COLUMNS)
    .eq("status", "published")
    .eq("category_id", categoryId)
    .neq("id", excludeId)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) throw new Error(`Failed to load related articles: ${error.message}`);
  return data;
}

export async function getAllArticlesAdmin() {
  const { data, error } = await supabaseAdmin
    .from("articles")
    .select(ADMIN_COLUMNS)
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Failed to load articles: ${error.message}`);
  return data;
}

export async function getArticleById(id) {
  const { data, error } = await supabaseAdmin
    .from("articles")
    .select(ADMIN_COLUMNS)
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`Failed to load article: ${error.message}`);
  return data;
}

export async function createArticle({
  title,
  slug,
  excerpt,
  content,
  categoryId,
  coverImageUrl,
  status,
}) {
  const resolvedSlug = slug ? slugify(slug) : slugify(title);
  const isPublished = status === "published";

  const { data, error } = await supabaseAdmin
    .from("articles")
    .insert({
      title,
      slug: resolvedSlug,
      excerpt: excerpt || null,
      content,
      category_id: categoryId || null,
      cover_image_url: coverImageUrl || null,
      status: isPublished ? "published" : "draft",
      published_at: isPublished ? new Date().toISOString() : null,
    })
    .select(ADMIN_COLUMNS)
    .single();

  if (error) throw new Error(`Failed to create article: ${error.message}`);
  return data;
}

export async function updateArticle(
  id,
  { title, slug, excerpt, content, categoryId, coverImageUrl, status }
) {
  const existing = await getArticleById(id);
  if (!existing) throw new Error("Article not found");

  const isPublished = status === "published";
  const wasPublished = existing.status === "published";

  const { data, error } = await supabaseAdmin
    .from("articles")
    .update({
      title,
      slug: slug ? slugify(slug) : slugify(title),
      excerpt: excerpt || null,
      content,
      category_id: categoryId || null,
      cover_image_url: coverImageUrl || null,
      status: isPublished ? "published" : "draft",
      published_at: isPublished
        ? existing.published_at || new Date().toISOString()
        : wasPublished
          ? existing.published_at
          : null,
    })
    .eq("id", id)
    .select(ADMIN_COLUMNS)
    .single();

  if (error) throw new Error(`Failed to update article: ${error.message}`);
  return data;
}

export async function setArticleStatus(id, status) {
  const existing = await getArticleById(id);
  if (!existing) throw new Error("Article not found");

  const isPublished = status === "published";

  const { data, error } = await supabaseAdmin
    .from("articles")
    .update({
      status: isPublished ? "published" : "draft",
      published_at: isPublished ? existing.published_at || new Date().toISOString() : existing.published_at,
    })
    .eq("id", id)
    .select(ADMIN_COLUMNS)
    .single();

  if (error) throw new Error(`Failed to update article status: ${error.message}`);
  return data;
}

export async function deleteArticle(id) {
  const { error } = await supabaseAdmin.from("articles").delete().eq("id", id);
  if (error) throw new Error(`Failed to delete article: ${error.message}`);
}
