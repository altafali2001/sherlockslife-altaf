
import { Button } from "@/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]">
      <div className="flex h-20 w-full items-center justify-between px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Logo */}
        <h1 className="font-[var(--font-anton)] text-3xl uppercase tracking-tight">
          <span className="text-white">FAN</span>
          <span className="text-red-500">FEST</span>
          <span className="ml-2 text-white">2026</span>
        </h1>

        {/* Button */}
        {/* <Button className="rounded-full bg-red-500 px-7 py-6 text-base font-semibold text-white transition hover:bg-red-600">
          Apply Now
        </Button> */}
        <Link
        href="#apply"
         className="rounded-full bg-red-500 px-7 py-3 text-base font-semibold text-white transition hover:bg-red-600"
        >
         Apply Now
        </Link>

      </div>
    </header>
  );
}