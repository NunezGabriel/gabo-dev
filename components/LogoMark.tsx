import Image from "next/image";

// The artwork is pre-trimmed to a tight square, so it renders as-is.
export default function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <Image
      src="/brand/gabriel-logo.png"
      alt=""
      aria-hidden="true"
      width={255}
      height={255}
      sizes={`${size}px`}
      className="inline-block shrink-0 align-middle"
      style={{ width: size, height: size }}
    />
  );
}
