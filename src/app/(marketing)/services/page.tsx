import Link from "next/link";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom websites built to last. Annual Wix plans or permanent HTML/React builds — hosting, maintenance, and support under the Techturi umbrella.",
};

const WIX_TIERS = [
  {
    name: "Starter",
    term: "1 Year",
    price: "$1,500",
    period: "/yr",
    saving: null,
    highlight: false,
    deposit: "$750 deposit",
    depositNote: "50% upfront · remaining balance invoiced monthly over the contract term",
    tagline: "Full service. Your site stays live on Wix for the entire year.",
    features: [
      "Up to 8 pages, fully custom",
      "Wix hosting included for 1 year",
      "Custom domain setup",
      "SSL certificate",
      "Mobile responsive design",
      "Basic SEO setup",
      "Basic analytics dashboard",
      "2 revisions per month",
      "Monthly backup",
      "Email support (48h)",
    ],
    cta: "Pay deposit →",
    href: "https://square.link/u/uHZe3zhU",
    external: true,
  },
  {
    name: "Growth",
    term: "2 Years",
    price: "$2,500",
    period: "/2yr",
    saving: "Save $500",
    highlight: true,
    deposit: "$625 deposit",
    depositNote: "25% upfront · remaining balance invoiced monthly over the contract term",
    tagline: "Everything in Starter — extended to two years under the Techturi umbrella.",
    features: [
      "Up to 15 pages, fully custom",
      "Wix hosting included for 2 years",
      "Custom domain setup",
      "SSL certificate",
      "Mobile responsive design",
      "Advanced SEO setup",
      "Pro analytics dashboard",
      "5 revisions per month",
      "2 content updates per month",
      "Weekly backup",
      "Performance monitoring",
      "Email + chat support (24h)",
    ],
    cta: "Pay deposit →",
    href: "https://square.link/u/xU3pymu3",
    external: true,
  },
  {
    name: "Pro",
    term: "3 Years",
    price: "$3,400",
    period: "/3yr",
    saving: "Save $1,100",
    highlight: false,
    deposit: "$850 deposit",
    depositNote: "25% upfront · remaining balance invoiced monthly over the contract term",
    tagline: "Three years of full service — plus a custom iOS or Android app included.",
    features: [
      "Unlimited pages",
      "Wix hosting included for 3 years",
      "Custom domain setup",
      "SSL certificate",
      "Mobile responsive design",
      "Full SEO audit monthly",
      "Pro analytics + monthly report",
      "Unlimited revisions",
      "Unlimited content updates",
      "Daily backup",
      "Performance monitoring",
      "30-min monthly strategy call",
      "Priority same-day support",
      "iOS or Android app included",
    ],
    cta: "Pay deposit →",
    href: "https://square.link/u/IQhafSf7",
    external: true,
  },
];

const ADDONS = [
  {
    icon: "[ iOS ]",
    title: "iOS App",
    price: "$2,500",
    note: "+ $99 Apple fee",
    desc: "React Native build, App Store submission, 1 year of updates included.",
    free: "Free with Custom Build (lifetime)",
  },
  {
    icon: "[ AND ]",
    title: "Android App",
    price: "$2,000",
    note: "",
    desc: "React Native build, Google Play submission, 1 year of updates included.",
    free: null,
  },
  {
    icon: "[ x2 ]",
    title: "Both Platforms",
    price: "$3,800",
    note: "",
    desc: "Full cross-platform build, both stores, 1 year of updates.",
    free: null,
  },
  {
    icon: "[ +1yr ]",
    title: "App Maintenance",
    price: "+$500",
    note: "/yr",
    desc: "Bug fixes, OS updates, App Store compliance renewals.",
    free: null,
  },
];

const EXTRA_ADDONS = [
  { name: "E-commerce setup", price: "+$300/yr", desc: "Wix Stores, product catalog, payment gateway" },
  { name: "Logo & Brand Kit", price: "$250", desc: "One-time. Logo, colors, fonts, brand guidelines" },
  { name: "Google Workspace Email", price: "+$150/yr", desc: "Managed name@yourdomain.com for your team" },
  { name: "Rush Build", price: "+$500", desc: "Site live within 5 business days" },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              // 02 PATHS · 5YR MAINTENANCE
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 32 }}>
              Websites built<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>to outlast trends.</em>
            </h1>
            <p style={{ fontSize: 20, color: "var(--dim)", maxWidth: 580, lineHeight: 1.5 }}>
              Two ways to work with Techturi. An annual contract under the Techturi umbrella — hosting, maintenance, and support included — or a permanent custom build you own outright. Both backed by five years of coverage.
            </p>
          </div>
        </section>

        {/* ── WIX TIERS ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 48, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>
                Wix <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Annual Plans</em>
              </h2>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.1em" }}>
                // HOSTING INCLUDED · ANNUAL CONTRACT
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="tiers-grid">
              {WIX_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    background: tier.highlight ? "linear-gradient(135deg, #1A1F0A 0%, #131315 100%)" : "var(--surface)",
                    border: `1px solid ${tier.highlight ? "var(--accent-dim)" : "var(--border)"}`,
                    borderRadius: 8,
                    padding: "40px 36px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {tier.saving && (
                    <div style={{ position: "absolute", top: -12, right: 24, background: "var(--accent)", color: "var(--background)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 2, letterSpacing: "0.1em" }}>
                      {tier.saving}
                    </div>
                  )}

                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: tier.highlight ? "var(--accent)" : "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
                    {tier.term}
                  </div>

                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em", marginBottom: 8, color: "var(--foreground)" }}>
                    {tier.name}
                  </div>

                  <p style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.6, marginBottom: 16 }}>{tier.tagline}</p>

                  <div style={{ marginBottom: 16 }}>
                    <span style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 52, fontWeight: 400, letterSpacing: "-0.03em", color: "var(--foreground)" }}>{tier.price}</span>
                    <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--dim)", marginLeft: 4 }}>{tier.period}</span>
                  </div>

                  <div style={{ marginBottom: 32, padding: "10px 14px", background: "rgba(212,255,58,0.06)", border: "1px solid rgba(212,255,58,0.15)", borderRadius: 4 }}>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", fontWeight: 600, marginBottom: 2 }}>{tier.deposit}</div>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dimmer)", letterSpacing: "0.05em" }}>{tier.depositNote}</div>
                  </div>

                  <ul style={{ listStyle: "none", marginBottom: 36, flex: 1 }}>
                    {tier.features.map((f) => {
                      const isIos = f.startsWith("FREE iOS") || f.startsWith("iOS or Android app");
                      return (
                        <li key={f} style={{ padding: "9px 0", borderBottom: "1px solid var(--border)", fontSize: 14, color: isIos ? "var(--accent)" : "var(--dim)", display: "flex", alignItems: "center", gap: 10, fontWeight: isIos ? 600 : 400 }}>
                          <span style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 12 }}>{isIos ? "✦" : "→"}</span>
                          {f}
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: 13,
                      padding: "14px 28px",
                      borderRadius: 4,
                      background: tier.highlight ? "var(--accent)" : "transparent",
                      color: tier.highlight ? "var(--background)" : "var(--foreground)",
                      border: tier.highlight ? "none" : "1px solid var(--dimmer)",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CUSTOM BUILDS ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 48, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>
                Custom <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Builds</em>
              </h2>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.1em" }}>
                // YOU OWN IT FOREVER
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="custom-grid">
              {/* Price box */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "48px 40px" }}>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
                  Starting at
                </div>
                <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 72, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8, color: "var(--foreground)" }}>
                  $4,500
                </div>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--dim)", marginBottom: 40 }}>
                  Quote-based. Final price depends on scope.
                </div>
                <ul style={{ listStyle: "none", marginBottom: 40 }}>
                  {[
                    "Next.js, React, or pure HTML/CSS",
                    "Hosted on Vercel or your choice",
                    "Full source code — it's yours",
                    "5 years of maintenance included",
                    "Custom integrations available",
                    "FREE iOS app included ✦",
                    "Android app available as add-on",
                  ].map((f) => (
                    <li key={f} style={{ padding: "10px 0", borderBottom: "1px solid var(--border)", fontSize: 14, color: f.startsWith("FREE") ? "var(--foreground)" : "var(--dim)", display: "flex", alignItems: "center", gap: 12, fontWeight: f.startsWith("FREE") ? 500 : 400 }}>
                      <span style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains),monospace" }}>→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/intake" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>
                  Request a quote →
                </Link>
              </div>

              {/* What to expect */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { step: "01", title: "Discovery call", desc: "30 minutes to understand your business, goals, and timeline. Free, no obligation." },
                  { step: "02", title: "Proposal + quote", desc: "Detailed scope, tech stack, timeline, and fixed price. No surprise invoices." },
                  { step: "03", title: "Build & review", desc: "Weekly check-ins. You see progress throughout — not just a final reveal." },
                  { step: "04", title: "Launch + 5yr support", desc: "We deploy, handle DNS, and stay on for 5 years of maintenance. One point of contact." },
                ].map((s) => (
                  <div key={s.step} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "24px 28px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, color: "var(--accent)", fontWeight: 600, minWidth: 28 }}>{s.step}</div>
                    <div>
                      <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 20, fontWeight: 500, marginBottom: 6, color: "var(--foreground)" }}>{s.title}</div>
                      <div style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.6 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── APP ADD-ON ── */}
        <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 48, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em" }}>
                Max <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>Package</em>
              </h2>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)", letterSpacing: "0.1em" }}>
                // iOS · ANDROID · BOTH
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 40 }} className="addons-grid">
              {ADDONS.map((a) => (
                <div key={a.title} style={{ background: a.free ? "linear-gradient(135deg, #1A1F0A 0%, #131315 100%)" : "var(--surface)", border: `1px solid ${a.free ? "var(--accent-dim)" : "var(--border)"}`, borderRadius: 8, padding: "28px 24px", position: "relative" }}>
                  {a.free && (
                    <div style={{ position: "absolute", top: -11, left: 20, background: "var(--accent)", color: "var(--background)", fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 2, letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                      FREE ON QUALIFYING PLANS
                    </div>
                  )}
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", marginBottom: 16, letterSpacing: "0.1em" }}>{a.icon}</div>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 22, fontWeight: 500, marginBottom: 6, color: "var(--foreground)" }}>{a.title}</div>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 32, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--foreground)", marginBottom: 4 }}>
                    {a.price}<span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)" }}>{a.note}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.6, marginTop: 12 }}>{a.desc}</div>
                  {a.free && (
                    <div style={{ marginTop: 16, fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em" }}>
                      ✦ {a.free}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXTRA ADD-ONS ── */}
        <section style={{ padding: "0 0 120px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>
              // EXTRA ADD-ONS
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="extras-grid">
              {EXTRA_ADDONS.map((a) => (
                <div key={a.name} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "24px" }}>
                  <div style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 18, fontWeight: 500, marginBottom: 6, color: "var(--foreground)" }}>{a.name}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 16, color: "var(--accent)", marginBottom: 10, fontWeight: 600 }}>{a.price}</div>
                  <div style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.6 }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ padding: "120px 0", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(40px,6vw,80px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Not sure which<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>path is right?</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 18, maxWidth: 480, margin: "0 auto 48px" }}>
              Book a free 15-min call. No pitch — just a conversation about what you actually need.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, textDecoration: "none" }}>
                Book a free call →
              </Link>
              <Link href="/intake" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", textDecoration: "none" }}>
                Start intake form →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .tiers-grid { grid-template-columns: 1fr !important; }
          .custom-grid { grid-template-columns: 1fr !important; }
          .addons-grid { grid-template-columns: repeat(2,1fr) !important; }
          .extras-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          .addons-grid { grid-template-columns: 1fr !important; }
          .extras-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
