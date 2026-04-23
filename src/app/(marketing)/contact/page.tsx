import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Techturi",
  description: "Get in touch with Techturi. Email, GitHub, or book a call directly.",
};

const PATHS = [
  {
    icon: "[ 01 ]",
    title: "Book a call",
    desc: "30-minute free call. Tell me what you need, I tell you if I can help. No pitch.",
    cta: "Book now →",
    href: "/book",
    primary: true,
  },
  {
    icon: "[ 02 ]",
    title: "Project intake",
    desc: "Know what you want? Fill out the intake form and skip straight to the proposal.",
    cta: "Fill intake →",
    href: "/intake",
    primary: false,
  },
  {
    icon: "[ 03 ]",
    title: "Email directly",
    desc: "techturi.org@gmail.com — I respond within 48 hours on business days.",
    cta: "Send email →",
    href: "mailto:techturi.org@gmail.com",
    primary: false,
  },
  {
    icon: "[ 04 ]",
    title: "GitHub",
    desc: "See the code behind the projects. All public repos at github.com/tegapeters.",
    cta: "View GitHub →",
    href: "https://github.com/tegapeters",
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 80px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              Houston, TX · Response within 48h
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(56px,8vw,112px)", fontWeight: 400, lineHeight: 0.93, letterSpacing: "-0.04em", marginBottom: 40 }}>
              Let&apos;s<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>connect.</em>
            </h1>
            <p style={{ fontSize: 20, color: "var(--dim)", maxWidth: 520, lineHeight: 1.6 }}>
              Pick the path that fits. A call, a form, or a direct email — all lead to the same place.
            </p>
          </div>
        </section>

        {/* ── CONTACT PATHS ── */}
        <section style={{ padding: "0 0 140px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 32px 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="contact-grid">
              {PATHS.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  style={{
                    background: p.primary ? "linear-gradient(135deg, #1A1F0A 0%, #131315 100%)" : "var(--surface)",
                    border: `1px solid ${p.primary ? "var(--accent-dim)" : "var(--border)"}`,
                    borderRadius: 8,
                    padding: "36px 32px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    transition: "transform 0.2s, border-color 0.2s",
                  }}
                  className="contact-card"
                >
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em" }}>
                    {p.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 24, fontWeight: 500, color: "var(--foreground)", lineHeight: 1.1 }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.7, flex: 1 }}>
                    {p.desc}
                  </div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: p.primary ? "var(--accent)" : "var(--foreground)", letterSpacing: "0.05em", paddingTop: 8, borderTop: "1px solid var(--border)" }}>
                    {p.cta}
                  </div>
                </Link>
              ))}
            </div>

            {/* Direct email strip */}
            <div style={{ marginTop: 60, padding: "32px 40px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                  // DIRECT EMAIL
                </div>
                <a href="mailto:techturi.org@gmail.com" style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 32, color: "var(--foreground)", textDecoration: "none", letterSpacing: "-0.02em" }}>
                  techturi.org@gmail.com
                </a>
              </div>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dimmer)" }}>
                Houston, TX · 832.660.1325
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .contact-card:hover { transform: translateY(-4px); border-color: var(--dimmer) !important; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
