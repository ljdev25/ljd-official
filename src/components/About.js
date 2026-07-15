export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                <p className="text-[var(--muted)] text-sm">About Image Placeholder</p>
              </div>
            </div>

            {/* Mission card */}
            <div
              className="absolute -bottom-6 -right-6 text-white p-6 max-w-[220px]"
              style={{ background: "var(--accent)" }}
            >
              <div className="font-display text-base mb-2">Our Mission</div>
              <div className="text-white/85 text-xs leading-relaxed">
                Empower marginalised communities by providing dignified
                employment opportunities
              </div>
            </div>

            {/* Eco badge */}
            <div
              className="absolute -top-5 -left-5 bg-white p-4 border flex items-center gap-3"
              style={{ borderColor: "var(--line)" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center border"
                style={{ borderColor: "var(--olive)" }}
              >
                <span style={{ color: "var(--olive)" }} className="text-lg">✦</span>
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>
                  Eco-First
                </div>
                <div className="text-[var(--muted)] text-xs">Since Day One</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="eyebrow mb-4">About LJD Corporation</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[var(--ink)] leading-tight mb-6">
              From Waste to Worth —<br />A Story of
              <span className="italic" style={{ color: "var(--accent)" }}> Transformation</span>
            </h2>
            <p className="text-[var(--ink-soft)] text-lg leading-relaxed mb-4">
              LJD Corporation is a social enterprise based in Sabah, Malaysia,
              dedicated to transforming recycled plastic waste into premium
              tourism products and jewellery.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Plastic waste can take up to{" "}
              <strong className="text-[var(--ink-soft)]">500 years to decompose</strong>.
              We intercept this cycle — converting harmful waste into beautiful,
              valuable goods while driving socio-economic development in Sabah.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-10">
              Through our four-pillar framework of Recruit, Invest, Train, and
              Empower, we create real pathways to dignity and independence for
              marginalised community members.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-solid">
                Partner With Us
              </a>
              <a href="#products" className="btn-outline">
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
