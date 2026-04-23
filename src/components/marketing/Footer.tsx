import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "60px 0 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 60,
          }}
          className="footer-inner"
        >
          {/* Brand */}
          <div>
            <Link href="/" className="logo" style={{ display: "inline-flex", marginBottom: 16 }}>
              <span className="bracket">[</span>techturi<span className="dot">.</span><span className="bracket">]</span>
            </Link>
            <p style={{ color: "var(--dim)", fontSize: 14, maxWidth: 300 }}>
              Learn. Build. Launch. Built in Houston, TX by an engineer who actually ships things.
            </p>
          </div>

          {/* Data */}
          <div>
            <h5 style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, letterSpacing: "0.2em", color: "var(--dimmer)", textTransform: "uppercase", marginBottom: 20 }}>
              Data
            </h5>
            <ul style={{ listStyle: "none" }}>
              {[
                { href: "/learn/data-analytics", label: "Data Analytics" },
                { href: "/learn/business-analytics", label: "Business Analytics" },
                { href: "/learn/data-science", label: "Data Science" },
                { href: "/learn/roadmaps", label: "Roadmaps" },
              ].map((l) => (
                <li key={l.href} style={{ marginBottom: 12 }}>
                  <Link href={l.href} style={{ color: "var(--dim)", textDecoration: "none", fontSize: 14 }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, letterSpacing: "0.2em", color: "var(--dimmer)", textTransform: "uppercase", marginBottom: 20 }}>
              Services
            </h5>
            <ul style={{ listStyle: "none" }}>
              {[
                { href: "/services", label: "All Services" },
                { href: "/services", label: "Wix Subscriptions" },
                { href: "/services", label: "Custom Builds" },
                { href: "/portfolio", label: "Portfolio" },
              ].map((l) => (
                <li key={l.label} style={{ marginBottom: 12 }}>
                  <Link href={l.href} style={{ color: "var(--dim)", textDecoration: "none", fontSize: 14 }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, letterSpacing: "0.2em", color: "var(--dimmer)", textTransform: "uppercase", marginBottom: 20 }}>
              Contact
            </h5>
            <ul style={{ listStyle: "none" }}>
              {[
                { href: "mailto:techturi.org@gmail.com", label: "Email" },
                { href: "/book", label: "Book a call" },
                { href: "/intake", label: "Start a project" },
                { href: "https://github.com/tegapeters", label: "GitHub" },
              ].map((l) => (
                <li key={l.href} style={{ marginBottom: 12 }}>
                  <Link href={l.href} style={{ color: "var(--dim)", textDecoration: "none", fontSize: 14 }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-jetbrains),monospace",
            fontSize: 12,
            color: "var(--dimmer)",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© 2026 Techturi — All rights reserved.</span>
          <span>MADE IN HOUSTON ●</span>
        </div>
      </div>
    </footer>
  );
}
