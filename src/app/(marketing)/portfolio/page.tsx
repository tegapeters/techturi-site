import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Techturi",
  description: "Live client projects built by Techturi — housing authorities, event platforms, and more.",
};

const PROJECTS = [
  {
    id: "01",
    title: "A & J National Housing",
    type: "Government Lodging Platform",
    stack: ["Wix Studio", "Custom CSS", "SEO"],
    desc: "Full website build for a government-contracted lodging provider. Custom Wix Studio build with booking flow, property listings, and compliance-ready layout.",
    status: "LIVE",
    year: "2025",
    featured: true,
    href: "https://www.ajnationalhousing.com",
  },
  {
    id: "02",
    title: "HEOP23",
    type: "Event Platform",
    stack: ["Custom HTML", "CSS", "JavaScript"],
    desc: "Event registration and information platform for a university higher education opportunity program. Fast static build, mobile-first, zero hosting cost.",
    status: "LIVE",
    year: "2023",
    featured: false,
    href: "https://www.heop23.com",
  },
  {
    id: "03",
    title: "Snapi",
    type: "iOS App — Collab with Lazaro Martull",
    stack: ["Swift", "SwiftUI", "VNClassify", "CoreML"],
    desc: "iOS photo cleaner with AI-powered duplicate detection and smart categorization. 3-tab UI — Home, Duplicates, Categories. CNN similarity matching + Apple's Vision framework. Currently in demo — built in collaboration with Lazaro Martull.",
    status: "DEMO",
    year: "2026",
    featured: true,
    href: null,
  },
  {
    id: "04",
    title: "LeadOps CRM",
    type: "AI Lead Intelligence Engine",
    stack: ["Python", "Next.js", "Supabase"],
    desc: "Three-layer lead gen system that identifies ~2,000 businesses without a web presence, scores them by competition density, and surfaces high-value prospects.",
    status: "ACTIVE",
    year: "2025",
    featured: false,
    href: null,
  },
];

const statusColor = (s: string) => {
  if (s === "LIVE") return { color: "var(--accent)", border: "1px solid rgba(212,255,58,0.3)", background: "rgba(212,255,58,0.1)" };
  if (s === "DEPLOYED") return { color: "var(--accent-dim)", border: "1px solid rgba(168,204,46,0.3)", background: "rgba(168,204,46,0.08)" };
  if (s === "IN DEV" || s === "DEMO") return { color: "#6B9FFF", border: "1px solid rgba(107,159,255,0.3)", background: "rgba(107,159,255,0.08)" };
  return { color: "var(--dim)", border: "1px solid var(--border)", background: "transparent" };
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 80px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              // Live projects · Real clients
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(56px,8vw,112px)", fontWeight: 400, lineHeight: 0.93, letterSpacing: "-0.04em", marginBottom: 32 }}>
              The<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>work.</em>
            </h1>
            <p style={{ fontSize: 20, color: "var(--dim)", maxWidth: 560, lineHeight: 1.6 }}>
              Client sites, internal tools, and personal projects. All built and shipped — not concept mockups.
            </p>
          </div>
        </section>

        {/* ── PROJECT LIST ── */}
        <section style={{ padding: "0 0 140px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            {PROJECTS.map((p, i) => {
              const Wrapper = p.href ? "a" : "div";
              const wrapperProps = p.href
                ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
              <Wrapper
                key={p.id}
                {...(wrapperProps as object)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: 40,
                  padding: "48px 0",
                  borderBottom: "1px solid var(--border)",
                  alignItems: "start",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: p.href ? "pointer" : "default",
                }}
                className="project-row"
              >
                {/* Number */}
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--dimmer)", paddingTop: 4 }}>
                  {p.id}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
                    <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1, margin: 0 }}>
                      {p.title}
                    </h2>
                    <span style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: 10,
                      padding: "3px 10px",
                      borderRadius: 2,
                      letterSpacing: "0.12em",
                      ...statusColor(p.status),
                    }}>
                      {p.status}
                    </span>
                    {p.href && <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dimmer)" }}>↗</span>}
                  </div>

                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                    {p.type}
                  </div>

                  <p style={{ fontSize: 15, color: "var(--dim)", lineHeight: 1.7, maxWidth: 640, marginBottom: 24 }}>
                    {p.desc}
                  </p>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.stack.map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, padding: "4px 10px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--dimmer)", letterSpacing: "0.08em" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dimmer)", paddingTop: 6, textAlign: "right" }}>
                  {p.year}
                </div>
              </Wrapper>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "120px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(40px,5vw,68px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Want your project<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>on this list?</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
              I take on a small number of client projects per quarter. If you have something worth building, let&apos;s talk.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>
                Book a free call →
              </Link>
              <Link href="/services" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", textDecoration: "none" }}>
                See pricing →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        a.project-row:hover h2 { color: var(--accent) !important; }
        @media (max-width: 768px) {
          .project-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .project-row > div:last-child { display: none; }
        }
      `}</style>
    </>
  );
}
