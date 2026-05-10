import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-wide text-white">SV DIGITAL</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
            Full-service digital marketing partner helping brands scale with
            measurable growth, creative campaigns, and performance-led strategy.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/case-studies" className="hover:text-white">
              Case Studies
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Contact
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            hello@svdigital.com
            <br />
            +91 98765 43210
            <br />
            Pune, Maharashtra, India
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        {new Date().getFullYear()} SV DIGITAL. All rights reserved.
      </div>
    </footer>
  );
}
