import { readFile } from "node:fs/promises";
import path from "node:path";
import { CONTRIBUTIONS_SOURCE, isContributionChart, themeContributionChart } from "@/lib/github-contributions";

export const runtime = "nodejs";

export async function GET() {
  let svg: string;
  let fallback = false;

  try {
    const response = await fetch(CONTRIBUTIONS_SOURCE, {
      next: { revalidate: 21600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    svg = await response.text();
    if (!isContributionChart(svg)) throw new Error("Unexpected contribution chart format");
  } catch {
    // Keep the real, dated README snapshot visible if GitHub is unavailable.
    svg = await readFile(path.join(process.cwd(), "data/github-contributions.svg"), "utf8");
    fallback = true;
  }

  return new Response(themeContributionChart(svg), {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": fallback
        ? "public, max-age=300, s-maxage=300"
        : "public, max-age=3600, s-maxage=21600, stale-while-revalidate=86400",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; sandbox",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
