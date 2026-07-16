import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow, GoldRule } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-primary text-white">
      <div className="container-editorial flex flex-col items-start py-32">
        <Eyebrow>Error 404</Eyebrow>
        <GoldRule className="mt-5" />
        <h1 className="mt-7 max-w-[16ch] font-serif text-h1 font-medium leading-tight">
          The page you are looking for could not be found.
        </h1>
        <Link
          href="/"
          className="link-underline mt-8 font-sans text-sm font-semibold uppercase tracking-wide text-gold"
        >
          Return home &rarr;
        </Link>
      </div>
    </section>
  );
}
