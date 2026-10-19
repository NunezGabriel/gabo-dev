import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const artwork = await readFile(path.join(process.cwd(), "public/brand/gabriel-mark.png"));

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
      {/* ImageResponse embeds the original artwork directly in the tab icon. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/png;base64,${artwork.toString("base64")}`}
        alt=""
        width={82.74}
        height={82.74}
        style={{ position: "absolute", left: -10.72, top: -9.43 }}
      />
    </div>,
    size,
  );
}
