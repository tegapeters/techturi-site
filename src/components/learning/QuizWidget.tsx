"use client";

import { useState, useEffect } from "react";
import { QUIZZES } from "./quiz-data";

const PASS_THRESHOLD = 4; // out of 5

function saveBadge(trackId: string) {
  if (typeof window === "undefined") return;
  const existing: string[] = JSON.parse(localStorage.getItem("tt_badges") ?? "[]");
  if (!existing.includes(trackId)) {
    localStorage.setItem("tt_badges", JSON.stringify([...existing, trackId]));
  }
}

export default function QuizWidget({ trackId }: { trackId: string }) {
  const quiz = QUIZZES[trackId];
  const [step, setStep] = useState<"idle" | "quiz" | "result">("idle");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [badgeAlready, setBadgeAlready] = useState(false);

  useEffect(() => {
    const existing: string[] = JSON.parse(localStorage.getItem("tt_badges") ?? "[]");
    setBadgeAlready(existing.includes(trackId));
  }, [trackId]);

  if (!quiz) return null;

  const q = quiz.questions[current];
  const score = answers.filter(Boolean).length;
  const passed = score >= PASS_THRESHOLD;

  function handleOption(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
  }

  function handleNext() {
    const correct = selected === q.answer;
    const newAnswers = [...answers, correct];
    if (current + 1 < quiz.questions.length) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setAnswers(newAnswers);
      const finalScore = newAnswers.filter(Boolean).length;
      if (finalScore >= PASS_THRESHOLD) saveBadge(trackId);
      setStep("result");
    }
  }

  function handleRetry() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setStep("quiz");
  }

  // ── IDLE ──
  if (step === "idle") {
    return (
      <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>// KNOWLEDGE CHECK</div>
          <div style={{ maxWidth: 600 }}>
            <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16 }}>
              Test your <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>knowledge.</em>
            </h2>
            <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              5 questions · instant feedback · earn your <strong style={{ color: "var(--foreground)" }}>{quiz.badge}</strong> badge on 4/5 correct.
            </p>
            {badgeAlready && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", borderRadius: 4, background: "rgba(212,255,58,0.08)", border: "1px solid rgba(212,255,58,0.25)", marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em" }}>✓ BADGE EARNED</span>
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--dim)", letterSpacing: "0.1em" }}>Retake anytime</span>
              </div>
            )}
            <button
              onClick={() => setStep("quiz")}
              style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "14px 28px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, border: "none", cursor: "pointer", letterSpacing: "0.05em" }}
            >
              Start quiz →
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── RESULT ──
  if (step === "result") {
    return (
      <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>// KNOWLEDGE CHECK · COMPLETE</div>
          <div style={{ maxWidth: 560 }}>
            {passed ? (
              <>
                {/* Badge earned */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: quiz.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 16, fontWeight: 700, color: "#0A0A0B" }}>{quiz.badge}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 10, color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>Badge unlocked</div>
                    <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 32, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 4 }}>{quiz.label}</h2>
                    <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dim)" }}>{score}/5 correct</div>
                  </div>
                </div>
                <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                  Solid. Your <strong style={{ color: "var(--foreground)" }}>{quiz.badge}</strong> badge has been saved — visit the <a href="/learn" style={{ color: "var(--accent)", textDecoration: "none" }}>Learn Hub</a> to see all your earned badges.
                </p>
              </>
            ) : (
              <>
                <h2 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 40, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 16 }}>
                  {score}/5 — <em style={{ fontStyle: "italic", color: "var(--dim)", fontWeight: 300 }}>not yet.</em>
                </h2>
                <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                  You need 4 out of 5 to earn the badge. Review the roadmap above and try again.
                </p>
              </>
            )}
            {/* Review */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
              {quiz.questions.map((qq, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", borderRadius: 4, background: answers[i] ? "rgba(212,255,58,0.06)" : "rgba(255,80,80,0.06)", border: `1px solid ${answers[i] ? "rgba(212,255,58,0.2)" : "rgba(255,80,80,0.2)"}` }}>
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: answers[i] ? "var(--accent)" : "#FF6B6B", flexShrink: 0, marginTop: 2 }}>{answers[i] ? "✓" : "✗"}</span>
                  <div>
                    <div style={{ fontSize: 13, color: "var(--foreground)", marginBottom: 2 }}>{qq.q}</div>
                    {!answers[i] && (
                      <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)" }}>
                        Correct: {qq.options[qq.answer]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleRetry}
              style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "12px 24px", borderRadius: 4, background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", cursor: "pointer", letterSpacing: "0.05em" }}
            >
              Retry quiz →
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── QUIZ ──
  const progress = ((current) / quiz.questions.length) * 100;

  return (
    <section style={{ padding: "80px 0 120px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase" }}>// KNOWLEDGE CHECK</div>
          <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dim)" }}>
            Q{current + 1} / {quiz.questions.length}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 2, background: "var(--border)", borderRadius: 1, marginBottom: 40, maxWidth: 600 }}>
          <div style={{ height: 2, background: "var(--accent)", borderRadius: 1, width: `${progress}%`, transition: "width 0.3s ease" }} />
        </div>

        <div style={{ maxWidth: 600 }}>
          <h3 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(20px,3vw,32px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: 32 }}>
            {q.q}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            {q.options.map((opt, idx) => {
              let bg = "var(--surface)";
              let borderColor = "var(--border)";
              let textColor = "var(--foreground)";

              if (selected !== null) {
                if (idx === q.answer) {
                  bg = "rgba(212,255,58,0.1)";
                  borderColor = "rgba(212,255,58,0.5)";
                  textColor = "var(--accent)";
                } else if (idx === selected && selected !== q.answer) {
                  bg = "rgba(255,80,80,0.08)";
                  borderColor = "rgba(255,80,80,0.4)";
                  textColor = "#FF6B6B";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOption(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    borderRadius: 4,
                    background: bg,
                    border: `1px solid ${borderColor}`,
                    color: textColor,
                    fontSize: 14,
                    textAlign: "left",
                    cursor: selected !== null ? "default" : "pointer",
                    transition: "border-color 0.15s, background 0.15s",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: selected !== null ? (idx === q.answer ? "var(--accent)" : idx === selected ? "#FF6B6B" : "var(--dimmer)") : "var(--dimmer)", flexShrink: 0 }}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: selected === q.answer ? "var(--accent)" : "#FF6B6B" }}>
                {selected === q.answer ? "✓ Correct" : `✗ Correct answer: ${q.options[q.answer]}`}
              </div>
              <button
                onClick={handleNext}
                style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "12px 24px", borderRadius: 4, background: "var(--accent)", color: "var(--background)", fontWeight: 600, border: "none", cursor: "pointer", letterSpacing: "0.05em" }}
              >
                {current + 1 < quiz.questions.length ? "Next →" : "See results →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
