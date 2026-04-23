import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generative AI Roadmap",
  description: "Free roadmap to become a hireable GenAI engineer. OCI GenAI Professional, prompt engineering, RAG pipelines, MCP servers, AI agents. Salary $85K–$145K.",
};

const CERT_STACK = [
  { order: 1, name: "OCI AI Foundations Associate", provider: "Oracle MyLearn", cost: "Free (study) · ~$95 exam", duration: "4–6 weeks", hireable: false, note: "Start here. Covers ML concepts, neural networks, OCI AI services. Free prep materials from Oracle." },
  { order: 2, name: "OCI Generative AI Professional", provider: "Oracle MyLearn", cost: "Free (study) · ~$95 exam", duration: "6–8 weeks", hireable: false, note: "Core cert. LLMs, embeddings, RAG, prompt engineering, OCI GenAI Service. Built by someone who holds this." },
  { order: 3, name: "Prompt Engineering for Developers", provider: "DeepLearning.AI / Coursera", cost: "Free (audit)", duration: "2–3 weeks", hireable: false, note: "Andrew Ng + OpenAI. Practical prompt patterns, chain-of-thought, system instructions. Essential for any GenAI role." },
  { order: 4, name: "MCP Servers & AI Agents", provider: "Anthropic Docs / LangChain / GitHub", cost: "Free", duration: "2–4 weeks", hireable: false, note: "Model Context Protocol — how modern AI agents connect to tools, APIs, and data sources. Increasingly required in GenAI engineering roles." },
  { order: 5, name: "AWS Certified AI Practitioner", provider: "AWS Skill Builder", cost: "Free (study) · $150 exam", duration: "4–6 weeks", hireable: true, note: "Hireable checkpoint. Multi-cloud AI fluency is a differentiator. OCI + AWS together makes you significantly more hireable." },
  { order: 6, name: "2 GenAI Projects", provider: "Personal / GitHub", cost: "Free", duration: "3–5 weeks", hireable: false, note: "Build a RAG pipeline + an AI agent using MCP. Deploy both. Public repo. This is what gets you the interview." },
];

const RESOURCES = [
  { name: "Oracle MyLearn — OCI GenAI Pro", url: "https://mylearn.oracle.com", source: "Oracle" },
  { name: "Prompt Engineering for Developers", url: "https://learn.deeplearning.ai/courses/chatgpt-prompt-eng", source: "DeepLearning.AI" },
  { name: "Model Context Protocol (MCP) Docs", url: "https://modelcontextprotocol.io", source: "Anthropic" },
  { name: "LangChain Docs & Tutorials", url: "https://python.langchain.com/docs", source: "LangChain" },
  { name: "AWS Skill Builder — AI Practitioner", url: "https://skillbuilder.aws", source: "AWS" },
  { name: "Hugging Face NLP Course", url: "https://huggingface.co/learn/nlp-course", source: "Hugging Face" },
];

const SALARY = [
  { title: "AI/ML Associate", range: "$65K – $95K", note: "Entry, foundation cert + 1 project" },
  { title: "GenAI Engineer", range: "$95K – $130K", note: "2–3 yrs, RAG + agent pipelines" },
  { title: "Senior AI Engineer", range: "$125K – $160K", note: "Production deployments, multi-cloud" },
  { title: "AI Architect / Lead", range: "$150K – $200K+", note: "Platform ownership, team lead" },
];

const MCP_SKILLS = [
  "What MCP is and why it matters for agentic AI",
  "Building MCP servers in Python or TypeScript",
  "Connecting LLMs to tools: databases, APIs, file systems",
  "Claude / GPT-4 tool use and function calling",
  "Multi-step AI agents that reason and act",
  "Deploying agents to production",
];

export default function GenerativeAIPage() {
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
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "4px 12px", borderRadius: 2, background: "rgba(212,255,58,0.08)", color: "var(--accent-dim)", border: "1px solid rgba(212,255,58,0.2)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Bridge</span>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.1em" }}>AI FAMILY · TRACK 07</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Generative<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>AI.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 600, lineHeight: 1.7, marginBottom: 40 }}>
              LLMs, prompt engineering, RAG pipelines, MCP servers, and AI agents. Built by someone who ships GenAI tools at Oracle. OCI GenAI Pro aligned — with the MCP layer most roadmaps skip entirely.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { label: "Total Duration", val: "~5 months" },
                { label: "Courses", val: "20" },
                { label: "Projects", val: "5" },
                { label: "Cert Cost", val: "~$340 total" },
              ].map((s) => (
                <div key={s.label} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 16 }}>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 28, fontWeight: 300, color: "var(--foreground)", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MCP CALLOUT ── */}
        <section style={{ padding: "0 0 0", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "60px 32px" }}>
            <div style={{ background: "linear-gradient(135deg, #1A1F0A 0%, #131315 100%)", border: "1px solid var(--accent-dim)", borderRadius: 8, padding: "40px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="mcp-card">
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>◆ NEW IN 2025 — CRITICAL SKILL</div>
                <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16 }}>
                  MCP Servers &<br />
                  <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>AI Agents.</em>
                </h2>
                <p style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.7, maxWidth: 400 }}>
                  Model Context Protocol (MCP) is how modern AI agents connect to the real world — databases, APIs, code, file systems. Introduced by Anthropic in 2024, it&apos;s already showing up in GenAI job postings. This track covers it.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>WHAT YOU&apos;LL LEARN</div>
                <ul style={{ listStyle: "none" }}>
                  {MCP_SKILLS.map((s) => (
                    <li key={s} style={{ padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: 14, color: "var(--dim)", display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 12 }}>→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
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
                <div key={cert.name} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 32, padding: "36px 0", borderBottom: i < CERT_STACK.length - 1 ? "1px solid var(--border)" : "none" }} className="cert-row">
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
            <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", marginTop: 20 }}>
              Ranges aggregated from Indeed, LinkedIn, Glassdoor, Payscale, ZipRecruiter. GenAI roles are among the fastest-growing and highest-compensated in tech.
            </p>
          </div>
        </section>

        {/* ── RESOURCES ── */}
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

        {/* ── CTA ── */}
        <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 20 }}>
              Want to go <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>deeper?</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>I build GenAI tools at Oracle. Book a call and I&apos;ll tell you exactly what skills are getting people hired right now.</p>
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
        @media (max-width: 900px) {
          .salary-grid { grid-template-columns: 1fr 1fr !important; }
          .mcp-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .salary-grid { grid-template-columns: 1fr !important; }
          .cert-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
