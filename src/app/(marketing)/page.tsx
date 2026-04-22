import Link from "next/link";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";

const TRACKS = [
  {
    family: "Data",
    meta: "// FROM DASHBOARDS TO MODELS",
    cols: 3,
    tracks: [
      {
        icon: "{ 01 } → ANALYTICS",
        level: "Entry",
        levelClass: "entry",
        title: "Data Analytics",
        desc: "SQL, Python, Power BI, Tableau. From curious beginner to dashboard-shipping professional. Built on the exact skills hiring managers actually screen for.",
        courses: 24,
        projects: 5,
        duration: "~6mo",
        href: "/learn/data-analytics",
      },
      {
        icon: "{ 02 } → BUSINESS",
        level: "Bridge",
        levelClass: "bridge",
        title: "Business Analytics",
        desc: "Requirements gathering, stakeholder management, process mapping. For analysts who want to drive strategy — not just report on it.",
        courses: 18,
        projects: 4,
        duration: "~5mo",
        href: "/learn/business-analytics",
      },
      {
        icon: "{ 03 } → SCIENCE",
        level: "Advanced",
        levelClass: "advanced",
        title: "Data Science",
        desc: "Statistics, ML, Python notebooks, model deployment. The deeper path — for people who want to build models, not just query them.",
        courses: 31,
        projects: 7,
        duration: "~9mo",
        href: "/learn/data-science",
      },
    ],
    progression: ["◦ START HERE", "◦ BRIDGE", "◦ DEEP END →"],
  },
  {
    family: "Security",
    meta: "// FROM WIRES TO DEFENSE",
    cols: 2,
    tracks: [
      {
        icon: "{ 04 } → NETWORKING",
        level: "Foundation",
        levelClass: "entry",
        title: "Networking",
        desc: "TCP/IP, routing, switching, subnetting. CCNA-aligned curriculum using free Cisco Networking Academy resources. You can't secure what you don't understand.",
        courses: 16,
        projects: 6,
        duration: "~4mo",
        href: "/learn/networking",
      },
      {
        icon: "{ 05 } → CYBER",
        level: "Applied",
        levelClass: "advanced",
        title: "Cybersecurity",
        desc: "Fundamentals, blue team, red team basics, compliance. Start with Security+ and build toward a specialty. Free labs and practical scenarios.",
        courses: 19,
        projects: 4,
        duration: "~5mo",
        href: "/learn/cybersecurity",
      },
    ],
    progression: ["◦ FOUNDATION", "◦ APPLIED →"],
  },
];

const MARQUEE_ITEMS = [
  "DATA ANALYTICS", "BUSINESS ANALYTICS", "DATA SCIENCE",
  "NETWORKING", "CYBERSECURITY", "WEB DEVELOPMENT", "AI AUTOMATION",
];

const levelStyle = (cls: string) => {
  if (cls === "entry")    return { background: "rgba(212,255,58,0.15)", color: "var(--accent)",     border: "1px solid rgba(212,255,58,0.3)" };
  if (cls === "bridge")   return { background: "rgba(212,255,58,0.08)", color: "var(--accent-dim)", border: "1px solid rgba(212,255,58,0.2)" };
  return                           { background: "transparent",          color: "var(--dim)",         border: "1px solid var(--dimmer)" };
};

export default function HomePage() {
  const marquee = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      <Nav />

      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{
              fontFamily: "var(--font-jetbrains),monospace",
              fontSize: 12,
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 32,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              Houston, TX — Est. 2024
            </div>

            <h1 style={{
              fontFamily: "var(--font-fraunces),serif",
              fontSize: "clamp(56px, 9vw, 128px)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: 32,
            }}>
              Learn tech for free.<br />
              Get a site{" "}
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>
                built to last.
              </em>
            </h1>

            <p style={{ fontSize: 20, color: "var(--dim)", maxWidth: 620, marginBottom: 60, lineHeight: 1.5 }}>
              Techturi is two things. A free library of curated roadmaps for breaking into data and cyber —
              and a web studio building websites that outlast trends, with five years of maintenance baked in.
            </p>

            {/* Path cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 80 }} className="paths-grid">
              {[
                {
                  num: "01", audience: "FOR LEARNERS",
                  title: "Break into", titleEm: "tech", titleEnd: " without a bootcamp tax.",
                  desc: "Hand-picked free courses from AWS, Oracle, Coursera, LinkedIn Learning. Visual roadmaps. Zero gatekeeping. Zero upsells.",
                  cta: "Explore the library →", href: "/learn",
                },
                {
                  num: "02", audience: "FOR BUSINESSES",
                  title: "Websites that ", titleEm: "last", titleEnd: " — subscription or permanent.",
                  desc: "Yearly subscriptions from $1,500. Custom HTML/React builds when you need the real thing. Every project: 5 years of maintenance, included.",
                  cta: "See services →", href: "/services",
                },
              ].map((card) => (
                <Link
                  key={card.num}
                  href={card.href}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "48px 40px",
                    borderRadius: 8,
                    display: "block",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="path-card"
                >
                  <div style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: "var(--dimmer)",
                    textTransform: "uppercase",
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}>
                    <span style={{ color: "var(--accent)", fontWeight: 600 }}>{card.num}</span>
                    {" / "}{card.audience}
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-fraunces),serif",
                    fontSize: 44,
                    fontWeight: 400,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    marginBottom: 20,
                    color: "var(--foreground)",
                  }}>
                    {card.title}
                    <em style={{ fontStyle: "italic", fontWeight: 300 }}>{card.titleEm}</em>
                    {card.titleEnd}
                  </h2>
                  <p style={{ color: "var(--dim)", fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}>
                    {card.desc}
                  </p>
                  <span style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: 13,
                    color: "var(--foreground)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    paddingBottom: 4,
                    borderBottom: "1px solid var(--dimmer)",
                  }}>
                    {card.cta}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROOF STATS ── */}
        <section style={{ padding: "80px 0 40px", borderTop: "1px solid var(--border)", marginTop: 120 }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, letterSpacing: "0.2em", color: "var(--dimmer)", textTransform: "uppercase", marginBottom: 32 }}>
              // TRACK RECORD
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="stats-grid">
              {[
                { num: "11+", label: "Certifications\nHeld" },
                { num: "5+",  label: "Live Client\nProjects" },
                { num: "6yr", label: "Senior Eng\nat Oracle", accent: true },
                { num: "$0",  label: "Cost to\nLearn Here" },
              ].map((s) => (
                <div key={s.label} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 20 }}>
                  <div style={{
                    fontFamily: "var(--font-fraunces),serif",
                    fontSize: 56,
                    fontWeight: 300,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    marginBottom: 8,
                    color: "var(--foreground)",
                  }}>
                    {s.accent
                      ? <><span>6</span><span style={{ color: "var(--accent)" }}>yr</span></>
                      : s.num}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "var(--dim)",
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "20px 0", overflow: "hidden" }}>
          <div style={{
            display: "flex",
            gap: 60,
            whiteSpace: "nowrap",
            animation: "scroll 30s linear infinite",
            fontFamily: "var(--font-jetbrains),monospace",
            fontSize: 13,
            color: "var(--dim)",
            letterSpacing: "0.1em",
          }}>
            {marquee.map((item, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 60 }}>
                {item} <span style={{ color: "var(--accent)" }}>●</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── LEARN ── */}
        <section style={{ padding: "120px 0", borderTop: "1px solid var(--border)" }} id="learn">
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 56, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>
                The <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Library</em>
              </h2>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.1em" }}>
                // 05 TRACKS · 02 FAMILIES · FREE
              </div>
            </div>

            {TRACKS.map((family) => (
              <div key={family.family} style={{ marginBottom: 60 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 44, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 32, fontWeight: 400, letterSpacing: "-0.02em", fontStyle: "italic" }}>
                    {family.family}<em style={{ color: "var(--accent)" }}>.</em>
                  </div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, letterSpacing: "0.2em", color: "var(--dimmer)", textTransform: "uppercase" }}>
                    {family.meta}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: `repeat(${family.cols}, 1fr)`, gap: 20, position: "relative" }}>
                  {/* Progression labels */}
                  <div style={{ position: "absolute", top: -32, left: 0, right: 0, display: "flex", justifyContent: "space-between", fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", pointerEvents: "none" }} className="progression-labels">
                    {family.progression.map((p) => <span key={p}>{p}</span>)}
                  </div>

                  {family.tracks.map((track) => (
                    <Link
                      key={track.title}
                      href={track.href}
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        padding: "36px 32px",
                        borderRadius: 8,
                        transition: "all 0.3s",
                        textDecoration: "none",
                        display: "block",
                      }}
                      className="track-card"
                    >
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", marginBottom: 20, letterSpacing: "0.1em" }}>
                        {track.icon}
                      </div>
                      <span style={{
                        display: "inline-block",
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: 10,
                        padding: "4px 10px",
                        borderRadius: 2,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: 16,
                        ...levelStyle(track.levelClass),
                      }}>
                        {track.level}
                      </span>
                      <h3 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 28, fontWeight: 500, marginBottom: 12, letterSpacing: "-0.01em", color: "var(--foreground)" }}>
                        {track.title}
                      </h3>
                      <p style={{ color: "var(--dim)", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                        {track.desc}
                      </p>
                      <div style={{ display: "flex", gap: 20, fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", textTransform: "uppercase", letterSpacing: "0.1em", paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                        <span><strong style={{ color: "var(--foreground)", fontWeight: 500 }}>{track.courses}</strong> Courses</span>
                        <span><strong style={{ color: "var(--foreground)", fontWeight: 500 }}>{track.projects}</strong> Projects</span>
                        <span><strong style={{ color: "var(--foreground)", fontWeight: 500 }}>{track.duration}</strong></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section style={{ padding: "120px 0", borderTop: "1px solid var(--border)" }} id="services">
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 56, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>
                The <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Studio</em>
              </h2>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.1em" }}>
                // 02 PATHS · 5YR MAINTENANCE
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="services-grid">

              {/* Wix Subscriptions */}
              <div style={{
                background: "linear-gradient(135deg, #1A1F0A 0%, #131315 100%)",
                border: "1px solid var(--accent-dim)",
                borderRadius: 8,
                padding: "48px 40px",
              }}>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
                  ◆ SUBSCRIPTION · MOST POPULAR
                </div>
                <h3 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 12, color: "var(--foreground)" }}>
                  Wix Studio Sites
                </h3>
                <p style={{ color: "var(--dim)", fontSize: 15, marginBottom: 32 }}>
                  Fast to launch. Easy to maintain. Billed yearly — hosting included.
                </p>

                <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
                  {[
                    { name: "Starter", price: "$1,500", period: "/yr" },
                    { name: "Growth",  price: "$2,500", period: "/2yr" },
                    { name: "Pro",     price: "$3,400", period: "/3yr" },
                  ].map((tier) => (
                    <div key={tier.name} style={{ flex: 1, minWidth: 100, background: "var(--background)", padding: 16, borderRadius: 4, border: "1px solid var(--border)", textAlign: "center" }}>
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dim)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                        {tier.name}
                      </div>
                      <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 22, fontWeight: 500, color: "var(--foreground)" }}>
                        {tier.price}<span style={{ fontSize: 12, color: "var(--dim)", fontFamily: "var(--font-jetbrains),monospace" }}>{tier.period}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <ul style={{ listStyle: "none", marginBottom: 32 }}>
                  {[
                    "Up to 15 pages, fully custom",
                    "Wix hosting included for full term",
                    "Monthly content updates included",
                    "SEO + analytics baked in",
                    "Email support throughout",
                  ].map((f) => (
                    <li key={f} style={{ padding: "10px 0", borderBottom: "1px solid var(--border)", fontSize: 14, color: "var(--dim)", display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains),monospace" }}>→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/services/wix" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>
                  Start subscription →
                </Link>
              </div>

              {/* Custom Builds */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "48px 40px" }}>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
                  ◇ PERMANENT BUILD
                </div>
                <h3 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 12, color: "var(--foreground)" }}>
                  Custom HTML / React
                </h3>
                <p style={{ color: "var(--dim)", fontSize: 15, marginBottom: 32 }}>
                  Own your site forever. Built on real code.
                </p>

                <div style={{ marginBottom: 32, padding: 24, background: "var(--background)", borderRadius: 4, border: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                    Starting at
                  </div>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 44, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--foreground)" }}>
                    $4,500<span style={{ fontSize: 14, color: "var(--dim)", fontFamily: "var(--font-jetbrains),monospace", marginLeft: 8 }}>+ maintenance</span>
                  </div>
                </div>

                <ul style={{ listStyle: "none", marginBottom: 32 }}>
                  {[
                    "Next.js, React, or pure HTML",
                    "Hosted on Vercel or your choice",
                    "Full source code — it's yours",
                    "5 years of maintenance included",
                    "iOS/Android app available as add-on",
                  ].map((f) => (
                    <li key={f} style={{ padding: "10px 0", borderBottom: "1px solid var(--border)", fontSize: 14, color: "var(--dim)", display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains),monospace" }}>→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/intake" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", textDecoration: "none" }}>
                  Request a quote →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section style={{ padding: "120px 0", borderTop: "1px solid var(--border)" }} id="portfolio">
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 56, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>
                Recent <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>work</em>
              </h2>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.1em" }}>
                // LIVE PROJECTS
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }} className="portfolio-grid">
              {[
                { title: "A & J National Housing", type: "GOVERNMENT LODGING · WIX STUDIO", tall: false },
                { title: "HEOP23", type: "EVENT PLATFORM", tall: true },
              ].map((w) => (
                <div key={w.title} style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  overflow: "hidden",
                  aspectRatio: w.tall ? "1/1" : "16/10",
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}>
                  <div style={{
                    width: "100%",
                    height: "70%",
                    background: "linear-gradient(135deg, #1a1a1f 0%, #0a0a0b 100%)",
                    borderBottom: "1px solid var(--border)",
                    position: "relative",
                  }} />
                  <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 20, fontWeight: 500, marginBottom: 4, color: "var(--foreground)" }}>{w.title}</h4>
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{w.type}</div>
                    </div>
                    <span style={{ fontFamily: "var(--font-jetbrains),monospace", color: "var(--dim)", fontSize: 20 }}>↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ padding: "160px 0", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,88px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 32 }}>
              Ready to <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>start?</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 18, maxWidth: 520, margin: "0 auto 48px" }}>
              Whether you&apos;re here to learn or here to launch, there&apos;s a path for you. Pick one.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/learn" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>
                Browse the library
              </Link>
              <Link href="/book" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", textDecoration: "none" }}>
                Book a 15-min call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .path-card:hover { border-color: #33333A !important; transform: translateY(-4px); }
        .path-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--accent); transform:scaleX(0); transform-origin:left; transition:transform 0.4s; }
        .path-card:hover::before { transform:scaleX(1); }
        .track-card:hover { border-color: var(--accent) !important; transform: translateY(-4px); }
        @media (max-width: 768px) {
          .paths-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .progression-labels { display: none !important; }
          .footer-inner { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 900px) {
          .track-grid-3, .track-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
