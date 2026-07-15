const initiatives = [
  {
    number: "01",
    title: "Land Restoration of Kayu Madang Landfill",
    objective:
      "Restore degraded land areas, such as Kayu Madang landfill, through responsible waste management and upcycling efforts.",
    actions: [
      "Collaborate with scavengers and local authorities to minimise landfill environmental impact through waste removal and recycling",
      "Execute reforestation and rehabilitation of waste-affected zones with community participation",
      "Promote these programs as expressions of LJD's environmental dedication and sustainable development commitment in Sabah",
    ],
  },
  {
    number: "02",
    title: "Plastic Waste Management and Upcycling",
    objective:
      "Reduce plastic waste in Sabah by collecting, sorting, and upcycling plastic materials into valuable products.",
    actions: [
      "Develop and grow mini recycling centres in communities like Kampung Kepayan Baru",
      "Engage scavengers in landfill plastic recovery with fair compensation",
      "Conduct educational workshops on recycling practices and upcycling entrepreneurship",
      "Create a recycled plastic product line featuring accessories, handbags, and furniture produced by marginalised communities",
    ],
  },
  {
    number: "03",
    title: "Community Empowerment through Sustainable Livelihoods",
    objective:
      "Empower marginalised communities in Sabah — including single mothers, housewives, and villagers — to achieve sustainable incomes through eco-friendly practices.",
    actions: [
      "Provide skills training for manufacturing marketable recycled-material products",
      "Establish cooperative production and sales initiatives",
      "Create a branded product line showcasing young Sabahan designers and artisans",
    ],
  },
];

function PlaceholderImage() {
  return (
    <div
      className="overflow-hidden aspect-[4/3] flex items-center justify-center border"
      style={{ background: "var(--cream)", borderColor: "var(--line)" }}
    >
      <div className="text-center p-8">
        <div
          className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border"
          style={{ borderColor: "var(--faint)" }}
        >
          <svg
            className="w-8 h-8"
            style={{ color: "var(--faint)" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
          </svg>
        </div>
        <p className="text-[var(--muted)] text-sm">Project Photo</p>
      </div>
    </div>
  );
}

export default function InitiativesList() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
        {initiatives.map((item, i) => (
          <div
            key={item.number}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <div className="font-display text-sm mb-4" style={{ color: "var(--accent)" }}>
                {item.number}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl text-[var(--ink)] leading-tight mb-5">
                {item.title}
              </h2>
              <p className="text-[var(--ink-soft)] text-lg leading-relaxed mb-6">
                {item.objective}
              </p>
              <ul className="space-y-3">
                {item.actions.map((action, j) => (
                  <li key={j} className="flex gap-3 text-[var(--muted)] text-sm leading-relaxed">
                    <span className="mt-1 flex-shrink-0" style={{ color: "var(--accent)" }}>
                      ✦
                    </span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
            <PlaceholderImage />
          </div>
        ))}
      </div>
    </section>
  );
}
