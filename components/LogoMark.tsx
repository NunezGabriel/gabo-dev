import Image from "next/image";

export default function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden align-middle"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/brand/gabriel-mark.png"
        alt=""
        width={1254}
        height={1254}
        sizes={`${Math.ceil(size * 1.3)}px`}
        className="absolute"
        // Frame the supplied artwork without its transparent outer margins.
        style={{ width: "129.28%", height: "129.28%", maxWidth: "none", left: "-16.75%", top: "-14.74%" }}
      />
    </span>
  );
}
