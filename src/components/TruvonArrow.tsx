import Image from "next/image";

export default function TruvonArrow({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/truvon-capital-arrow.png"
      alt=""
      width={56}
      height={52}
      aria-hidden="true"
      className={`h-auto object-contain ${className}`}
    />
  );
}
