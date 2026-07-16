import Image from "next/image";
import logoMeta from "@/lib/logo-meta.json";

type LogoProps = {
  variant?: "dark" | "light";
  /** Rendered height in px; width derives from the wordmark aspect ratio. */
  height?: number;
  priority?: boolean;
  className?: string;
};

const ASPECT = logoMeta.width / logoMeta.height;

/**
 * Truvon Capital wordmark. `dark` = green/gold on light surfaces,
 * `light` = offwhite/gold on dark surfaces (hero, footer).
 */
export default function Logo({
  variant = "dark",
  height = 30,
  priority = false,
  className = "",
}: LogoProps) {
  const width = Math.round(height * ASPECT);
  return (
    <Image
      src={variant === "light" ? "/logo-light.png" : "/logo-dark.png"}
      alt="Truvon Capital"
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={className}
    />
  );
}
