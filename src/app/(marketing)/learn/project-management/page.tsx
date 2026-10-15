import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import QuizWidget from "@/components/learning/QuizWidget";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management Roadmap",
  description: "Free roadmap to become a Project Manager or AI Program Manager. CAPM, PMP, PRINCE2, and CAIPM cert stack with salary ranges $65K–$150K+.",
};

const CERT_STACK = [
  { order: 1, name: "CAPM (Certified Associate in Project Management)", provider: "PMI", cost: "Free (study) · $290 exam", duration: "2–3 months", hireable: true, note: "Hireable checkpoint. No prior experience required — just 23 contact hours of project management education. Opens project coordinator and junior PM roles. The entry point into the whole PMI ecosystem." },
  { order: 2, name: "PMP (Project Management Professional)", provider: "PMI", cost: "$405 (member) – $675 (non-member)", duration: "3–6 months", hireable: true, note: "Hireable checkpoint. The industry-standard PM credential worldwide. Requires 36–60 months leading projects (less with a 4-year degree) plus 35 hours of PM training. Consistently shows up as a hard requirement in senior PM job postings." },
  { order: 3, name: "PRINCE2 Foundation + Practitioner", provider: "PeopleCert / Axelos", cost: "~$695 (both levels)", duration: "4–8 weeks", hireable: false, note: "The default standard outside the US — UK, EU, and much of the Commonwealth. Process-driven rather than knowledge-area-driven like PMP. Pairs well with PMP for teams or roles spanning both markets." },
  { order: 4, name: "PMI-ACP (Agile Certified Practitioner)", provider: "PMI", cost: "$435 (member) – $495 (non-member)", duration: "2–3 months", hireable: false, note: "Covers Scrum, Kanban, Lean, and XP rather than one framework. Most engineering and product orgs run hybrid agile/waterfall — this is the credential that signals you can run both." },
  { order: 5, name: "CAIPM (Certified AI Program Manager)", provider: "GSDC", cost: "~$400 exam", duration: "6–8 weeks", hireable: false, note: "Emerging, 2024-era credential for managers running AI/ML and GenAI initiatives — model lifecycle, data governance, AI risk, cross-functional delivery between data science and engineering. The differentiator once you're past PMP." },
];

const RESOURCES = [
  { name: "PMI — Project Management Institute", url: "https://pmi.org/certifications/project-management-pmp", source: "PMI" },
  { name: "PMI — CAPM Certification Overview", url: "https://pmi.org/certifications/certified-associate-capm", source: "PMI" },
  { name: "Axelos / PeopleCert — PRINCE2", url: "https://peoplecert.org/prince2", source: "PeopleCert" },
  { name: "Google Project Management Certificate (Free audit)", url: "https://coursera.org/professional-certificates/google-project-management", source: "Coursera" },
  { name: "GSDC — Certified AI Project Manager (CAIPM)", url: "https://www.gsdcouncil.org", source: "GSDC" },
];

const SALARY = [
  { title: "Project Coordinator", range: "$50K – $70K", note: "CAPM, 0–2 yrs" },
  { title: "Project Manager", range: "$75K – $105K", note: "PMP, 3–5 yrs" },
  { title: "Senior PM / Program Manager", range: "$105K – $140K", note: "PMP + PRINCE2 or PMI-ACP, 5–8 yrs" },
  { title: "AI Program Manager", range: "$130K – $185K+", note: "PMP + CAIPM, leading ML/GenAI delivery" },
];

export default function ProjectManagementPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <Link href="/learn" style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}>← Back to Learn Hub</Link>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "4px 12px", borderRadius: 2, background: "rgba(212,255,58,0.08)", color: "var(--accent-dim)", border: "1px solid rgba(212,255,58,0.2)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Bridge</span>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.1em" }}>MANAGEMENT FAMILY · TRACK 09</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Project<br /><em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Management.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 580, lineHeight: 1.7, marginBottom: 40 }}>Scope, schedule, risk, and delivery — the skill set every engineering and data team runs on. CAPM through PMP and PRINCE2, plus the AI Program Manager credential for teams shipping ML and GenAI products.</p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[{ label: "Duration", val: "~9 months" }, { label: "Courses", val: "16" }, { label: "Projects", val: "2" }, { label: "Cert Cost", val: "~$1.9K total" }].map((s) => (
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
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 48 }}>// SALARY RANGES · 2026–2027</div>
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
        <QuizWidget trackId="project-management" />

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
