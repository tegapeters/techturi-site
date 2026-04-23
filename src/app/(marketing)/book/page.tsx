import Link from "next/link";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call — Techturi",
  description: "Schedule a free 15-minute call with Tega. No pitch — just a conversation about what you need.",
};

const WHAT_TO_EXPECT = [
  {
    num: "01",
    title: "You talk, I listen",
    desc: "Tell me what you're building, what's broken, or what you need. No forms, no questionnaires — just a real conversation.",
  },
  {
    num: "02",
    title: "I give you a straight answer",
    desc: "If I can help, I'll tell you exactly how. If I can't, I'll point you somewhere that can. No vague follow-ups.",
  },
  {
    num: "03",
    title: "Next steps if it fits",
    desc: "If there's a fit, I'll send a proposal within 48 hours. If you just need advice, that's fine too — the call is free either way.",
  },
];

const GOOD_FOR = [
  "You need a website but don't know where to start",
  "You want to understand the difference between a Wix sub and a custom build",
  "You have an existing site that needs a redesign or fixes",
  "You want an iOS app built alongside your site",
  "You're not sure if your budget is realistic",
  "You want to talk through a tech roadmap for your business",
];

export default function BookPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 80px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              Free · 15 Minutes · No Pitch
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 32 }}>
              Let&apos;s talk about<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>what you need.</em>
            </h1>
            <p style={{ fontSize: 20, color: "var(--dim)", maxWidth: 560, lineHeight: 1.6 }}>
              15 minutes with Tega. No sales script. You tell me what you&apos;re working on — I tell you if and how I can help.
            </p>
          </div>
        </section>

        {/* ── MAIN LAYOUT ── */}
        <section style={{ padding: "0 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, paddingTop: 80 }} className="book-grid">

              {/* Left — booking */}
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 40 }}>
                  // PICK A TIME
                </div>

                {/* Calendly placeholder */}
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "48px 40px", marginBottom: 32, textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 32, color: "var(--accent)", marginBottom: 24 }}>[ CAL ]</div>
                  <h3 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 28, fontWeight: 400, marginBottom: 12, color: "var(--foreground)" }}>
                    Schedule directly
                  </h3>
                  <p style={{ color: "var(--dim)", fontSize: 14, lineHeight: 1.6, marginBottom: 32, maxWidth: 340, margin: "0 auto 32px" }}>
                    Pick a time that works for you. Google Meet link sent automatically. Cancel or reschedule anytime.
                  </p>
                  <a
                    href="mailto:tegapeters11@gmail.com?subject=Book%20a%20Call%20-%20Techturi&body=Hi%20Tega%2C%0A%0AI%27d%20like%20to%20schedule%20a%2015-minute%20call.%0A%0AWhat%20I%27m%20working%20on%3A%0A%0ABest%20times%20for%20me%3A%0A%0AThanks"
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: 13,
                      padding: "14px 32px",
                      background: "var(--accent)",
                      color: "var(--background)",
                      borderRadius: 4,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Request a time →
                  </a>
                </div>

                {/* Alt contact */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {[
                    { label: "Email directly", href: "mailto:tegapeters11@gmail.com", icon: "[ @ ]" },
                    { label: "Fill intake form", href: "/intake", icon: "[ ✎ ]" },
                  ].map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      style={{
                        flex: 1,
                        minWidth: 160,
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        padding: "20px 24px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                      className="alt-card"
                    >
                      <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)" }}>{c.icon}</span>
                      <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.05em" }}>{c.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right — context */}
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 40 }}>
                  // WHAT HAPPENS ON THE CALL
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 60 }}>
                  {WHAT_TO_EXPECT.map((step, i) => (
                    <div
                      key={step.num}
                      style={{
                        display: "flex",
                        gap: 24,
                        padding: "28px 0",
                        borderBottom: i < WHAT_TO_EXPECT.length - 1 ? "1px solid var(--border)" : "none",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--accent)", fontWeight: 600, minWidth: 28, paddingTop: 2 }}>{step.num}</div>
                      <div>
                        <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 22, fontWeight: 500, marginBottom: 8, color: "var(--foreground)" }}>{step.title}</div>
                        <div style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.7 }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "32px" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
                    // GOOD FOR
                  </div>
                  <ul style={{ listStyle: "none" }}>
                    {GOOD_FOR.map((item) => (
                      <li key={item} style={{ padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: 14, color: "var(--dim)", display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.5 }}>
                        <span style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, marginTop: 1 }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── ABOUT TEGA ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "center" }} className="about-strip">
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
                  // WHO YOU&apos;RE TALKING TO
                </div>
                <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 48, fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                  Tega<em style={{ color: "var(--accent)" }}>.</em>
                </h2>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.08em" }}>
                  Houston, TX
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="bio-grid">
                {[
                  { label: "Background", val: "6yr Senior Engineer at Oracle. Lockheed Martin. Engineer who ships things." },
                  { label: "Certs", val: "11+ certifications across cloud, security, data, and AI." },
                  { label: "Studio", val: "Built websites for housing authorities, event platforms, and service businesses." },
                ].map((b) => (
                  <div key={b.label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "24px" }}>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>{b.label}</div>
                    <div style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.6 }}>{b.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .book-grid   { grid-template-columns: 1fr !important; }
          .about-strip { grid-template-columns: 1fr !important; }
          .bio-grid    { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .bio-grid { grid-template-columns: 1fr !important; }
        }
        .alt-card:hover { border-color: var(--dimmer) !important; }
      `}</style>
    </>
  );
}
