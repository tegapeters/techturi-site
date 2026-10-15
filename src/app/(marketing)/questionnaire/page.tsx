import type { Metadata } from "next";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import QuestionnaireForm from "./QuestionnaireForm";

export const metadata: Metadata = {
  title: "Website Questionnaire",
  description: "The full new-client website questionnaire. Tell me about your business, brand, content and features so we can plan your new site.",
};

export default function QuestionnairePage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <section style={{ padding: "100px 0 60px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
              New Client Questionnaire · ~15 minutes
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces),serif", fontSize: "clamp(48px,7vw,96px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
              Let&apos;s plan<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--accent)" }}>your website.</em>
            </h1>
            <p style={{ fontSize: 18, color: "var(--dim)", maxWidth: 560, lineHeight: 1.6 }}>
              Seven short sections on your business, brand, content and features. Answer what you
              can and skip what you don&apos;t know yet. Your progress saves as you go.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0 140px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
            <QuestionnaireForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
