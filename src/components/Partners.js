const partners = [
  { name: "ASEAN", full: "Association of Southeast Asian Nations" },
  { name: "US Embassy", full: "United States Embassy Malaysia" },
  { name: "UMS", full: "Universiti Malaysia Sabah" },
  { name: "SEWF", full: "Social Enterprise World Forum" },
  { name: "APPGM SDG", full: "All-Party Parliamentary Group Malaysia SDG" },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white border-t" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="eyebrow mb-3">Trusted By</div>
          <h2 className="font-display text-3xl text-[var(--ink)]">
            Our Partners & Supporters
          </h2>
          <p className="text-[var(--muted)] mt-3 text-sm">
            Working together to create systemic, lasting change
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
          {partners.map((partner, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="w-32 h-16 flex items-center justify-center partner-card">
                <span className="text-sm font-semibold partner-name">
                  {partner.name}
                </span>
              </div>
              <p className="text-[11px] text-[var(--muted)] mt-2 max-w-[130px] leading-tight">
                {partner.full}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
