const quickLinks = ["Home", "About Us", "Shop", "Workshops", "Newsroom", "Sustainability"];
const initiatives = ["Kayu Madang Project", "Community Training", "Partner With Us", "Sustainability Report", "Impact Stories", "Contact Us"];
const socials = [
  { letter: "T", name: "TikTok" },
  { letter: "I", name: "Instagram" },
  { letter: "F", name: "Facebook" },
  { letter: "Li", name: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer
      className="text-white py-16 lg:py-20"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 border flex items-center justify-center"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                <span className="font-display text-xs">LJD</span>
              </div>
              <div>
                <div className="font-display text-xl leading-none">LJD Corporation</div>
                <div
                  className="text-[10px] uppercase tracking-widest leading-none mt-1.5"
                  style={{ color: "var(--accent)" }}
                >
                  Recycled Plastic Jewellery
                </div>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed max-w-xs mb-6 text-sm">
              Empowering marginalised communities through dignified employment by
              transforming plastic waste into beautiful, meaningful products.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  title={s.name}
                  className="w-10 h-10 flex items-center justify-center text-xs font-semibold footer-social"
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--accent)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--accent)" }}
            >
              Initiatives
            </h4>
            <ul className="space-y-3">
              {initiatives.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-white/30 text-sm">©2026 by LJD Official. All rights reserved.</p>
          <p className="text-white/30 text-sm">Sabah, Malaysia 🇲🇾</p>
        </div>
      </div>
    </footer>
  );
}
