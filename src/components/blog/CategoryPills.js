import Link from "next/link";

export default function CategoryPills({ categories, activeSlug }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className="px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-colors"
        style={{
          borderColor: !activeSlug ? "var(--ink)" : "var(--line)",
          background: !activeSlug ? "var(--ink)" : "transparent",
          color: !activeSlug ? "var(--white)" : "var(--ink-soft)",
        }}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/blog/${category.slug}`}
          className="px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-colors"
          style={{
            borderColor: activeSlug === category.slug ? "var(--ink)" : "var(--line)",
            background: activeSlug === category.slug ? "var(--ink)" : "transparent",
            color: activeSlug === category.slug ? "var(--white)" : "var(--ink-soft)",
          }}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
