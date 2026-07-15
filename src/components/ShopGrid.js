// Placeholder — swap for LJD's real WhatsApp business number before launch
const WHATSAPP_NUMBER = "60123456789";

const products = [
  {
    name: "Radiant Trio Collection",
    price: 162.45,
    regularPrice: 171.0,
  },
  {
    name: "Sinumandak Grace Earrings",
    price: 57.0,
  },
  {
    name: "Anavau Radiance Earrings",
    price: 57.0,
  },
  {
    name: "Rose Reclaim Earrings",
    price: 57.0,
  },
  {
    name: "Verdant Echo Earrings",
    price: 57.0,
  },
];

function whatsappLink(product) {
  const message = `Hi, I'm interested in the ${product.name} (RM ${product.price.toFixed(2)}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function PlaceholderImage() {
  return (
    <div
      className="aspect-square flex items-center justify-center border-b"
      style={{ background: "var(--cream)", borderColor: "var(--line)" }}
    >
      <div
        className="w-14 h-14 flex items-center justify-center border"
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
    </div>
  );
}

export default function ShopGrid() {
  return (
    <section className="py-16 lg:py-24" style={{ background: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="border group" style={{ borderColor: "var(--line)" }}>
              <PlaceholderImage />
              <div className="p-6">
                <h3 className="font-display text-lg text-[var(--ink)] mb-2 leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-5">
                  {product.regularPrice && (
                    <span className="text-[var(--faint)] text-sm line-through">
                      RM {product.regularPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="font-display text-lg" style={{ color: "var(--accent)" }}>
                    RM {product.price.toFixed(2)}
                  </span>
                </div>
                <a
                  href={whatsappLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
