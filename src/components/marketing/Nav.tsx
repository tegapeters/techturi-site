"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
          padding: "20px 32px",
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
          {[
            { href: "/learn", label: "Learn" },
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/about", label: "About" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  color: "var(--dim)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/book"
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
      </div>
    </nav>
  );
}
