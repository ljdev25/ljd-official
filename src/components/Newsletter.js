"use client";
import { useState } from "react";

const socials = [
  { name: "TikTok", handle: "@ljd.official", href: "#" },
  { name: "Instagram", handle: "@ljd.official", href: "#" },
  { name: "Facebook", handle: "LJD.FB", href: "#" },
  { name: "LinkedIn", handle: "LJD Corporation", href: "#" },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ background: "var(--cream-deep)" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="eyebrow mb-8">Join Our Community</div>

        <h2 className="font-display text-4xl lg:text-6xl text-[var(--ink)] mb-4 leading-tight">
          Be Part of the
          <br />
          <span className="italic">Change</span>
        </h2>
        <p className="text-[var(--ink-soft)] text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Stay updated with our latest news, product launches, and sustainability
          initiatives. Together, we turn waste into worth.
        </p>

        {submitted ? (
          <div className="bg-white border p-8 max-w-md mx-auto" style={{ borderColor: "var(--line)" }}>
            <div className="font-display text-2xl mb-2" style={{ color: "var(--ink)" }}>
              Thank you!
            </div>
            <p className="text-[var(--muted)]">
              You&apos;re now part of the LJD community.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 bg-white border text-[var(--ink)] outline-none focus:border-[var(--accent)] text-sm"
              style={{ borderColor: "var(--line)" }}
            />
            <button type="submit" className="btn-solid whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
        )}

        <p className="text-[var(--faint)] text-xs mb-16">
          No spam, ever. Unsubscribe anytime.
        </p>

        {/* Social links */}
        <div className="border-t pt-10" style={{ borderColor: "var(--line)" }}>
          <p className="text-[var(--muted)] mb-6 uppercase tracking-widest text-xs font-semibold">
            Follow Our Journey
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="flex flex-col items-center gap-1 group"
              >
                <span className="text-[var(--ink)] font-semibold text-sm group-hover:text-[var(--accent)] transition-colors">
                  {s.name}
                </span>
                <span className="text-[var(--muted)] text-xs">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
