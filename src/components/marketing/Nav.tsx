"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/learn", label: "Learn" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(10,10,11,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 24px",
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="bracket">[</span>techturi<span className="dot">.</span><span className="bracket">]</span>
          </Link>

          {/* Desktop nav links */}
          <ul
            className="nav-links"
            style={{
              display: "flex",
              gap: 40,
              listStyle: "none",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{ color: "var(--dim)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/book"
            className="nav-cta"
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 13,
              padding: "10px 20px",
              background: "var(--accent)",
              color: "var(--background)",
              borderRadius: 4,
              fontWeight: 600,
              textDecoration: "none",
              transition: "transform 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Book a call →
          </Link>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "8px 12px",
              cursor: "pointer",
              color: "var(--foreground)",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 16,
              lineHeight: 1,
            }}
          >
            {menuOpen ? "✕" : "≡"}
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid var(--border)",
              background: "rgba(10,10,11,0.97)",
              padding: "24px",
            }}
          >
            <ul style={{ listStyle: "none", marginBottom: 24 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href} style={{ borderBottom: "1px solid var(--border)" }}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "16px 0",
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 15,
                      color: "var(--foreground)",
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 13,
                padding: "14px 20px",
                background: "var(--accent)",
                color: "var(--background)",
                borderRadius: 4,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Book a call →
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta   { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
