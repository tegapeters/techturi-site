"use client";
import { useState } from "react";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  business: string;
  phone: string;
  projectType: string;
  subscriptionTier: string;
  currentSite: string;
  budget: string;
  timeline: string;
  description: string;
  source: string;
};

const EMPTY: FormData = {
  name: "", email: "", business: "", phone: "",
  projectType: "", subscriptionTier: "", currentSite: "",
  budget: "", timeline: "", description: "", source: "",
};

export default function IntakePage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Business: ${form.business}`,
      `Phone: ${form.phone}`,
      `Project type: ${form.projectType}${form.subscriptionTier ? ` — ${form.subscriptionTier}` : ""}`,
      `Current site: ${form.currentSite || "None"}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      `Description:\n${form.description}`,
      `Heard via: ${form.source}`,
    ];

    const body = encodeURIComponent(lines.join("\n\n"));
    const subject = encodeURIComponent(`Project Intake — ${form.business || form.name}`);
    window.location.href = `mailto:techturi.org@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 4,
    padding: "12px 16px",
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: 14,
    color: "var(--foreground)",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-jetbrains),monospace",
    fontSize: 11,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--dimmer)",
    marginBottom: 8,
    display: "block",
  };

  const fieldStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 0 };

  if (submitted) {
    return (
      <>
        <Nav />
        <main style={{ position: "relative", zIndex: 1, minHeight: "70vh", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 32, color: "var(--accent)", marginBottom: 32 }}>[ ✓ ]</div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: 48, fontWeight: 400, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Form <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>sent.</em>
            </h1>
            <p style={{ color: "var(--dim)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
              Your default email client should have opened with everything pre-filled. Hit send if it didn&apos;t go automatically. I&apos;ll get back to you within 48 hours.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "12px 24px", background: "var(--accent)", color: "var(--background)", borderRadius: 4, fontWeight: 600, textDecoration: "none" }}>
                Book a call too →
              </Link>
              <Link href="/" style={{ display: "inline-block", fontFamily: "var(--font-jetbrains),monospace", fontSize: 13, padding: "12px 24px", background: "transparent", color: "var(--foreground)", border: "1px solid var(--dimmer)", borderRadius: 4, textDecoration: "none" }}>
                Back to home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              Project Intake · Takes ~3 minutes
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Tell me about<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>your project.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 520, lineHeight: 1.6 }}>
              Fill this out and I&apos;ll come to our call (or reply to your email) already knowing your situation. No wasted time on both ends.
            </p>
          </div>
        </section>

        {/* ── FORM ── */}
        <section style={{ padding: "0 0 140px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 32px 0" }}>
            <form onSubmit={handleSubmit}>

              {/* Section 1 — About you */}
              <div style={{ marginBottom: 60 }}>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                  01 / About you
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-2col">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Full name *</label>
                    <input required style={inputStyle} value={form.name} onChange={set("name")} placeholder="Jane Smith" className="form-input" />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Email *</label>
                    <input required type="email" style={inputStyle} value={form.email} onChange={set("email")} placeholder="jane@yourbiz.com" className="form-input" />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Business name</label>
                    <input style={inputStyle} value={form.business} onChange={set("business")} placeholder="Acme Co." className="form-input" />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Phone (optional)</label>
                    <input type="tel" style={inputStyle} value={form.phone} onChange={set("phone")} placeholder="+1 (555) 000-0000" className="form-input" />
                  </div>
                </div>
              </div>

              {/* Section 2 — The project */}
              <div style={{ marginBottom: 60 }}>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                  02 / The project
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>What are you looking for? *</label>
                    <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.projectType} onChange={set("projectType")}>
                      <option value="">Select one…</option>
                      <option value="wix-subscription">Wix Subscription (yearly)</option>
                      <option value="custom-build">Custom Build (HTML / React / Next.js)</option>
                      <option value="ios-app">iOS App</option>
                      <option value="bundle">Website + iOS App bundle</option>
                      <option value="redesign">Existing site redesign / fixes</option>
                      <option value="consulting">Consulting / advice only</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {form.projectType === "wix-subscription" && (
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Which tier are you considering?</label>
                      <select style={{ ...inputStyle, cursor: "pointer" }} value={form.subscriptionTier} onChange={set("subscriptionTier")}>
                        <option value="">Not sure yet</option>
                        <option value="starter">Starter — $1,500/yr</option>
                        <option value="growth">Growth — $2,500/2yr</option>
                        <option value="pro">Pro — $3,400/3yr</option>
                      </select>
                    </div>
                  )}

                  <div style={fieldStyle}>
                    <label style={labelStyle}>Current website (if any)</label>
                    <input style={inputStyle} value={form.currentSite} onChange={set("currentSite")} placeholder="https://yourdomain.com or none" className="form-input" />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-2col">
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Budget range *</label>
                      <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.budget} onChange={set("budget")}>
                        <option value="">Select range…</option>
                        <option value="under-1500">Under $1,500</option>
                        <option value="1500-3500">$1,500 – $3,500</option>
                        <option value="3500-6000">$3,500 – $6,000</option>
                        <option value="6000-10000">$6,000 – $10,000</option>
                        <option value="10000+">$10,000+</option>
                        <option value="flexible">Flexible / not sure</option>
                      </select>
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Ideal timeline *</label>
                      <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.timeline} onChange={set("timeline")}>
                        <option value="">Select timeline…</option>
                        <option value="asap">ASAP (within 2 weeks)</option>
                        <option value="1month">Within 1 month</option>
                        <option value="1-3months">1 – 3 months</option>
                        <option value="flexible">No rush — flexible</option>
                      </select>
                    </div>
                  </div>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>Project description *</label>
                    <textarea
                      required
                      rows={6}
                      style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                      value={form.description}
                      onChange={set("description")}
                      placeholder="Describe what you're building, who it's for, any specific features you need, and anything else I should know…"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3 — Last thing */}
              <div style={{ marginBottom: 60 }}>
                <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 11, color: "var(--dimmer)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                  03 / Last thing
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>How did you hear about Techturi?</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }} value={form.source} onChange={set("source")}>
                    <option value="">Select…</option>
                    <option value="google">Google search</option>
                    <option value="referral">Word of mouth / referral</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="github">GitHub</option>
                    <option value="social">Social media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <button
                  type="submit"
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: 13,
                    padding: "16px 36px",
                    background: "var(--accent)",
                    color: "var(--background)",
                    border: "none",
                    borderRadius: 4,
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.05em",
                  }}
                >
                  Send intake →
                </button>
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--dimmer)" }}>
                  Opens your email app with everything pre-filled.
                </span>
              </div>

            </form>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
        .form-input:focus { border-color: var(--dimmer) !important; }
        select option { background: var(--surface); color: var(--foreground); }
      `}</style>
    </>
  );
}
