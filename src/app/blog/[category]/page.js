import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedArticles } from "@/lib/articles";
import { getCategories, getCategoryBySlug } from "@/lib/categories";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryPills from "@/components/blog/CategoryPills";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} — LJD Blog`,
    description: category.description || `Articles in ${category.name}.`,
  };
}

export default async function CategoryArchivePage({ params }) {
  const { category: categorySlug } = await params;

  const [category, categories] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getCategories(),
  ]);

  if (!category) notFound();

  const articles = await getPublishedArticles({ categorySlug });

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="eyebrow">Blog</span>
            <h1 className="font-display text-3xl sm:text-4xl text-[var(--ink)] mt-2">{category.name}</h1>
            {category.description && (
              <p className="text-sm text-[var(--muted)] mt-3 max-w-2xl">{category.description}</p>
            )}
          </div>

          <div className="mb-10">
            <CategoryPills categories={categories} activeSlug={category.slug} />
          </div>

          {articles.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">No articles in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
