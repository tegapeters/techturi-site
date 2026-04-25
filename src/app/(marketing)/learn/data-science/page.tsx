import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import QuizWidget from "@/components/learning/QuizWidget";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science Roadmap",
  description: "Free roadmap to become a Data Scientist. Python, statistics, ML, model deployment. IBM Data Science cert stack with salary ranges $90K–$145K.",
};

const CERT_STACK = [
  { order: 1, name: "Google Data Analytics Certificate", provider: "Coursera / Google", cost: "Free (audit)", duration: "~6 months", hireable: false, note: "Required foundation. SQL, Python intro, Tableau, R basics. Do this before touching ML." },
  { order: 2, name: "IBM Data Science Professional Certificate", provider: "Coursera / IBM", cost: "Free (audit)", duration: "3–5 months", hireable: false, note: "10-course series covering Python, Jupyter, Pandas, Matplotlib, ML with scikit-learn. One of the best free data science programs available." },
  { order: 3, name: "Statistics for Data Science", provider: "Khan Academy / StatQuest (Free)", cost: "Free", duration: "4–6 weeks", hireable: false, note: "Non-negotiable. Probability, hypothesis testing, distributions, regression. StatQuest on YouTube makes it actually understandable." },
  { order: 4, name: "TensorFlow Developer Certificate", provider: "Google / Coursera", cost: "Free (study) · $100 exam", duration: "3–5 months", hireable: true, note: "Hireable checkpoint. Validates ML engineering skills. Deep learning, CNNs, NLP, time series. Gets you into ML engineer and data scientist roles." },
  { order: 5, name: "AWS Certified Machine Learning Specialty", provider: "AWS Skill Builder", cost: "Free (study) · $300 exam", duration: "3–5 months", hireable: false, note: "Senior-level ML cert. Model training, tuning, deployment on AWS. Opens senior DS and ML architect roles." },
  { order: 6, name: "3 End-to-End Projects", provider: "Kaggle / GitHub", cost: "Free", duration: "6–8 weeks", hireable: false, note: "Data → model → deployment → writeup. One classification, one regression, one NLP or computer vision. Public on GitHub with README." },
];

const RESOURCES = [
  { name: "IBM Data Science Certificate (Free audit)", url: "https://coursera.org/professional-certificates/ibm-data-science", source: "Coursera" },
  { name: "StatQuest with Josh Starmer (YouTube)", url: "https://youtube.com/@statquest", source: "YouTube" },
  { name: "Kaggle Learn — ML Courses (Free)", url: "https://kaggle.com/learn", source: "Kaggle" },
  { name: "Fast.ai — Practical Deep Learning", url: "https://fast.ai", source: "Fast.ai" },
  { name: "AWS Skill Builder — ML Specialty", url: "https://skillbuilder.aws", source: "AWS" },
];

const SALARY = [
  { title: "Data Analyst → DS", range: "$70K – $95K", note: "Transition role, 1–2 yrs" },
  { title: "Data Scientist", range: "$95K – $130K", note: "TF cert + projects, 2–4 yrs" },
  { title: "Senior Data Scientist", range: "$125K – $160K", note: "AWS ML, production models" },
  { title: "Principal DS / ML Lead", range: "$155K – $200K+", note: "Platform ownership, 7+ yrs" },
];

export default function DataSciencePage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <Link href="/learn" style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}>← Back to Learn Hub</Link>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "4px 12px", borderRadius: 2, background: "transparent", color: "var(--dim)", border: "1px solid var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Advanced</span>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.1em" }}>DATA FAMILY · TRACK 03</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Data<br /><em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Science.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 580, lineHeight: 1.7, marginBottom: 40 }}>Statistics, ML, Python notebooks, model deployment. The deep path — for people who want to build models, not just query them. ~9 months to fully hireable.</p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[{ label: "Duration", val: "~9 months" }, { label: "Courses", val: "31" }, { label: "Projects", val: "7" }, { label: "Cert Cost", val: "~$400 total" }].map((s) => (
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
        <QuizWidget trackId="data-science" />

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
