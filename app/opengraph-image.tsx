import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "NimbusAir preview image";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          color: "#F4F8FF",
          background:
            "radial-gradient(circle at 20% 18%, rgba(78, 161, 255, 0.42), transparent 26%), radial-gradient(circle at 82% 16%, rgba(240, 193, 94, 0.22), transparent 22%), linear-gradient(145deg, #08111f 0%, #10274a 46%, #07111f 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(145deg, rgba(78,161,255,0.38), rgba(240,193,94,0.28))",
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            <span style={{ fontSize: 34, fontWeight: 800 }}>N</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, letterSpacing: "0.22em", textTransform: "uppercase" }}>NimbusAir</div>
            <div style={{ color: "rgba(244,248,255,0.72)", fontSize: 18 }}>Premium flight booking UI concept</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760 }}>
          <div
            style={{
              width: "fit-content",
              padding: "10px 16px",
              borderRadius: 999,
              border: "1px solid rgba(164,192,255,0.2)",
              color: "rgba(244,248,255,0.82)",
              fontSize: 18,
            }}
          >
            Created by anointedthedeveloper
          </div>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.06em" }}>
            A polished airline experience built for portfolios.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.35, color: "rgba(244,248,255,0.78)" }}>
            Search flights, manage bookings, track status, and present a clean product story with a flight-themed
            UI.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {[
            ["Search", "Booking flow", "Dashboard"],
            ["Admin tools", "SEO ready", "OG image"],
            ["Powered by anobyte", "anobyte.online", "Flight themes"],
          ].map((row, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: 12,
                padding: "14px 18px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(6, 14, 26, 0.28)",
              }}
            >
              {row.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.06)",
                    fontSize: 16,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
