export default function WorkshopsHero() {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-24" style={{ background: "var(--cream)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="eyebrow mb-6">Hands-On Sustainability</div>
        <h1 className="font-display text-4xl lg:text-6xl text-[var(--ink)] leading-tight mb-6">
          Workshops &
          <span className="italic" style={{ color: "var(--accent)" }}> Community Programs</span>
        </h1>
        <p className="text-[var(--ink-soft)] text-lg leading-relaxed max-w-2xl mx-auto">
          We run hands-on sessions teaching sustainability, recycling, and
          upcycling — turning plastic waste into flowers, keychains, and more,
          alongside partners and communities across Sabah.
        </p>
      </div>
    </section>
  );
}
