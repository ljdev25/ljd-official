import ArticleCard from "@/components/blog/ArticleCard";

export default function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t" style={{ borderColor: "var(--line)" }}>
      <span className="eyebrow">Related Articles</span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
