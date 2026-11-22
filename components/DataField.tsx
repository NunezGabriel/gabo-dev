"use client";

import { useState } from "react";
import LetterGlitch from "./LetterGlitch";
import { useLanguage } from "./LanguageProvider";

// Site background: React Bits LetterGlitch with the settings tuned on
// reactbits.dev (speed 0.1, baseOpacity 0.05, density 0.47, fontSize 12,
// interactive off). glitchAmount lowered from the tuned 0.46 to 0.20 so
// fewer letters flash while reading (rate scales with glitchAmount^1.6,
// so this is ~26% of the original). Every other prop keeps the demo default.
// Colors map the demo's white/green onto the site's ink/teal.
const INK = "#f2f2f4";
const GLITCH_COLORS = [INK, "#79ccae"];
const SPEED = 0.1;

export default function DataField() {
  const [paused, setPaused] = useState(false);
  const { lang } = useLanguage();

  return <>
    <LetterGlitch
      className="data-field"
      aria-hidden="true"
      baseColor={INK}
      glitchColors={GLITCH_COLORS}
      // speed 0 stops new glitches; lit letters fade out, then rendering idles.
      speed={paused ? 0 : SPEED}
      baseOpacity={0.05}
      glitchAmount={0.20}
      density={0.47}
      fontSize={12}
      interactive={false}
    />
    <button className="field-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={lang === "es" ? "Pausar animación del fondo" : "Pause background animation"}>
      <span aria-hidden="true">{paused ? "Ⅱ" : "✳"}</span> {lang === "es" ? "FONDO" : "FIELD"} / {paused ? "OFF" : "ON"}
    </button>
  </>;
}
