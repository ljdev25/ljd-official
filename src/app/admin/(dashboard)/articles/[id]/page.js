import { notFound } from "next/navigation";
import { getArticleById } from "@/lib/articles";
import { getCategories } from "@/lib/categories";
import ArticleEditor from "@/components/admin/ArticleEditor";

export const metadata = { title: "Edit Article — LJD Admin" };
export const dynamic = "force-dynamic";

export default async function EditArticlePage({ params }) {
  const { id } = await params;
  const [article, categories] = await Promise.all([getArticleById(id), getCategories()]);

  if (!article) notFound();

  return (
    <div>
      <h1 className="font-display text-2xl text-[var(--ink)] mb-8">Edit Article</h1>
      <ArticleEditor article={article} categories={categories} />
    </div>
  );
}
