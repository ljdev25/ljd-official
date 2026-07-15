"use client";
import { useState } from "react";

const info = [
  {
    label: "Address",
    value:
      "Sabah Creative Economy And Innovation Centre (SCENIC), Lot 12, Ready Built Factory (RBF5), Industrial Park (KKIP), 88450 Kota Kinabalu, Sabah",
  },
  {
    label: "Email",
    value: "info@ljdofficial.com",
    href: "mailto:info@ljdofficial.com",
  },
  {
    label: "Mobile",
    value: "011-1907 7170",
    href: "https://wa.me/601119077170",
  },
];

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "address", label: "Address", type: "text" },
  { name: "subject", label: "Subject", type: "text" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24" style={{ background: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="eyebrow mb-4">Contact Information</div>
            <h2 className="font-display text-3xl text-[var(--ink)] leading-tight mb-8">
              Reach Us Directly
            </h2>
            <div className="space-y-8">
              {info.map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[var(--ink-soft)] leading-relaxed hover:text-[var(--accent)] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[var(--ink-soft)] leading-relaxed">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/601119077170"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid mt-10"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white border p-10" style={{ borderColor: "var(--line)" }}>
                <div className="font-display text-2xl mb-2" style={{ color: "var(--ink)" }}>
                  Thanks for submitting!
                </div>
                <p className="text-[var(--muted)]">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {fields.map((field) => (
                    <div
                      key={field.name}
                      className={field.name === "address" || field.name === "subject" ? "sm:col-span-2" : ""}
                    >
                      <label
                        htmlFor={field.name}
                        className="block text-[10px] font-semibold uppercase tracking-widest mb-2 text-[var(--muted)]"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required
                        className="w-full px-4 py-3 bg-white border text-[var(--ink)] outline-none focus:border-[var(--accent)] text-sm"
                        style={{ borderColor: "var(--line)" }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-semibold uppercase tracking-widest mb-2 text-[var(--muted)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white border text-[var(--ink)] outline-none focus:border-[var(--accent)] text-sm resize-none"
                    style={{ borderColor: "var(--line)" }}
                  />
                </div>
                <button type="submit" className="btn-solid">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
