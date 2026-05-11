"use client";

import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { Reveal } from "@/components/motion-section";

const hours = [
  { day: "Mon–Fri", time: "10:00 – 19:00 IST" },
  { day: "Sat", time: "By appointment" },
];

export default function ContactView() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Contact</p>
          <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Tell us what you’re building—we’ll reply with a plan.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Share goals, timelines, and what’s not working. You’ll get a thoughtful response with suggested
            priorities—not a generic pitch deck.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-violet-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</p>
              <a
                href="mailto:hello@svdigital.com"
                className="mt-2 block text-sm font-semibold text-violet-700 hover:text-fuchsia-600"
              >
                hello@svdigital.com
              </a>
            </div>
            <div className="rounded-2xl border border-violet-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</p>
              <a href="tel:+919876543210" className="mt-2 block text-sm font-semibold text-slate-900">
                +91 98765 43210
              </a>
            </div>
            <div className="rounded-2xl border border-violet-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Studio</p>
              <p className="mt-2 text-sm font-medium text-slate-800">Pune, Maharashtra, India · Remote-friendly</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-950 p-6 text-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/90">Availability</p>
            <ul className="mt-4 space-y-3 text-sm">
              {hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-violet-200/90">{row.day}</span>
                  <span className="font-medium text-white">{row.time}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Browse services →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-3xl border border-violet-100/90 bg-white/90 p-6 shadow-xl shadow-violet-500/10 backdrop-blur-md sm:p-8">
            <p className="font-display text-lg font-bold text-slate-900">Project inquiry</p>
            <p className="mt-2 text-sm text-slate-600">We typically respond within one business day.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
