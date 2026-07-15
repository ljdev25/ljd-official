export default function ContactHero() {
  return (
    <section className="pt-40 pb-16 lg:pt-48 lg:pb-20" style={{ background: "var(--cream)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="eyebrow mb-6">Get in Touch</div>
        <h1 className="font-display text-4xl lg:text-6xl text-[var(--ink)] leading-tight mb-6">
          Contact
          <span className="italic" style={{ color: "var(--accent)" }}> Us</span>
        </h1>
        <p className="text-[var(--ink-soft)] text-lg leading-relaxed max-w-2xl mx-auto">
          Questions, partnerships, or bulk orders — we&apos;d love to hear
          from you.
        </p>
      </div>
    </section>
  );
}
