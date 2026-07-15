export default function SustainabilityHero() {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-24" style={{ background: "var(--cream)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="eyebrow mb-6">Our Impact</div>
        <h1 className="font-display text-4xl lg:text-6xl text-[var(--ink)] leading-tight mb-6">
          Sustainability
          <span className="italic" style={{ color: "var(--accent)" }}> Initiatives</span>
        </h1>
        <p className="text-[var(--ink-soft)] text-lg leading-relaxed max-w-2xl mx-auto">
          Three programs working side by side — restoring degraded land,
          reducing plastic waste, and building sustainable livelihoods for
          marginalised communities across Sabah.
        </p>
      </div>
    </section>
  );
}
