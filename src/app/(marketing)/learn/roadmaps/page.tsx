import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmaps — Techturi",
  description: "Printable and visual career roadmaps for data analytics, cybersecurity, generative AI, and more. Free to download.",
};

const ROADMAPS = [
  {
    family: "Data",
    color: "var(--accent)",
    tracks: [
      {
        title: "Data Analytics",
        href: "/learn/data-analytics",
        duration: "~6 months",
        certs: ["Google Data Analytics", "SQL Practice", "Tableau Specialist", "PL-300 Power BI"],
        hireable: "PL-300 + 2 projects",
        salary: "$65K – $90K",
      },
      {
        title: "Business Analytics",
        href: "/learn/business-analytics",
        duration: "~5 months",
        certs: ["Google Data Analytics", "PL-300 Power BI", "IIBA ECBA", "PMP / CAPM"],
        hireable: "ECBA + portfolio",
        salary: "$75K – $105K",
      },
      {
        title: "Data Science",
        href: "/learn/data-science",
        duration: "~9 months",
        certs: ["IBM Data Science Cert", "Statistics (StatQuest)", "TensorFlow Developer", "AWS ML Specialty"],
        hireable: "TensorFlow cert + 3 projects",
        salary: "$95K – $130K",
      },
    ],
  },
  {
    family: "Security",
    color: "#6B9FFF",
    tracks: [
      {
        title: "Networking",
        href: "/learn/networking",
        duration: "~4 months",
        certs: ["Cisco NetAcad CCNA 1&2", "CompTIA Network+", "Cisco CCNA 200-301"],
        hireable: "Network+ cert",
        salary: "$50K – $72K",
      },
      {
        title: "Cybersecurity",
        href: "/learn/cybersecurity",
        duration: "~9 months",
        certs: ["CompTIA Security+", "CompTIA CySA+", "CEH", "CISSP", "CISM"],
        hireable: "Security+ → CySA+",
        salary: "$75K – $105K",
      },
    ],
  },
  {
    family: "AI",
    color: "var(--accent)",
    tracks: [
      {
        title: "AI Foundations",
        href: "/learn/ai-foundations",
        duration: "~3 months",
        certs: ["EXIN AI Essentials", "Google ML Crash Course", "OCI AI Foundations"],
        hireable: "OCI AI Foundations",
        salary: "$65K – $95K",
      },
      {
        title: "Generative AI",
        href: "/learn/generative-ai",
        duration: "~5 months",
        certs: ["OCI AI Foundations", "OCI GenAI Professional", "Prompt Engineering", "MCP Servers & Agents", "AWS AI Practitioner"],
        hireable: "OCI GenAI Pro + AWS AI",
        salary: "$95K – $130K",
      },
      {
        title: "Data Architecture",
        href: "/learn/data-architecture",
        duration: "~6 months",
        certs: ["OCI Data Management", "dbt Fundamentals", "Snowflake SnowPro Core", "Google Prof. Data Engineer"],
        hireable: "SnowPro Core + dbt",
        salary: "$85K – $115K",
      },
    ],
  },
];

const TOOLS = [
  { name: "Claude Code", tag: "AI Coding Agent", desc: "Writes, edits, and debugs codebases through conversation.", url: "https://claude.ai", badge: "USED HERE" },
  { name: "Cursor", tag: "AI Code Editor", desc: "VS Code with GPT-4 built in. Autocompletes functions, explains code inline.", url: "https://cursor.sh", badge: null },
  { name: "Gemini CLI", tag: "Google AI Terminal", desc: "AI assistant in your terminal. Free with a Google account.", url: "https://gemini.google.com", badge: "FREE" },
  { name: "OpenAI Codex / ChatGPT", tag: "General AI", desc: "Explain code, write boilerplate, debug errors, draft docs.", url: "https://chatgpt.com", badge: null },
  { name: "MCP Servers", tag: "Agent Protocol", desc: "How AI agents connect to your tools, DBs, and APIs. Covered in GenAI track.", url: "https://modelcontextprotocol.io", badge: "NEW 2025" },
  { name: "Vercel v0", tag: "AI UI Generator", desc: "Describe a UI, get production-ready React code in minutes.", url: "https://v0.dev", badge: null },
];

export default function RoadmapsPage() {
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
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              All 8 tracks · 3 families · Free
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Career<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Roadmaps.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 560, lineHeight: 1.7 }}>
              Every track at a glance — cert order, hireable checkpoint, salary range, and time to job-ready. Use this page as your reference.
            </p>
          </div>
        </section>

        {/* ── ROADMAP CARDS ── */}
        {ROADMAPS.map((family) => (
          <section key={family.family} style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 48 }}>
                <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", fontStyle: "italic" }}>
                  {family.family}<span style={{ color: family.color }}>.</span>
                </h2>
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {family.tracks.length} TRACKS
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {family.tracks.map((track) => (
                  <Link
                    key={track.title}
                    href={track.href}
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "32px 36px", textDecoration: "none", display: "grid", gridTemplateColumns: "200px 1fr 1fr 140px", gap: 32, alignItems: "center", transition: "border-color 0.2s" }}
                    className="roadmap-row"
                  >
                    {/* Title + duration */}
                    <div>
                      <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 20, fontWeight: 500, color: "var(--foreground)", marginBottom: 4 }}>{track.title}</div>
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)" }}>{track.duration}</div>
                    </div>

                    {/* Cert stack */}
                    <div>
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>CERT ORDER</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {track.certs.map((c, i) => (
                          <span key={c} style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "3px 8px", borderRadius: 2, border: "1px solid var(--border)", color: "var(--dim)", display: "flex", alignItems: "center", gap: 4 }}>
                            <span style={{ color: "var(--dimmer)" }}>{i + 1}.</span> {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hireable at */}
                    <div>
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>HIREABLE AT</div>
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", lineHeight: 1.4 }}>✦ {track.hireable}</div>
                    </div>

                    {/* Salary */}
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>SALARY</div>
                      <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 18, fontWeight: 400, color: "var(--foreground)", lineHeight: 1.2 }}>{track.salary}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── AI TOOLS ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16, flexWrap: "wrap", gap: 16 }}>
              <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 48, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>
                The <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Tools</em>
              </h2>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.1em" }}>// WHAT CLOSES THE GAP</div>
            </div>
            <p style={{ fontSize: 15, color: "var(--dim)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>
              Certs teach the theory. These tools are what the industry is actually using day-to-day in 2025 to build faster, debug smarter, and ship more.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="tools-grid">
              {TOOLS.map((t) => (
                <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "28px 24px", textDecoration: "none", display: "block", position: "relative", transition: "border-color 0.2s, transform 0.2s" }} className="tool-card">
                  {t.badge && (
                    <div style={{ position: "absolute", top: -11, right: 16, background: t.badge === "FREE" || t.badge === "NEW 2025" ? "transparent" : "var(--accent)", color: t.badge === "FREE" || t.badge === "NEW 2025" ? "var(--accent)" : "var(--background)", border: t.badge === "FREE" || t.badge === "NEW 2025" ? "1px solid var(--accent)" : "none", fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 2, letterSpacing: "0.12em" }}>
                      {t.badge}
                    </div>
                  )}
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 20, fontWeight: 500, color: "var(--foreground)", marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>{t.tag}</div>
                  <p style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 20 }}>
              Not sure where to <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>start?</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              Book a free 30-min call. I&apos;ll look at your background and tell you exactly which track and which cert to start with.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>Book a free call →</Link>
              <Link href="/learn" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", textDecoration: "none" }}>Back to learn hub →</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        .roadmap-row:hover { border-color: var(--accent) !important; }
        .tool-card:hover { border-color: var(--accent) !important; transform: translateY(-3px); }
        @media (max-width: 1100px) {
          .roadmap-row { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .roadmap-row > div:last-child { text-align: left !important; }
        }
        @media (max-width: 700px) {
          .roadmap-row { grid-template-columns: 1fr !important; }
          .tools-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
