import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Techturi — Learn. Build. Launch.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Grid overlay lines */}
        <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.04 }}>
          {[...Array(15)].map((_, i) => (
            <div key={i} style={{ flex: 1, borderRight: "1px solid #F5F4EE" }} />
          ))}
        </div>

        {/* Top — logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <span style={{ color: "#D4FF3A", fontSize: 28, fontFamily: "monospace", fontWeight: 500 }}>[</span>
          <span style={{ color: "#F5F4EE", fontSize: 28, fontFamily: "monospace", fontWeight: 500 }}>techturi</span>
          <span style={{ color: "#D4FF3A", fontSize: 28, fontFamily: "monospace", fontWeight: 500 }}>.]</span>
        </div>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
            <div style={{ width: 40, height: 2, background: "#D4FF3A" }} />
            <span style={{ color: "#D4FF3A", fontSize: 13, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Learn. Build. Launch.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#F5F4EE", fontSize: 88, fontFamily: "serif", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
              Break into tech.
            </span>
            <span style={{ color: "#D4FF3A", fontSize: 88, fontFamily: "serif", fontWeight: 300, fontStyle: "italic", lineHeight: 0.95, letterSpacing: "-0.04em" }}>
              Build what lasts.
            </span>
          </div>
        </div>

        {/* Bottom — tagline + URL */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ color: "#8B8B85", fontSize: 16, fontFamily: "monospace", letterSpacing: "0.05em" }}>
            Free cert roadmaps · Custom websites · Houston, TX
          </span>
          <span style={{ color: "#4A4A45", fontSize: 16, fontFamily: "monospace", letterSpacing: "0.1em" }}>
            techturi.org
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
