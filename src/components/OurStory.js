export default function OurStory() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image side */}
          <div className="relative">
            <div
              className="overflow-hidden aspect-square flex items-center justify-center border"
              style={{ background: "var(--cream)", borderColor: "var(--line)" }}
            >
              <div className="text-center p-8">
                <div
                  className="w-20 h-20 mx-auto mb-4 flex items-center justify-center border"
                  style={{ borderColor: "var(--faint)" }}
                >
                  <svg
                    className="w-9 h-9"
                    style={{ color: "var(--faint)" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
                <p className="text-[var(--muted)] text-sm">Kayu Madang Landfill</p>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -right-6 text-white p-6 max-w-[220px]"
              style={{ background: "var(--accent)" }}
            >
              <div className="font-display text-3xl mb-1">500</div>
              <div className="text-white/85 text-xs leading-relaxed uppercase tracking-widest">
                Years plastic takes to decompose
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="eyebrow mb-4">Our Story</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)] leading-tight mb-6">
              From Landfill to
              <span className="italic" style={{ color: "var(--accent)" }}> Livelihood</span>
            </h2>
            <p className="text-[var(--ink-soft)] text-lg leading-relaxed mb-4">
              LJD Corporation is an accredited social enterprise based in Sabah,
              Malaysia, dedicated to transforming plastic waste into tourism
              products and fashion accessories — from handbags to jewellery —
              featuring traditional Sabahan motifs.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Our work centres on the Kayu Madang landfill, where we recycle
              and upcycle materials such as polypropylene straps into wearable
              art. We also lead land restoration efforts on site, compensating
              waste scavengers for their participation in rehabilitation
              initiatives — turning environmental recovery into a source of
              dignified income.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              It&apos;s a cycle we&apos;re proud to interrupt: waste that would
              otherwise sit for centuries instead becomes employment, skills,
              and beautifully made products that carry Sabah&apos;s story to the
              world.
            </p>
          </div>
        </div>

        {/* Facilities */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-8 border" style={{ borderColor: "var(--line)", background: "var(--cream)" }}>
            <div className="eyebrow mb-3">Facility 01</div>
            <h3 className="font-display text-2xl text-[var(--ink)] mb-3">
              The Makerspace
            </h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              A 3,666 sq ft makerspace at the Sabah Creative Economy and
              Innovation Centre, where recycled plastic is designed, crafted,
              and transformed into finished products by our artisans.
            </p>
          </div>
          <div className="p-8 border" style={{ borderColor: "var(--line)", background: "var(--cream)" }}>
            <div className="eyebrow mb-3">Facility 02</div>
            <h3 className="font-display text-2xl text-[var(--ink)] mb-3">
              Mini Recycling Centre
            </h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              A developing mini recycling centre at Kampung Kepayan Baru,
              expanding our capacity to process plastic waste closer to the
              communities we work alongside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
