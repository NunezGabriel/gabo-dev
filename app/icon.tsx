import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const artwork = await readFile(path.join(process.cwd(), "public/brand/gabriel-logo.png"));

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      {/* The artwork is pre-trimmed to a tight square, so it fills the icon. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/png;base64,${artwork.toString("base64")}`}
        alt=""
        width={64}
        height={64}
      />
    </div>,
    size,
  );
}
