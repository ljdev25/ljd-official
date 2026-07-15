const highlights = [
  {
    category: "Recap",
    title: "Upcycling Plastic Waste into Flowers",
    excerpt:
      "Our recycled plastic flower-making workshop was a success, with participants travelling from as far as Keningau and Kudat to join us — plus lecturers and students from MSU College. Plastic materials were generously donated by Uniqlo at Imago Shopping Mall, and support came from American Green Corner Sabah, the U.S. Embassy, and the Tanjung Aru State Library Branch.",
    hashtags: "#recycledplasticflowermakingworkshop #sustainability #gogreen",
  },
  {
    category: "Recap",
    title: "Keychain Workshop",
    excerpt:
      "Participants crafted unique, eco-friendly keychains from recycled plastic waste at American Green Corner Sabah, funded by the U.S. Embassy. The session brought together nurses from the Ministry of Health, teachers, and enthusiastic children, all learning to transform everyday plastic waste into functional, decorative items.",
    hashtags: "#recycledplastickeychains #sustainablefashion #gogreen",
  },
];

function PlaceholderImage({ tag }) {
  return (
    <div
      className="aspect-video flex items-center justify-center relative overflow-hidden border-b"
      style={{ background: "var(--cream)", borderColor: "var(--line)" }}
    >
      <div className="text-center">
        <div
          className="w-14 h-14 mx-auto mb-2 flex items-center justify-center border"
          style={{ borderColor: "var(--faint)" }}
        >
          <svg
            className="w-7 h-7"
            style={{ color: "var(--faint)" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>
        <p className="text-[var(--muted)] text-xs">Workshop Photo</p>
      </div>
      <div
        className="absolute top-4 left-4 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
        style={{ background: "var(--white)", color: "var(--accent)" }}
      >
        {tag}
      </div>
    </div>
  );
}

export default function WorkshopHighlights() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">Past Sessions</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)]">
            Recent Workshops
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {highlights.map((item, i) => (
            <article
              key={i}
              className="bg-white border news-card"
              style={{ borderColor: "var(--line)" }}
            >
              <PlaceholderImage tag={item.category} />
              <div className="p-7">
                <h3 className="font-display text-xl mb-3 leading-snug news-title">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <p className="text-[var(--faint)] text-xs">{item.hashtags}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
