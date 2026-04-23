import Link from "next/link";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description: "Free curated roadmaps for breaking into data, AI, and cybersecurity. Real cert stacks, honest salary ranges, and the sequence that actually gets you hired.",
};

const FAMILIES = [
  {
    id: "data",
    name: "Data",
    meta: "// FROM DASHBOARDS TO MODELS",
    tracks: [
      {
        num: "01",
        icon: "{ 01 } → ANALYTICS",
        level: "Entry",
        levelClass: "entry",
        title: "Data Analytics",
        desc: "SQL, Python, Power BI, Tableau. The skills hiring managers actually screen for.",
        salaryRange: "$55K – $95K",
        salaryNote: "Entry → Mid · Indeed, LinkedIn, Glassdoor",
        topCert: "Google Data Analytics",
        topCertCost: "~$200",
        href: "/learn/data-analytics",
        stack: [
          { step: 1, cert: "Google Data Analytics", provider: "Coursera", cost: "Free (audit)", type: "Foundation" },
          { step: 2, cert: "SQL for Data Science", provider: "IBM / Coursera", cost: "Free (audit)", type: "Skill" },
          { step: 3, cert: "Tableau Desktop Specialist", provider: "Tableau", cost: "$225", type: "Tool" },
          { step: 4, cert: "Microsoft PL-300 (Power BI)", provider: "Microsoft", cost: "$165", type: "Tool" },
          { step: 5, cert: "2–3 Portfolio Projects", provider: "Self-built", cost: "$0", type: "Portfolio" },
        ],
        hireableAt: "Step 3 + 1 project",
        duration: "~6mo",
        courses: 24,
      },
      {
        num: "02",
        icon: "{ 02 } → BUSINESS",
        level: "Bridge",
        levelClass: "bridge",
        title: "Business Analytics",
        desc: "Requirements, stakeholder management, process mapping. Drive strategy, not just reports.",
        salaryRange: "$75K – $130K",
        salaryNote: "Mid → Senior · Payscale, Glassdoor, IIBA",
        topCert: "CBAP",
        topCertCost: "$505",
        href: "/learn/business-analytics",
        stack: [
          { step: 1, cert: "Google Project Management", provider: "Coursera", cost: "Free (audit)", type: "Foundation" },
          { step: 2, cert: "PSM I (Scrum Master)", provider: "Scrum.org", cost: "$150", type: "Agile" },
          { step: 3, cert: "Six Sigma Green Belt", provider: "ASQ / IASSC", cost: "$300–$500", type: "Process" },
          { step: 4, cert: "PMI-PBA", provider: "PMI", cost: "$555", type: "Advanced" },
          { step: 5, cert: "CBAP", provider: "IIBA", cost: "$505", type: "Expert" },
        ],
        hireableAt: "Step 2 + experience",
        duration: "~5mo",
        courses: 18,
      },
      {
        num: "03",
        icon: "{ 03 } → SCIENCE",
        level: "Advanced",
        levelClass: "advanced",
        title: "Data Science",
        desc: "Statistics, ML, Python notebooks, model deployment. Build models, not just query them.",
        salaryRange: "$95K – $160K",
        salaryNote: "Mid → Senior · Levels.fyi, Glassdoor, BLS",
        topCert: "Google Professional Data Engineer",
        topCertCost: "$200",
        href: "/learn/data-science",
        stack: [
          { step: 1, cert: "IBM Data Science Professional", provider: "Coursera", cost: "Free (audit)", type: "Foundation" },
          { step: 2, cert: "Python for Everybody", provider: "U of Michigan / Coursera", cost: "Free (audit)", type: "Skill" },
          { step: 3, cert: "TensorFlow Developer Certificate", provider: "Google", cost: "$100", type: "ML" },
          { step: 4, cert: "AWS Certified ML Specialty", provider: "AWS", cost: "$300", type: "Cloud ML" },
          { step: 5, cert: "Google Professional Data Engineer", provider: "Google Cloud", cost: "$200", type: "Expert" },
        ],
        hireableAt: "Step 3 + 2 projects",
        duration: "~9mo",
        courses: 31,
      },
    ],
  },
  {
    id: "security",
    name: "Security",
    meta: "// FROM WIRES TO DEFENSE",
    tracks: [
      {
        num: "04",
        icon: "{ 04 } → NETWORKING",
        level: "Foundation",
        levelClass: "entry",
        title: "Networking",
        desc: "TCP/IP, routing, switching, subnetting. You can't secure what you don't understand.",
        salaryRange: "$55K – $112K",
        salaryNote: "Entry → Mid · Payscale, CompTIA, Cisco",
        topCert: "CCNA",
        topCertCost: "$330",
        href: "/learn/networking",
        stack: [
          { step: 1, cert: "CompTIA IT Fundamentals (ITF+)", provider: "CompTIA", cost: "$123", type: "Foundation" },
          { step: 2, cert: "Cisco Networking Academy (free)", provider: "Cisco NetAcad", cost: "$0", type: "Skill" },
          { step: 3, cert: "CompTIA Network+", provider: "CompTIA", cost: "$369", type: "Core" },
          { step: 4, cert: "CCNA", provider: "Cisco", cost: "$330", type: "Advanced" },
        ],
        hireableAt: "Step 3 + home lab",
        duration: "~4mo",
        courses: 16,
      },
      {
        num: "05",
        icon: "{ 05 } → CYBER",
        level: "Applied",
        levelClass: "advanced",
        title: "Cybersecurity",
        desc: "Blue team, red team basics, compliance. Start with Security+, build toward a specialty.",
        salaryRange: "$75K – $156K",
        salaryNote: "Entry → Senior · ISC2, ISACA, Glassdoor",
        topCert: "CISM",
        topCertCost: "$765",
        href: "/learn/cybersecurity",
        stack: [
          { step: 1, cert: "CompTIA Security+", provider: "CompTIA", cost: "$412", type: "Foundation" },
          { step: 2, cert: "CompTIA CySA+ (Blue Team)", provider: "CompTIA", cost: "$412", type: "Defense" },
          { step: 3, cert: "CEH (Ethical Hacker)", provider: "EC-Council", cost: "$500–$1K", type: "Offense" },
          { step: 4, cert: "CISSP", provider: "ISC2", cost: "$749", type: "Expert" },
          { step: 5, cert: "CISM", provider: "ISACA", cost: "$765", type: "Management" },
        ],
        hireableAt: "Step 1 + Network+ + lab",
        duration: "~5mo",
        courses: 19,
      },
    ],
  },
  {
    id: "ai",
    name: "AI",
    meta: "// FROM CONCEPTS TO DEPLOYMENT",
    tracks: [
      {
        num: "06",
        icon: "{ 06 } → FOUNDATIONS",
        level: "Entry",
        levelClass: "entry",
        title: "AI Foundations",
        desc: "Core AI/ML concepts and real-world applications. The right starting point before specializing.",
        salaryRange: "$65K – $105K",
        salaryNote: "Entry → Mid with stack · Indeed, LinkedIn, Payscale",
        topCert: "AWS AI Practitioner",
        topCertCost: "$100",
        href: "/learn/ai-foundations",
        stack: [
          { step: 1, cert: "OCI AI Foundations Associate", provider: "Oracle", cost: "$95", type: "Foundation" },
          { step: 2, cert: "AWS AI Practitioner (AIF-C01)", provider: "AWS", cost: "$100", type: "Cloud AI" },
          { step: 3, cert: "Google AI Essentials", provider: "Google / Coursera", cost: "Free", type: "Skill" },
          { step: 4, cert: "Python Basics for AI", provider: "IBM / Coursera", cost: "Free (audit)", type: "Skill" },
          { step: 5, cert: "2 AI Portfolio Projects", provider: "Self-built", cost: "$0", type: "Portfolio" },
        ],
        hireableAt: "Step 2–3 + Python + projects",
        duration: "~3mo",
        courses: 14,
      },
      {
        num: "07",
        icon: "{ 07 } → GENERATIVE AI",
        level: "Bridge",
        levelClass: "bridge",
        title: "Generative AI",
        desc: "LLMs, prompt engineering, RAG pipelines, AI automation. Built by someone who ships GenAI at Oracle.",
        salaryRange: "$110K – $185K",
        salaryNote: "Mid → Senior · Glassdoor, Levels.fyi, LinkedIn",
        topCert: "OCI GenAI Professional",
        topCertCost: "$245",
        href: "/learn/generative-ai",
        stack: [
          { step: 1, cert: "OCI AI Foundations (prerequisite)", provider: "Oracle", cost: "$95", type: "Prereq" },
          { step: 2, cert: "OCI Generative AI Professional", provider: "Oracle", cost: "$245", type: "Core" },
          { step: 3, cert: "Prompt Engineering for Developers", provider: "DeepLearning.AI", cost: "Free", type: "Skill" },
          { step: 4, cert: "AWS Generative AI Developer", provider: "AWS", cost: "$300", type: "Cloud" },
          { step: 5, cert: "LangChain + RAG Projects (2)", provider: "Self-built", cost: "$0", type: "Portfolio" },
        ],
        hireableAt: "Step 2 + Step 3 + 1 project",
        duration: "~5mo",
        courses: 20,
      },
      {
        num: "08",
        icon: "{ 08 } → ARCHITECTURE",
        level: "Advanced",
        levelClass: "advanced",
        title: "Data Architecture",
        desc: "Cloud data platforms, warehousing, pipeline design. Own the full data stack.",
        salaryRange: "$112K – $197K",
        salaryNote: "Mid → Senior · AWS, Glassdoor, ZipRecruiter",
        topCert: "AWS Data Analytics Specialty",
        topCertCost: "$300",
        href: "/learn/data-architecture",
        stack: [
          { step: 1, cert: "CDMP Associate", provider: "DAMA", cost: "$311", type: "Foundation" },
          { step: 2, cert: "OCI Data Management Foundations", provider: "Oracle", cost: "$95", type: "Cloud" },
          { step: 3, cert: "dbt Analytics Engineering", provider: "dbt Labs", cost: "Free", type: "Tooling" },
          { step: 4, cert: "Google Professional Data Engineer", provider: "Google Cloud", cost: "$200", type: "Advanced" },
          { step: 5, cert: "AWS Data Analytics Specialty", provider: "AWS", cost: "$300", type: "Expert" },
        ],
        hireableAt: "Step 2–3 + portfolio pipeline",
        duration: "~6mo",
        courses: 22,
      },
    ],
  },
];

const levelStyle = (cls: string) => {
  if (cls === "entry")  return { background: "rgba(212,255,58,0.15)", color: "var(--accent)",     border: "1px solid rgba(212,255,58,0.3)" };
  if (cls === "bridge") return { background: "rgba(212,255,58,0.08)", color: "var(--accent-dim)", border: "1px solid rgba(212,255,58,0.2)" };
  return                        { background: "transparent",          color: "var(--dim)",         border: "1px solid var(--dimmer)" };
};

const stepTypeColor = (type: string) => {
  if (type === "Foundation" || type === "Prereq") return "var(--accent)";
  if (type === "Portfolio") return "#7C6AF7";
  if (type === "Expert") return "#F77C6A";
  return "var(--dim)";
};

export default function LearnPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              // 08 TRACKS · 03 FAMILIES · FREE
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 32 }}>
              The cert stack that<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>actually gets you hired.</em>
            </h1>
            <p style={{ fontSize: 20, color: "var(--dim)", maxWidth: 620, lineHeight: 1.5, marginBottom: 40 }}>
              No single cert gets you a job in 2025. Every track shows you the full sequence — in order — with honest salary ranges from multiple sources and the exact point you become hireable.
            </p>

            {/* Disclaimer strip */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 4, padding: "16px 20px", display: "inline-flex", gap: 12, alignItems: "flex-start", maxWidth: 680 }}>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginTop: 2 }}>NOTE</span>
              <p style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.6 }}>
                Salary ranges are aggregated from Indeed, LinkedIn Salary, Glassdoor, Payscale, and ZipRecruiter. Ranges reflect entry → mid-level with the full cert stack completed. Foundation-only certs will land lower in the range.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAMILIES ── */}
        {FAMILIES.map((family) => (
          <section key={family.id} style={{ padding: "80px 0 100px", borderTop: "1px solid var(--border)" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>

              {/* Family header */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 60, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 40, fontWeight: 400, letterSpacing: "-0.02em", fontStyle: "italic" }}>
                  {family.name}<em style={{ color: "var(--accent)" }}>.</em>
                </div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, letterSpacing: "0.2em", color: "var(--dimmer)", textTransform: "uppercase" }}>
                  {family.meta}
                </div>
              </div>

              {/* Tracks */}
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {family.tracks.map((track) => (
                  <div key={track.title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>

                    {/* Track header */}
                    <div style={{ padding: "36px 40px", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, alignItems: "start" }} className="track-header">

                      {/* Left: title + desc */}
                      <div>
                        <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", marginBottom: 16, letterSpacing: "0.1em" }}>{track.icon}</div>
                        <span style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "4px 10px", borderRadius: 2, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14, ...levelStyle(track.levelClass) }}>
                          {track.level}
                        </span>
                        <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 32, fontWeight: 500, marginBottom: 12, letterSpacing: "-0.01em", color: "var(--foreground)" }}>{track.title}</h2>
                        <p style={{ color: "var(--dim)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{track.desc}</p>
                        <div style={{ display: "flex", gap: 20, fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          <span><strong style={{ color: "var(--foreground)" }}>{track.courses}</strong> Courses</span>
                          <span><strong style={{ color: "var(--foreground)" }}>{track.duration}</strong></span>
                        </div>
                      </div>

                      {/* Middle: salary */}
                      <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: 32 }}>
                        <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
                          // SALARY RANGE
                        </div>
                        <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 40, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--foreground)", lineHeight: 1, marginBottom: 10 }}>
                          {track.salaryRange}
                        </div>
                        <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)", letterSpacing: "0.05em", lineHeight: 1.5 }}>
                          {track.salaryNote}
                        </div>
                        <div style={{ marginTop: 20, padding: "12px 16px", background: "var(--background)", borderRadius: 4, border: "1px solid var(--border)" }}>
                          <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Top cert</div>
                          <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--foreground)", fontWeight: 600 }}>{track.topCert}</div>
                          <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", marginTop: 4 }}>{track.topCertCost}</div>
                        </div>
                      </div>

                      {/* Right: hireable point + CTA */}
                      <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: 32 }}>
                        <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
                          // HIREABLE AT
                        </div>
                        <div style={{ background: "rgba(212,255,58,0.08)", border: "1px solid rgba(212,255,58,0.2)", borderRadius: 4, padding: "12px 16px", marginBottom: 24 }}>
                          <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--accent)", lineHeight: 1.5 }}>
                            {track.hireableAt}
                          </div>
                        </div>
                        <Link href={track.href} style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "12px 24px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>
                          View full roadmap →
                        </Link>
                      </div>
                    </div>

                    {/* Cert stack */}
                    <div style={{ padding: "28px 40px" }}>
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
                        // CERT STACK — IN ORDER
                      </div>
                      <div style={{ display: "flex", gap: 0, alignItems: "stretch", flexWrap: "wrap" }} className="cert-stack">
                        {track.stack.map((s, i) => (
                          <div key={s.step} style={{ display: "flex", alignItems: "center", flex: "1 1 0", minWidth: 160 }}>
                            <div style={{ flex: 1, background: "var(--background)", border: "1px solid var(--border)", borderRadius: 4, padding: "16px", position: "relative" }}>
                              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: stepTypeColor(s.type), letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                                {s.type}
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)", marginBottom: 4, lineHeight: 1.3 }}>{s.cert}</div>
                              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)" }}>{s.provider}</div>
                              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", marginTop: 6 }}>{s.cost}</div>
                            </div>
                            {i < track.stack.length - 1 && (
                              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 16, color: "var(--dimmer)", padding: "0 8px", flexShrink: 0 }}>→</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── FINAL CTA ── */}
        <section style={{ padding: "120px 0", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(40px,6vw,80px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Not sure where<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>to start?</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 18, maxWidth: 480, margin: "0 auto 48px" }}>
              Book a free 20-min career roadmap chat. We&apos;ll map your background to the right track and cert sequence.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>
                Book a roadmap chat →
              </Link>
              <Link href="/learn/roadmaps" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", textDecoration: "none" }}>
                View printable roadmaps →
              </Link>
            </div>
          </div>
        </section>

        {/* ── AI TOOLS ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16, flexWrap: "wrap", gap: 16 }}>
              <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 48, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>
                The <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Tools</em>
              </h2>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.1em" }}>// WHAT CLOSES THE GAP</div>
            </div>
            <p style={{ fontSize: 16, color: "var(--dim)", maxWidth: 640, lineHeight: 1.7, marginBottom: 56 }}>
              Certs teach the theory. These tools are what the industry is actually using day-to-day in 2025 to build faster, debug smarter, and ship more. Learning any of these alongside your cert track will make you significantly more hireable.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 20 }} className="tools-grid-learn">
              {[
                { name: "Claude Code", tag: "AI CODING AGENT", desc: "Anthropic's CLI agent. Writes, edits, and debugs entire codebases through conversation. This site was built with it.", url: "https://claude.ai", badge: "USED HERE" },
                { name: "Cursor", tag: "AI CODE EDITOR", desc: "VS Code with GPT-4 built in. Autocompletes entire functions, explains code inline, refactors on command.", url: "https://cursor.sh", badge: null },
                { name: "Gemini CLI", tag: "GOOGLE AI TERMINAL", desc: "Google's AI in your terminal. Connects to local files, Google Drive, and the web. Free with a Google account.", url: "https://gemini.google.com", badge: "FREE" },
              ].map((t) => (
                <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "28px 24px", textDecoration: "none", display: "block", position: "relative", transition: "border-color 0.2s, transform 0.2s" }} className="tool-card-learn">
                  {t.badge && <div style={{ position: "absolute", top: -11, right: 16, background: t.badge === "FREE" ? "transparent" : "var(--accent)", color: t.badge === "FREE" ? "var(--accent)" : "var(--background)", border: t.badge === "FREE" ? "1px solid var(--accent)" : "none", fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 2, letterSpacing: "0.12em" }}>{t.badge}</div>}
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 20, fontWeight: 500, color: "var(--foreground)", marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>{t.tag}</div>
                  <p style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                </a>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="tools-grid-learn">
              {[
                { name: "OpenAI Codex / ChatGPT", tag: "GENERAL AI ASSISTANT", desc: "Explain code, write boilerplate, debug errors, draft documentation. The most widely used AI tool in tech today.", url: "https://chatgpt.com", badge: null },
                { name: "MCP Servers", tag: "AI AGENT PROTOCOL", desc: "Model Context Protocol — how AI agents connect to tools, databases, and APIs. Covered in the Generative AI track.", url: "https://modelcontextprotocol.io", badge: "NEW 2025" },
                { name: "Vercel v0", tag: "AI UI GENERATOR", desc: "Describe a UI, get production-ready React code. Goes from idea to deployed component in minutes.", url: "https://v0.dev", badge: null },
              ].map((t) => (
                <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "28px 24px", textDecoration: "none", display: "block", position: "relative", transition: "border-color 0.2s, transform 0.2s" }} className="tool-card-learn">
                  {t.badge && <div style={{ position: "absolute", top: -11, right: 16, background: "transparent", color: "var(--accent)", border: "1px solid var(--accent)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 2, letterSpacing: "0.12em" }}>{t.badge}</div>}
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 20, fontWeight: 500, color: "var(--foreground)", marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>{t.tag}</div>
                  <p style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .track-header { grid-template-columns: 1fr !important; }
          .track-header > div { border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--border); padding-top: 24px; }
          .track-header > div:first-child { border-top: none; padding-top: 0; }
          .cert-stack { flex-direction: column; }
          .tools-grid-learn { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .tools-grid-learn { grid-template-columns: 1fr !important; }
        }
        .tool-card-learn:hover { border-color: var(--accent) !important; transform: translateY(-3px); }
      `}</style>
    </>
  );
}
