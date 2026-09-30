import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#ececea",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#4ade80" }}>
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 600 }}>
            {site.fullName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#8c8c88",
              marginTop: 24,
              maxWidth: 900,
            }}
          >
            {site.location}
          </div>
        </div>
      </div>
    ),
    size
  );
}
