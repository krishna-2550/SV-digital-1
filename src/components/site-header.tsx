"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const portalReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileOverlay = portalReady
    ? createPortal(
      <div
        className={`fixed inset-0 z-[100] overflow-y-auto overscroll-contain md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`relative flex min-h-[100dvh] flex-col bg-white transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0 motion-reduce:translate-y-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-1 bg-linear-to-b from-indigo-600 via-violet-500 to-indigo-400 sm:block" />

          <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
                  Navigate
                </p>
                <p className="mt-2 text-xl font-bold tracking-tight text-slate-900">SV DIGITAL</p>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-slate-500">
                  Performance marketing built for clarity and measurable growth.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                aria-label="Close navigation"
              >
                Close <span aria-hidden>×</span>
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col" aria-label="Primary">
              <ul className="flex flex-col">
                {navItems.map((item, index) => {
                  const isActive =
                    item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
                  const num = String(index + 1).padStart(2, "0");

                  return (
                    <li key={item.href} className="border-b border-slate-100">
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center gap-4 py-5 transition-colors"
                      >
                        <span className="w-9 shrink-0 text-right text-[11px] font-semibold tabular-nums text-slate-400 transition group-hover:text-indigo-600">
                          {num}
                        </span>
                        <span
                          className={`min-w-0 flex-1 text-2xl font-semibold tracking-tight transition-colors sm:text-3xl ${
                            isActive
                              ? "text-indigo-600"
                              : "text-slate-900 group-hover:text-indigo-600"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="shrink-0 text-xl text-indigo-600 opacity-0 transition group-hover:opacity-100" aria-hidden>
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto space-y-4 border-t border-slate-100 pt-8">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Book a strategy call
                <span aria-hidden>→</span>
              </Link>
              <p className="text-center text-xs text-slate-500">
                <span className="text-slate-400">Prefer email?</span>{" "}
                <a
                  href="mailto:hello@svdigital.com"
                  className="font-medium text-slate-700 underline underline-offset-2 hover:text-indigo-600"
                >
                  hello@svdigital.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>,
      document.body,
    )
    : null;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold tracking-wide text-slate-900">
            SV DIGITAL
          </Link>

          <button
            type="button"
            className="relative grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-[transform,width] duration-200 ${
                  isMenuOpen ? "w-5 translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-[transform,width] duration-200 ${
                  isMenuOpen ? "w-5 -translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex md:gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {mobileOverlay}
    </>
  );
}
