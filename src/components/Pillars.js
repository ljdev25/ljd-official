const pillars = [
  {
    number: "01",
    title: "Recruit",
    description:
      "We identify and recruit marginalised community members, opening pathways to meaningful employment and economic independence in Sabah.",
  },
  {
    number: "02",
    title: "Invest",
    description:
      "We invest in our communities through resources, infrastructure, and strategic partnerships that build long-term sustainable livelihoods.",
  },
  {
    number: "03",
    title: "Train",
    description:
      "We provide hands-on skills training in jewellery crafting, product design, and business fundamentals — equipping artisans for lasting success.",
  },
  {
    number: "04",
    title: "Empower",
    description:
      "We empower artisans with dignified work, fair wages, and the pride of creating beautiful products that make a global environmental impact.",
  },
];

export default function Pillars() {
  return (
    <section id="workshops" className="py-24 lg:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">Our Approach</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)]">
            The LJD Framework
          </h2>
          <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
            Four pillars that drive our mission — from first contact to lasting
            empowerment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--line)] border border-[var(--line)]">
          {pillars.map((pillar, i) => (
            <div key={i} className="p-8 bg-white">
              <div className="font-display text-sm mb-6" style={{ color: "var(--accent)" }}>
                {pillar.number}
              </div>
              <h3 className="font-display text-2xl text-[var(--ink)] mb-3">{pillar.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
