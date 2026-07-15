export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <div className="eyebrow mb-6">Social Enterprise — Sabah, Malaysia</div>

            <h1 className="font-display text-5xl lg:text-7xl text-[var(--ink)] leading-[1.08] mb-6">
              Turning Plastic
              <br />
              Into <span className="italic" style={{ color: "var(--accent)" }}>Possibility</span>
            </h1>

            <p className="text-[var(--ink-soft)] text-lg leading-relaxed mb-10 max-w-lg">
              We transform recycled plastic waste into beautiful jewellery —
              empowering marginalised communities with dignified employment
              across Sabah, Malaysia.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn-solid">
                Shop Now
              </a>
              <a href="#about" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>

          {/* Right — image placeholder */}
          <div className="relative mt-8 lg:mt-0">
            <div
              className="overflow-hidden aspect-[4/5] flex items-center justify-center border"
              style={{ background: "var(--cream-deep)", borderColor: "var(--line)" }}
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
                <p className="text-[var(--muted)] text-sm">Hero Image Placeholder</p>
                <p className="text-[var(--faint)] text-xs mt-1">
                  Replace with actual photo
                </p>
              </div>
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -bottom-5 -left-5 bg-white p-5 border"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="font-display text-3xl" style={{ color: "var(--ink)" }}>
                500+
              </div>
              <div className="text-[11px] uppercase tracking-widest text-[var(--muted)] mt-1">
                Years of Decomp. Saved
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 text-white p-5"
              style={{ background: "var(--accent)" }}
            >
              <div className="font-display text-2xl">100%</div>
              <div className="text-[11px] uppercase tracking-widest text-white/80 mt-1">Recycled</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center gap-2 text-[var(--faint)] animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
