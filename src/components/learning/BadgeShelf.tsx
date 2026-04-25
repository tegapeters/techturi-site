"use client";

import { useState, useEffect } from "react";
import { QUIZZES } from "./quiz-data";

export default function BadgeShelf() {
  const [earned, setEarned] = useState<string[]>([]);

  useEffect(() => {
    const stored: string[] = JSON.parse(localStorage.getItem("tt_badges") ?? "[]");
    setEarned(stored);
  }, []);

  if (earned.length === 0) return null;

  return (
    <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>// YOUR BADGES</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {earned.map((id) => {
            const q = QUIZZES[id];
            if (!q) return null;
            return (
              <a
                key={id}
                href={`/learn/${id}`}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", borderRadius: 4, background: "rgba(212,255,58,0.06)", border: "1px solid rgba(212,255,58,0.2)", textDecoration: "none" }}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: q.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, fontWeight: 700, color: "#0A0A0B" }}>{q.badge}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{q.label}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 9, color: "var(--dimmer)", letterSpacing: "0.08em", marginTop: 2 }}>QUIZ PASSED</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
