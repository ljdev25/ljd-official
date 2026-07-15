const products = [
  {
    title: "Recycled Plastic Jewellery",
    description:
      "Handcrafted jewellery pieces made entirely from recycled plastic — transformed into stunning wearable art that carries a story of environmental impact.",
    tag: "Signature Product",
    link: "/shop",
  },
  {
    title: "Community Workshops",
    description:
      "Engaging, hands-on workshops where participants learn about sustainability, plastic pollution, and the art of transforming waste into beautiful products.",
    tag: "Experiences",
    link: "/workshops",
  },
  {
    title: "Sustainability Initiatives",
    description:
      "Collaborative programs designed to tackle plastic pollution at scale, creating systemic, lasting change in communities across Sabah.",
    tag: "Impact Programs",
    link: "/sustainability",
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
        <p className="text-[var(--muted)] text-xs">Product Image</p>
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

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32" style={{ background: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-4">What We Offer</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)] leading-tight">
              Our Products &<br />Services
            </h2>
          </div>
          <a href="/shop" className="self-start lg:self-end btn-outline">
            Visit Shop
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="border group" style={{ borderColor: "var(--line)" }}>
              <PlaceholderImage tag={product.tag} />
              <div className="p-7">
                <h3
                  className="font-display text-xl mb-3 group-hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--ink)" }}
                >
                  {product.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <a href={product.link} className="link-underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
