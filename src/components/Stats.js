const stats = [
  { value: "500+", label: "Years of plastic decomposition prevented per item" },
  { value: "100%", label: "Recycled materials used in every product" },
  { value: "5+", label: "Global partners & institutional supporters" },
  { value: "4", label: "Core pillars driving our community impact" },
];

export default function Stats() {
  return (
    <section style={{ background: "var(--ink)" }} className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4 py-6">
              <div className="font-display text-4xl lg:text-5xl mb-3" style={{ color: "var(--white)" }}>
                {stat.value}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-widest leading-snug max-w-[160px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
