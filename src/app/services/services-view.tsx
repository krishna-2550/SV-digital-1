"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-section";

const services = [
  {
    title: "Search Engine Optimization",
    desc: "Technical SEO, topical clusters, and authority signals that compound organic pipeline over quarters—not weeks of busywork.",
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    title: "Performance Marketing",
    desc: "Structured experiments across Google, Meta, and YouTube with clean measurement and budget guardrails.",
    accent: "from-cyan-500/20 to-violet-500/10",
  },
  {
    title: "Social Media Marketing",
    desc: "Brand voice, content systems, creator partnerships, and paid social that build familiarity before the ask.",
    accent: "from-fuchsia-500/20 to-cyan-500/10",
  },
  {
    title: "Content & Creative",
    desc: "Landing pages, hooks, and ad sets engineered for clarity, conversion, and consistent testing velocity.",
    accent: "from-violet-500/15 to-slate-500/10",
  },
  {
    title: "Marketing Automation",
    desc: "Lifecycle journeys, CRM hygiene, and nurture flows that reduce drop-off between intent and purchase.",
    accent: "from-emerald-500/15 to-cyan-500/10",
  },
  {
    title: "Analytics & Reporting",
    desc: "Dashboards your team can act on—definitions, QA, and narratives that connect spend to outcomes.",
    accent: "from-amber-500/15 to-violet-500/10",
  },
];

export default function ServicesView() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-violet-100/80">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-50/90 via-white to-cyan-50/50" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Services</p>
            <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Growth systems built for speed and accountability.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              SV DIGITAL aligns strategy, creative, media, and analytics so your channels reinforce each
              other—instead of competing for credit.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-violet-500" aria-hidden>
                  ✓
                </span>
                Clear KPIs, weekly rituals, and documented learnings
              </li>
              <li className="flex gap-2">
                <span className="text-violet-500" aria-hidden>
                  ✓
                </span>
                Creative + media collaboration under one roof
              </li>
              <li className="flex gap-2">
                <span className="text-violet-500" aria-hidden>
                  ✓
                </span>
                Reporting your CFO can follow
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="overflow-hidden rounded-[1.75rem] border border-violet-100 shadow-xl shadow-violet-500/10 ring-1 ring-violet-100/60">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                alt="Marketing team discussing strategy in a boardroom"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10">
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br opacity-0 transition group-hover:opacity-100 ${service.accent}`}
                />
                <div className="relative">
                  <h2 className="font-display text-lg font-bold text-slate-900">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.desc}</p>
                  <p className="mt-5 text-xs font-semibold text-violet-600 opacity-0 transition group-hover:opacity-100">
                    Learn more on call →
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-t border-violet-100/80 bg-linear-to-r from-violet-600 via-fuchsia-600 to-cyan-600 py-14 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <Reveal className="max-w-xl">
            <p className="font-display text-2xl font-bold sm:text-3xl">Want a roadmap tailored to your funnel?</p>
            <p className="mt-2 text-sm text-violet-100/90">
              Share your goals—we&apos;ll propose priorities, timelines, and what success should look like in 30 / 60 / 90 days.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-violet-900 shadow-lg transition hover:bg-violet-50"
            >
              Talk to an expert
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
