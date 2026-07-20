import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ article }) {
  const category = article.categories;
  const href = category ? `/blog/${category.slug}/${article.slug}` : `/blog`;
  const date = article.published_at
    ? new Date(article.published_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Link href={href} className="group block border" style={{ borderColor: "var(--line)" }}>
      <div className="relative w-full aspect-[16/10] bg-[var(--cream-deep)] overflow-hidden">
        {article.cover_image_url ? (
          <Image
            src={article.cover_image_url}
            alt={article.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : null}
      </div>
      <div className="p-5">
        {category && <span className="eyebrow">{category.name}</span>}
        <h3 className="font-display text-lg text-[var(--ink)] mt-2 news-title group-hover:text-[var(--accent)] transition-colors">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sm text-[var(--muted)] mt-2 line-clamp-2">{article.excerpt}</p>
        )}
        {date && <p className="text-xs text-[var(--faint)] mt-3 uppercase tracking-widest">{date}</p>}
      </div>
    </Link>
  );
}
