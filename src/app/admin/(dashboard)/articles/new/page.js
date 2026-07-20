import { getCategories } from "@/lib/categories";
import ArticleEditor from "@/components/admin/ArticleEditor";

export const metadata = { title: "New Article — LJD Admin" };
export const dynamic = "force-dynamic";

export default async function NewArticlePage() {
  const categories = await getCategories();

  return (
    <div>
      <h1 className="font-display text-2xl text-[var(--ink)] mb-8">New Article</h1>
      <ArticleEditor categories={categories} />
    </div>
  );
}
