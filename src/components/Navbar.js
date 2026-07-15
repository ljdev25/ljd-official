"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Workshops", href: "/workshops" },
  { label: "Newsroom", href: "/#newsroom" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ borderColor: "rgba(109,147,184,0.25)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/#home" className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-9 h-9 border flex items-center justify-center"
              style={{ borderColor: "var(--ink)" }}
            >
              <span className="font-display text-xs tracking-tight text-[var(--ink)]">
                LJD
              </span>
            </div>
            <div>
              <div className="font-display text-base leading-none text-[var(--ink)]">
                LJD
              </div>
              <div className="text-[10px] font-semibold leading-none uppercase tracking-widest mt-1 text-[var(--accent)]">
                Corporation
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:flex items-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border border-[var(--ink)] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white"
            >
              Partner With Us
            </a>
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-px bg-[var(--ink)] transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-[var(--ink)] transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-[var(--ink)] transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div
          className="bg-white border-t px-4 pt-2 pb-6 space-y-1"
          style={{ borderColor: "rgba(109,147,184,0.25)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-[var(--ink-soft)] text-xs font-semibold uppercase tracking-widest border-b border-[var(--line)] hover:text-[var(--accent)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 text-center py-3 border border-[var(--ink)] text-[var(--ink)] text-xs font-semibold uppercase tracking-widest hover:bg-[var(--ink)] hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Partner With Us
          </a>
        </div>
      </div>
    </nav>
  );
}
