export default function KayuMadang() {
  return (
    <section
      id="sustainability"
      className="py-24 lg:py-32"
      style={{ background: "var(--ink)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "var(--accent)" }}>
              Featured Initiative
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-6">
              The Kayu Madang
              <br />
              <span className="italic" style={{ color: "var(--accent)" }}>Project</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              The Kayu Madang Project is one of LJD Corporation&apos;s flagship
              sustainability initiatives, focused on preserving Sabah&apos;s
              natural ecosystems while creating meaningful work for local
              communities.
            </p>
            <p className="text-white/50 leading-relaxed mb-10">
              Through a combination of reforestation, plastic recovery, and
              community engagement, we&apos;re building a replicable model for
              sustainable development across Southeast Asia.
            </p>
            <a href="/sustainability" className="btn-outline-light">
              Explore the Project
            </a>
          </div>

          {/* Image placeholder */}
          <div
            className="overflow-hidden aspect-[4/3] flex items-center justify-center border"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.15)" }}
          >
            <div className="text-center p-8">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                <svg
                  className="w-8 h-8 text-white/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                </svg>
              </div>
              <p className="text-white/40 text-sm">Kayu Madang Image</p>
              <p className="text-white/25 text-xs mt-1">
                Replace with project photo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
