import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import QuizWidget from "@/components/learning/QuizWidget";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Architecture Roadmap",
  description: "Free roadmap to become a Data Architect or Cloud Data Engineer. OCI Data Management, dbt, Snowflake cert stack. Salary $110K–$170K.",
};

const CERT_STACK = [
  { order: 1, name: "OCI Data Management Foundations Associate", provider: "Oracle MyLearn", cost: "Free (study) · ~$95 exam", duration: "4–6 weeks", hireable: false, note: "OCI databases, data lakes, data integration. Free prep from Oracle. Good foundation for cloud data platform work." },
  { order: 2, name: "dbt Fundamentals (Free)", provider: "dbt Labs", cost: "Free", duration: "1–2 weeks", hireable: false, note: "dbt is the standard for data transformation in modern data stacks. Free course from dbt Labs. Every data engineer job posts this." },
  { order: 3, name: "Snowflake SnowPro Core", provider: "Snowflake / Udemy", cost: "Free (study) · $175 exam", duration: "2–3 months", hireable: true, note: "Hireable checkpoint. Snowflake is the dominant cloud data warehouse. SnowPro Core + dbt + SQL = entry-level data engineering role." },
  { order: 4, name: "Google Professional Data Engineer", provider: "Google Cloud / Coursera", cost: "Free (study) · $200 exam", duration: "3–5 months", hireable: false, note: "Production-level data pipeline design, BigQuery, Dataflow, Pub/Sub. Opens senior data engineer and architect roles." },
  { order: 5, name: "AWS Certified Data Engineer – Associate", provider: "AWS Skill Builder", cost: "Free (study) · $150 exam", duration: "2–4 months", hireable: false, note: "Multi-cloud data engineering credential. Pairs with GCP cert to make you significantly more hireable in architect roles." },
];

const RESOURCES = [
  { name: "OCI Data Management Free Prep", url: "https://mylearn.oracle.com", source: "Oracle" },
  { name: "dbt Fundamentals (Free)", url: "https://courses.getdbt.com/courses/fundamentals", source: "dbt Labs" },
  { name: "Snowflake Free Trial + Docs", url: "https://snowflake.com/en/learn", source: "Snowflake" },
  { name: "Google Cloud Data Engineer Path", url: "https://cloud.google.com/learn/certification/data-engineer", source: "Google Cloud" },
  { name: "AWS Skill Builder — Data Engineer", url: "https://skillbuilder.aws", source: "AWS" },
];

const SALARY = [
  { title: "Data Engineer (entry)", range: "$85K – $115K", note: "SnowPro + dbt, 1–2 yrs" },
  { title: "Data Engineer (mid)", range: "$110K – $145K", note: "GCP/AWS cert, 3–5 yrs" },
  { title: "Senior Data Engineer", range: "$135K – $170K", note: "Multi-cloud, pipeline ownership" },
  { title: "Data Architect", range: "$155K – $210K+", note: "Platform design, 8+ yrs" },
];

export default function DataArchitecturePage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <Link href="/learn" style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}>← Back to Learn Hub</Link>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "4px 12px", borderRadius: 2, background: "transparent", color: "var(--dim)", border: "1px solid var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Advanced</span>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.1em" }}>AI FAMILY · TRACK 08</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Data<br /><em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Architecture.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 580, lineHeight: 1.7, marginBottom: 40 }}>Cloud data platforms, data warehousing, OCI Data Management, pipeline design. For engineers who want to own the full data stack — not just query it.</p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[{ label: "Duration", val: "~6 months" }, { label: "Courses", val: "22" }, { label: "Projects", val: "4" }, { label: "Cert Cost", val: "~$620 total" }].map((s) => (
                <div key={s.label} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 16 }}>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 28, fontWeight: 300, color: "var(--foreground)", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 48 }}>// CERT STACK · IN ORDER</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {CERT_STACK.map((cert, i) => (
                <div key={cert.name} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 32, padding: "36px 0", borderBottom: i < CERT_STACK.length - 1 ? "1px solid var(--border)" : "none" }} className="cert-row">
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 22, fontWeight: 400, color: cert.hireable ? "var(--accent)" : "var(--dimmer)", paddingTop: 4 }}>{String(cert.order).padStart(2, "0")}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 24, fontWeight: 500, color: "var(--foreground)", margin: 0, lineHeight: 1.1 }}>{cert.name}</h3>
                      {cert.hireable && <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "3px 10px", borderRadius: 2, background: "rgba(212,255,58,0.15)", color: "var(--accent)", border: "1px solid rgba(212,255,58,0.3)", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>✦ HIREABLE HERE</span>}
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
            <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", marginTop: 20 }}>Aggregated from Indeed, LinkedIn, Glassdoor, Payscale, ZipRecruiter.</p>
          </div>
        </section>

        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 40 }}>// FREE RESOURCES</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
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
        <QuizWidget trackId="data-architecture" />

        <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 32px" }}>
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
