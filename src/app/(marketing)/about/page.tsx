import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Techturi",
  description: "OCI Data Science Professional and AI automation lead at Oracle. 13 certifications across cloud, AI, and operations. Tega Eshareturi builds websites and teaches tech for free.",
};

const TIMELINE = [
  {
    period: "2026 – Present",
    org: "Techturi",
    role: "Founder",
    desc: "Building a web studio and free tech education platform. Wix subscriptions, custom React/Next.js builds, and iOS apps. Learn hub with cert roadmaps.",
    accent: true,
  },
  {
    period: "2021 – Present",
    org: "Oracle",
    role: "Senior Global Improvement Engineer",
    desc: "Leading AI/automation for NetSuite operations. GenAI-powered incident tooling, AMER LSE execution, monthly uptime reporting for executive leadership.",
  },
  {
    period: "2019 – 2021",
    org: "Lockheed Martin",
    role: "Government Financial Data Analyst",
    desc: "AMMM Sustainment analytics across all Aeronautics programs. Tableau + SAP HANA dashboards for DCS/USG/FMS stakeholders. Led org-wide BI training.",
  },
  {
    period: "2018",
    org: "BAE Systems",
    role: "Business Systems Analyst",
    desc: "Security and vulnerability assessments across 200+ systems. Automated reporting for DEFARS compliance.",
  },
];

const CERTS = [
  { name: "OCI Data Science Professional", year: "2026", tier: "pro" },
  { name: "OCI Generative AI Professional", year: "2025", tier: "pro" },
  { name: "OCI AI Foundations Associate", year: "2025", tier: "mid" },
  { name: "OCI Data Management Foundations", year: "2024", tier: "mid" },
  { name: "OCI Cloud Foundations Associate", year: "2024", tier: "mid" },
  { name: "Professional Scrum Product Owner II", year: "2023", tier: "pro" },
  { name: "Professional Scrum Master II", year: "2023", tier: "pro" },
  { name: "EXIN AI Essentials", year: "2023", tier: "mid" },
  { name: "Professional Scrum Product Owner I", year: "2023", tier: "mid" },
  { name: "Professional Scrum Master I", year: "2023", tier: "mid" },
  { name: "EXIN Cloud Computing Foundations", year: "2022", tier: "entry" },
  { name: "ITIL Foundations", year: "2022", tier: "entry" },
];

const STATS = [
  { num: "13", label: "Certifications" },
  { num: "6yr", label: "Oracle" },
  { num: "3", label: "Employers\nin aerospace,\ndefense & cloud" },
  { num: "MS", label: "Computer\nInformation\nSystems" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 80px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              Houston, TX — Engineer who ships things.
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(56px,8vw,112px)", fontWeight: 400, lineHeight: 0.93, letterSpacing: "-0.04em", marginBottom: 40 }}>
              Tega<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Eshareturi.</em>
            </h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="hero-split">
              <p style={{ fontSize: 20, color: "var(--dim)", lineHeight: 1.7, margin: 0 }}>
                OCI Data Science Professional and AI automation lead at Oracle. Former Lockheed Martin. 13 certifications across cloud, AI, and operations.
                I built Techturi because most of what I know came from free resources — and the right roadmap matters more than the right bootcamp.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="stats-mini">
                {STATS.map((s) => (
                  <div key={s.num} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 16 }}>
                    <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 40, fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 6, color: "var(--foreground)" }}>
                      {s.num}
                    </div>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, letterSpacing: "0.12em", color: "var(--dim)", textTransform: "uppercase", lineHeight: 1.4, whiteSpace: "pre-line" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 60 }}>
              // CAREER TIMELINE
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {TIMELINE.map((item, i) => (
                <div
                  key={item.org}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "200px 1fr",
                    gap: 40,
                    padding: "36px 0",
                    borderBottom: i < TIMELINE.length - 1 ? "1px solid var(--border)" : "none",
                    alignItems: "start",
                  }}
                  className="timeline-row"
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: item.accent ? "var(--accent)" : "var(--dimmer)", letterSpacing: "0.1em", marginBottom: 8 }}>
                      {item.period}
                    </div>
                    <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 22, fontWeight: 500, color: "var(--foreground)", lineHeight: 1.2 }}>
                      {item.org}
                      {item.accent && <span style={{ color: "var(--accent)" }}>.</span>}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.08em", marginBottom: 10 }}>
                      {item.role}
                    </div>
                    <div style={{ fontSize: 15, color: "var(--dim)", lineHeight: 1.7 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 48 }}>
              // EDUCATION
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="edu-grid">
              {[
                { deg: "MS · Computer Information Systems", conc: "Data Science concentration", school: "University of Houston – Clear Lake", year: "2025" },
                { deg: "BS · Management Information Systems", conc: "Bachelor of Business", school: "Texas Southern University", year: "2018" },
              ].map((e) => (
                <div key={e.deg} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "32px" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 16 }}>{e.year}</div>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 24, fontWeight: 500, marginBottom: 6, color: "var(--foreground)", lineHeight: 1.2 }}>{e.deg}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", marginBottom: 12 }}>{e.conc}</div>
                  <div style={{ fontSize: 13, color: "var(--dimmer)" }}>{e.school}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                // CERTIFICATIONS
              </div>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.1em" }}>
                13 TOTAL
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {CERTS.map((c, i) => (
                <div
                  key={c.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom: i < CERTS.length - 1 ? "1px solid var(--border)" : "none",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: 9,
                      padding: "3px 8px",
                      borderRadius: 2,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      background: c.tier === "pro" ? "rgba(212,255,58,0.15)" : c.tier === "mid" ? "rgba(212,255,58,0.07)" : "transparent",
                      color: c.tier === "pro" ? "var(--accent)" : c.tier === "mid" ? "var(--accent-dim)" : "var(--dimmer)",
                      border: c.tier === "pro" ? "1px solid rgba(212,255,58,0.3)" : c.tier === "mid" ? "1px solid rgba(212,255,58,0.15)" : "1px solid var(--border)",
                      whiteSpace: "nowrap",
                    }}>
                      {c.tier === "pro" ? "Pro" : c.tier === "mid" ? "Assoc" : "Found"}
                    </span>
                    <span style={{ fontSize: 14, color: "var(--foreground)" }}>{c.name}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dimmer)", whiteSpace: "nowrap" }}>{c.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "120px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(40px,6vw,72px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Want to work<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>together?</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
              Whether it&apos;s a website, an iOS app, or just a conversation about what you&apos;re building — I&apos;m easy to reach.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>
                Book a free call →
              </Link>
              <Link href="/intake" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", textDecoration: "none" }}>
                Start a project →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .hero-split  { grid-template-columns: 1fr !important; gap: 40px !important; }
          .timeline-row { grid-template-columns: 1fr !important; gap: 8px !important; }
          .edu-grid    { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .stats-mini { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
