import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-violet-900/30 bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-950/80 via-slate-950 to-cyan-950/40" />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-5">
          <p className="font-display bg-linear-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
            SV DIGITAL
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-violet-100/85">
            A growth marketing studio for brands that want sharper positioning, faster experiments, and reporting
            that connects spend to revenue.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["SEO", "Paid media", "Social", "CRO", "Analytics"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-violet-200/90"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/80">Explore</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-violet-100/90 transition hover:translate-x-0.5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/80">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-violet-100/90">
              <p>
                <a href="mailto:hello@svdigital.com" className="font-medium text-white hover:text-cyan-200">
                  hello@svdigital.com
                </a>
              </p>
              <p>+91 98765 43210</p>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:col-span-3">
          <p className="font-display text-sm font-bold text-white">Weekly growth notes</p>
          <p className="mt-2 text-xs leading-relaxed text-violet-100/80">
            No spam—just practical ideas on creative testing, funnel fixes, and measurement hygiene.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-violet-900 transition hover:bg-violet-100"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center text-xs text-violet-200/70">
        {new Date().getFullYear()} SV DIGITAL. All rights reserved.
      </div>
    </footer>
  );
}
