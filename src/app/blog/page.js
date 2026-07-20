import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedArticles } from "@/lib/articles";
import { getCategories } from "@/lib/categories";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryPills from "@/components/blog/CategoryPills";
import SearchBar from "@/components/blog/SearchBar";

export const metadata = {
  title: "Blog — LJD Corporation",
  description: "Stories, updates, and insights from LJD Corporation.",
};
export const dynamic = "force-dynamic";

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const search = params?.q || "";

  const [articles, categories] = await Promise.all([
    getPublishedArticles({ search }),
    getCategories(),
  ]);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="eyebrow">Blog</span>
            <h1 className="font-display text-3xl sm:text-4xl text-[var(--ink)] mt-2">
              Stories &amp; Updates
            </h1>
          </div>

          <div className="flex flex-col gap-4 mb-10">
            <SearchBar />
            <CategoryPills categories={categories} />
          </div>

          {articles.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">No articles found.</p>
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
