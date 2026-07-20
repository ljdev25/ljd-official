import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import MarkdownContent from "@/components/blog/MarkdownContent";
import RelatedArticles from "@/components/blog/RelatedArticles";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);
  if (!article) return {};
  return {
    title: `${article.title} — LJD Blog`,
    description: article.excerpt || undefined,
  };
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);

  if (!article) notFound();

  const related = await getRelatedArticles(article.category_id, article.id, 3);
  const date = article.published_at
    ? new Date(article.published_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            {article.categories && <span className="eyebrow">{article.categories.name}</span>}
            <h1 className="font-display text-3xl sm:text-4xl text-[var(--ink)] mt-2">{article.title}</h1>
            {date && <p className="text-xs text-[var(--faint)] mt-3 uppercase tracking-widest">{date}</p>}
          </div>

          {article.cover_image_url && (
            <div className="relative w-full aspect-[16/9] mb-10 bg-[var(--cream-deep)]">
              <Image
                src={article.cover_image_url}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(min-width: 768px) 768px, 100vw"
                priority
              />
            </div>
          )}

          <MarkdownContent content={article.content} />

          <RelatedArticles articles={related} />
        </article>
      </main>
      <Footer />
    </>
  );
}
