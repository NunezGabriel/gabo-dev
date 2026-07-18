// Angular GN monogram — an open diamond threaded by a flagged diagonal.
// Stroke-based so it inherits the current text color in both themes.
export default function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <g
        stroke="currentColor"
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 24 46 L 44 26 L 64 46 L 44 66 L 32 54" />
        <path d="M 58 13 L 77 13 L 34 86 L 23 72" />
      </g>
    </svg>
  );
}
