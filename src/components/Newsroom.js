const news = [
  {
    date: "June 2025",
    category: "Events",
    title: "LJD Corporation Featured at SEWF Annual Summit",
    excerpt:
      "Our social enterprise model was highlighted as a leading example of sustainable community development at the Social Enterprise World Forum.",
  },
  {
    date: "April 2025",
    category: "Workshop",
    title: "New Recycling Workshop Series Launches in Sabah Communities",
    excerpt:
      "LJD Corporation expands community outreach with a new series of hands-on workshops focused on plastic upcycling and jewellery crafting.",
  },
  {
    date: "February 2025",
    category: "Partnership",
    title: "US Embassy Partnership Accelerates Community Training Program",
    excerpt:
      "A new collaboration with the US Embassy in Malaysia enables LJD to expand vocational training programs to more marginalised communities.",
  },
];

export default function Newsroom() {
  return (
    <section id="newsroom" className="py-24 lg:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">Stay Updated</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)] leading-tight">
              Latest News &<br />Events
            </h2>
          </div>
          <a href="#" className="self-start lg:self-end btn-outline">
            View All News
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <article
              key={i}
              className="bg-white border news-card cursor-pointer group"
              style={{ borderColor: "var(--line)" }}
            >
              {/* Placeholder image area */}
              <div
                className="aspect-video flex items-center justify-center border-b"
                style={{ background: "var(--cream)", borderColor: "var(--line)" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center border"
                  style={{ borderColor: "var(--faint)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--faint)" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
                    style={{ background: "var(--white)", border: "1px solid var(--line)", color: "var(--accent)" }}
                  >
                    {item.category}
                  </span>
                  <span className="text-[var(--faint)] text-xs">{item.date}</span>
                </div>
                <h3 className="font-display text-lg mb-3 leading-snug news-title">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
