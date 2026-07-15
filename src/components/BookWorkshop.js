const offerings = [
  {
    title: "Upcycling Plastic Waste into Flowers",
    duration: "2 hr",
    price: "RM 50",
  },
  {
    title: "Upcycled Keychains",
    duration: "2 hr",
    price: "RM 50",
  },
];

export default function BookWorkshop() {
  return (
    <section id="workshops" className="py-24 lg:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">Book Your Spot</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)]">
            Service Offerings
          </h2>
          <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
            Bring a workshop to your school, office, or community group.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {offerings.map((item, i) => (
            <div key={i} className="p-8 bg-white border flex flex-col" style={{ borderColor: "var(--line)" }}>
              <h3 className="font-display text-xl text-[var(--ink)] mb-4">{item.title}</h3>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[var(--muted)] text-sm">{item.duration}</span>
                <span className="w-1 h-1 rounded-full" style={{ background: "var(--faint)" }} />
                <span className="font-display text-2xl" style={{ color: "var(--accent)" }}>
                  {item.price}
                </span>
              </div>
              <a href="#contact" className="btn-outline mt-auto">
                Request to Book
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
