import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import QuizWidget from "@/components/learning/QuizWidget";

export const metadata: Metadata = {
  title: "Data Analytics Roadmap",
  description: "Free step-by-step roadmap to become a hireable Data Analyst. Google DA cert, SQL, Tableau, Power BI, PL-300. Salary $55K–$95K.",
};

const CERT_STACK = [
  { order: 1, name: "Google Data Analytics Certificate", provider: "Coursera / Google", cost: "Free (audit) or ~$49/mo", duration: "~6 months", hireable: false, note: "Foundation. Gets you SQL, spreadsheets, Tableau basics, and R intro." },
  { order: 2, name: "SQL for Data Analysis", provider: "Mode / W3Schools / Khan Academy", cost: "Free", duration: "2–4 weeks", hireable: false, note: "Supplement. Practice real queries on Mode Analytics — it's what hiring managers actually test." },
  { order: 3, name: "Tableau Desktop Specialist", provider: "Tableau / Salesforce", cost: "$250", duration: "1–2 months", hireable: false, note: "Validates your Tableau skills. Most analyst roles list Tableau as required." },
  { order: 4, name: "Microsoft PL-300 (Power BI Analyst)", provider: "Microsoft Learn", cost: "$165 exam · prep free", duration: "1–2 months", hireable: true, note: "Hireable checkpoint. Power BI + DAX is the corporate standard. This cert + 2 projects = job-ready." },
  { order: 5, name: "2 Portfolio Projects", provider: "Personal / GitHub", cost: "Free", duration: "1 month", hireable: false, note: "End-to-end: raw data → cleaned dataset → dashboard → insight writeup. Public on GitHub." },
];

const RESOURCES = [
  { name: "Google Data Analytics", url: "https://coursera.org/professional-certificates/google-data-analytics", source: "Coursera" },
  { name: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial", source: "Mode Analytics" },
  { name: "Tableau Free Training", url: "https://www.tableau.com/learn/training", source: "Tableau" },
  { name: "Microsoft PL-300 Study Guide", url: "https://learn.microsoft.com/certifications/exams/pl-300", source: "Microsoft Learn" },
  { name: "Kaggle Datasets (free practice)", url: "https://kaggle.com/datasets", source: "Kaggle" },
];

const SALARY = [
  { title: "Entry-Level Analyst", range: "$48K – $68K", note: "0–2 yrs, Google cert + SQL" },
  { title: "Data Analyst", range: "$65K – $90K", note: "2–4 yrs, Power BI / Tableau" },
  { title: "Senior Data Analyst", range: "$88K – $115K", note: "4+ yrs, stakeholder ownership" },
  { title: "Analytics Manager", range: "$110K – $140K+", note: "Team lead, strategy" },
];

export default function DataAnalyticsPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <Link href="/learn" style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
              ← Back to Learn Hub
            </Link>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "4px 12px", borderRadius: 2, background: "rgba(212,255,58,0.15)", color: "var(--accent)", border: "1px solid rgba(212,255,58,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Entry Level</span>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.1em" }}>DATA FAMILY · TRACK 01</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Data<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Analytics.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 580, lineHeight: 1.7, marginBottom: 40 }}>
              From zero SQL to dashboard-shipping professional. Built on the exact cert stack hiring managers screen for — using entirely free or low-cost resources.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { label: "Total Duration", val: "~6 months" },
                { label: "Courses", val: "24" },
                { label: "Projects", val: "5" },
                { label: "Cert Cost", val: "~$415 total" },
              ].map((s) => (
                <div key={s.label} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 16 }}>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 28, fontWeight: 300, color: "var(--foreground)", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERT STACK ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>// CERT STACK · IN ORDER</div>
                <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 40, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1 }}>
                  The path to <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>hireable.</em>
                </h2>
              </div>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.1em" }}>DO THESE IN ORDER →</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {CERT_STACK.map((cert, i) => (
                <div key={cert.name} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 32, padding: "36px 0", borderBottom: i < CERT_STACK.length - 1 ? "1px solid var(--border)" : "none", position: "relative" }} className="cert-row">
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 22, fontWeight: 400, color: cert.hireable ? "var(--accent)" : "var(--dimmer)", paddingTop: 4 }}>
                    {String(cert.order).padStart(2, "0")}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 24, fontWeight: 500, color: "var(--foreground)", margin: 0, lineHeight: 1.1 }}>{cert.name}</h3>
                      {cert.hireable && (
                        <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "3px 10px", borderRadius: 2, background: "rgba(212,255,58,0.15)", color: "var(--accent)", border: "1px solid rgba(212,255,58,0.3)", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>
                          ✦ HIREABLE HERE
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: 20, marginBottom: 12, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)" }}>{cert.provider}</span>
                      <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)" }}>{cert.cost}</span>
                      <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)" }}>{cert.duration}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.7, margin: 0, maxWidth: 680 }}>{cert.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SALARY ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 48 }}>// SALARY RANGES · 2025–2026</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="salary-grid">
              {SALARY.map((s) => (
                <div key={s.title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "28px 24px" }}>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 32, fontWeight: 300, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: 8 }}>{s.range}</div>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 16, fontWeight: 500, color: "var(--foreground)", marginBottom: 8 }}>{s.title}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)", lineHeight: 1.5 }}>{s.note}</div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", marginTop: 20, letterSpacing: "0.05em" }}>
              Ranges aggregated from Indeed, LinkedIn, Glassdoor, Payscale, ZipRecruiter. Varies by city, industry, and company size.
            </p>
          </div>
        </section>

        {/* ── FREE RESOURCES ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 40 }}>// FREE RESOURCES</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {RESOURCES.map((r, i) => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: i < RESOURCES.length - 1 ? "1px solid var(--border)" : "none", textDecoration: "none", gap: 20 }} className="resource-row">
                  <span style={{ fontSize: 15, color: "var(--foreground)" }}>{r.name}</span>
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)", whiteSpace: "nowrap" }}>{r.source} ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUIZ ── */}
        <QuizWidget trackId="data-analytics" />

        {/* ── CTA ── */}
        <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 20 }}>
              Need help with the <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>roadmap?</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>Book a free call. I can help you figure out where to start, what to skip, and what actually gets you hired.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>Book a free call →</Link>
              <Link href="/learn" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", textDecoration: "none" }}>All tracks →</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        .resource-row:hover span:first-child { color: var(--accent) !important; }
        @media (max-width: 900px) { .salary-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .salary-grid { grid-template-columns: 1fr !important; } .cert-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
