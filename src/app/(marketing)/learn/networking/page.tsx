import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import QuizWidget from "@/components/learning/QuizWidget";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Networking Roadmap",
  description: "Free roadmap to learn networking fundamentals. CompTIA Network+, CCNA-aligned curriculum using free Cisco resources. Salary $50K–$95K.",
};

const CERT_STACK = [
  { order: 1, name: "Cisco Networking Academy — CCNA 1 & 2", provider: "Cisco NetAcad (Free)", cost: "Free", duration: "2–3 months", hireable: false, note: "TCP/IP, OSI model, subnetting, routing basics. Entirely free through Cisco's academy. Best structured intro to networking available." },
  { order: 2, name: "CompTIA Network+ (N10-009)", provider: "Professor Messer / CompTIA", cost: "Free (study) · $338 exam", duration: "2–3 months", hireable: true, note: "Hireable checkpoint. Vendor-neutral networking cert. Required or preferred in most IT and network support roles. Study free with Professor Messer." },
  { order: 3, name: "Cisco CCNA (200-301)", provider: "Cisco / Jeremy's IT Lab (free YouTube)", cost: "Free (study) · $330 exam", duration: "3–5 months", hireable: false, note: "The industry standard for networking engineers. Jeremy's IT Lab on YouTube is the best free CCNA prep available. Opens network engineer and NOC roles." },
];

const RESOURCES = [
  { name: "Cisco Networking Academy (Free)", url: "https://netacad.com", source: "Cisco" },
  { name: "Professor Messer — Network+", url: "https://professormesser.com/network-plus", source: "ProfessorMesser.com" },
  { name: "Jeremy's IT Lab — CCNA (Free YouTube)", url: "https://youtube.com/@JeremysITLab", source: "YouTube" },
  { name: "Subnetting Practice", url: "https://subnettingpractice.com", source: "SubnettingPractice.com" },
  { name: "Packet Tracer (Free Simulator)", url: "https://netacad.com/courses/packet-tracer", source: "Cisco" },
];

const SALARY = [
  { title: "Help Desk / IT Support", range: "$38K – $58K", note: "Entry, A+/Network+" },
  { title: "Network Technician", range: "$50K – $72K", note: "Network+, 1–2 yrs" },
  { title: "Network Engineer", range: "$70K – $100K", note: "CCNA, 2–4 yrs" },
  { title: "Senior Network Engineer", range: "$95K – $130K", note: "CCNP, 5+ yrs" },
];

export default function NetworkingPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <Link href="/learn" style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}>← Back to Learn Hub</Link>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, padding: "4px 12px", borderRadius: 2, background: "rgba(212,255,58,0.15)", color: "var(--accent)", border: "1px solid rgba(212,255,58,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Foundation</span>
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.1em" }}>SECURITY FAMILY · TRACK 04</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Net-<br /><em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>working.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 580, lineHeight: 1.7, marginBottom: 40 }}>TCP/IP, routing, switching, subnetting. CCNA-aligned using free Cisco resources. You can&apos;t secure or build what you don&apos;t understand.</p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[{ label: "Duration", val: "~4 months" }, { label: "Courses", val: "16" }, { label: "Projects", val: "6" }, { label: "Cert Cost", val: "~$668 total" }].map((s) => (
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
        <QuizWidget trackId="networking" />

        <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 20 }}>Need help with the <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>roadmap?</em></h2>
            <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>Book a free call and I&apos;ll point you to exactly what to study first.</p>
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
