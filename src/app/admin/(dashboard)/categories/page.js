import { getCategories } from "@/lib/categories";
import CategoryManager from "@/components/admin/CategoryManager";

export const metadata = { title: "Categories — LJD Admin" };
export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <h1 className="font-display text-2xl text-[var(--ink)] mb-8">Categories</h1>
      <CategoryManager categories={categories} />
    </div>
  );
}
