import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#111111]">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">

        {/* Logo */}
        <h2
          className="text-5xl font-black uppercase tracking-tight"
          style={{
            fontFamily: "Impact, Haettenschweiler, sans-serif",
          }}
        >
          <span className="text-gray-500">FAN</span>
          <span className="text-red-500">FEST</span>
          <span className="ml-2 text-gray-500">2026</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-8 text-lg text-gray-500">
          August 14–16, 2026 &nbsp; • &nbsp;
          For creators, by creators.
        </p>

        {/* Bottom */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-base text-gray-500">
          <span>© 2026 FanFest. All rights reserved.</span>

          <span>|</span>

          <Link
            href="/privacy"
            className="text-red-500 transition hover:text-red-400"
          >
            Privacy Policy
          </Link>

          <span>|</span>

          <Link
            href="/contact"
            className="text-red-500 transition hover:text-red-400"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </footer>
  );
}