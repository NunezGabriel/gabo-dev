export const CONTRIBUTIONS_SOURCE =
  "https://raw.githubusercontent.com/nunezgabriel/nunezgabriel/main/profile-3d-contrib/profile-3d-data.svg";

const palettes = {
  light: {
    background: "#fafafa", foreground: "#1c1c1e", muted: "#656569", accent: "#1f817f",
    levels: ["#e5e8e8", "#badad5", "#76b6ac", "#40988e", "#1f817f"],
  },
  dark: {
    background: "#09090b", foreground: "#f2f2f4", muted: "#aaaab0", accent: "#5bbcaf",
    levels: ["#202728", "#164a47", "#1f817f", "#39a496", "#79ccae"],
  },
};

function shade(hex: string, factor: number) {
  const channels = [1, 3, 5].map(start => Math.round(parseInt(hex.slice(start, start + 2), 16) * factor));
  return `rgb(${channels.join(", ")})`;
}

function variables(palette: typeof palettes.light) {
  return `--bg:${palette.background};--fg:${palette.foreground};--muted:${palette.muted};--accent:${palette.accent};` +
    palette.levels.map((color, i) => `--top-${i}:${color};--left-${i}:${shade(color, .84)};--right-${i}:${shade(color, .7)};`).join("");
}

export function isContributionChart(svg: string) {
  return svg.length < 1_000_000 && /<svg\s[^>]*viewBox="0 0 1280 850"/.test(svg) && svg.includes("cont-top-4");
}

export function themeContributionChart(svg: string) {
  // An SVG loaded as an image follows the embedding page's color-scheme.
  const styles = `
    :root { ${variables(palettes.light)} }
    @media (prefers-color-scheme: dark) { :root { ${variables(palettes.dark)} } }
    * { font-family: Arial, Helvetica, sans-serif; }
    .fill-fg { fill: var(--fg); } .stroke-fg { stroke: var(--fg); }
    .fill-bg { fill: var(--bg); } .stroke-bg { stroke: var(--bg); }
    .fill-strong { fill: var(--accent); }
    .fill-weak { fill: var(--muted); } .stroke-weak { stroke: var(--muted); }
    .radar { stroke-width: 4px; stroke: var(--accent); fill: var(--accent); fill-opacity: .25; }
    ${palettes.light.levels.map((_, i) => `.cont-top-${i} { fill: var(--top-${i}); } .cont-left-${i} { fill: var(--left-${i}); } .cont-right-${i} { fill: var(--right-${i}); }`).join("\n")}
  `;

  return svg
    .replace(/<style>[\s\S]*?<\/style>/, `<style>${styles}</style>`)
    // Final bar positions and heights already exist on the SVG elements.
    // Remove SMIL introductions so the chart also respects reduced-motion users.
    .replace(/<animate(?:Transform)?\b[^>]*(?:\/>|>[\s\S]*?<\/animate(?:Transform)?>)/g, "");
}
