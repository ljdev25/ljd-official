const mission = [
  {
    number: "01",
    title: "Reducing Plastic Waste",
    description:
      "Recycling and upcycling materials like polypropylene straps into premium, long-lasting products.",
  },
  {
    number: "02",
    title: "Fostering Community Development",
    description:
      "Providing dignified employment and skills training to marginalised populations across Sabah.",
  },
  {
    number: "03",
    title: "Driving Economic Growth",
    description:
      "Collaborating with artisans and institutions to achieve government and international market recognition.",
  },
];

const vision = [
  {
    number: "01",
    title: "Circular Economy Leadership",
    description:
      "Positioning waste as a renewable resource, at the forefront of the global movement towards a circular economy.",
  },
  {
    number: "02",
    title: "Global Impact",
    description:
      "Creating environmental and social improvements that reach across borders, beyond Sabah alone.",
  },
  {
    number: "03",
    title: "Cultural Preservation",
    description:
      "Promoting Sabahan heritage by weaving traditional design elements into every product we make.",
  },
];

function Group({ eyebrow, heading, items }) {
  return (
    <div>
      <div className="text-center mb-12">
        <div className="eyebrow mb-4">{eyebrow}</div>
        <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)]">{heading}</h2>
      </div>
      <div className="grid sm:grid-cols-3 divide-x divide-y sm:divide-y-0 divide-[var(--line)] border border-[var(--line)]">
        {items.map((item, i) => (
          <div key={i} className="p-8 bg-white">
            <div className="font-display text-sm mb-6" style={{ color: "var(--accent)" }}>
              {item.number}
            </div>
            <h3 className="font-display text-xl text-[var(--ink)] mb-3">{item.title}</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <Group eyebrow="Our Mission" heading="What Drives Us" items={mission} />
        <Group eyebrow="Our Vision" heading="Where We're Headed" items={vision} />
      </div>
    </section>
  );
}
