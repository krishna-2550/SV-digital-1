"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroMotion, Reveal, StaggerGroup, StaggerItem } from "@/components/motion-section";

const stats = [
  { value: "180%", label: "Average annual lead growth", hint: "Across retained clients" },
  { value: "120+", label: "Brands partnered", hint: "Startups to enterprises" },
  { value: "4.9/5", label: "Client satisfaction", hint: "Post-project surveys" },
];

const capabilities = [
  {
    title: "SEO & organic demand",
    desc: "Technical foundations, topical authority, and content that earns clicks—not fluff.",
  },
  {
    title: "Performance media",
    desc: "Structured testing, clean attribution, and budgets tuned to profitable scale.",
  },
  {
    title: "Social & creative",
    desc: "Scroll-stopping creative with a CTA-first mindset and brand-safe messaging.",
  },
  {
    title: "CRO & lifecycle",
    desc: "Landing experiences, email flows, and CRM touches that lift conversion rates.",
  },
];

const process = [
  { step: "01", title: "Discovery", body: "Goals, audiences, constraints, and data reality—aligned in week one." },
  { step: "02", title: "Blueprint", body: "Channel mix, KPIs, creative angles, and a testing roadmap you can approve." },
  { step: "03", title: "Launch", body: "Clean tracking, structured experiments, and weekly optimization loops." },
  { step: "04", title: "Scale", body: "Double down on winners, trim waste, and expand into the next growth lever." },
];

const faqs = [
  {
    q: "How quickly can SV DIGITAL start a campaign?",
    a: "Most engagements begin within 5–7 business days after strategy alignment and asset handoff.",
  },
  {
    q: "Do you offer monthly reporting?",
    a: "Yes—clear dashboards, narrative context, and prioritized next actions every month.",
  },
  {
    q: "Can we start with one channel only?",
    a: "Absolutely. Many clients begin with paid media or SEO, then expand once the funnel proves out.",
  },
];

const focusAreas = ["SEO", "Paid Search", "Meta Ads", "Content", "Analytics", "CRO"];

export default function HomeContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-violet-100/80 bg-linear-to-br from-[#1a0b2e] via-violet-950 to-slate-950 text-white">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <HeroMotion>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden />
              Growth studio · India & remote
            </p>
            <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Marketing that compounds—not campaigns that fade.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-violet-100/90 sm:text-lg">
              SV DIGITAL blends creative direction, media buying discipline, and analytics hygiene so
              every rupee spent moves you closer to pipeline, revenue, and retention.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-violet-950 shadow-lg shadow-black/20 transition hover:bg-violet-50"
              >
                Book a free strategy call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View outcomes
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {focusAreas.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-violet-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </HeroMotion>

          <HeroMotion delay={0.12}>
            <div className="relative">
              <div className="animate-float-soft absolute -inset-4 rounded-[2rem] bg-linear-to-tr from-fuchsia-500/30 via-violet-500/20 to-cyan-400/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-violet-950/50 ring-1 ring-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                  alt="Team reviewing digital marketing analytics dashboard"
                  width={1400}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/90 to-transparent p-6 pt-20">
                  <p className="font-display text-sm font-semibold text-white">Weekly growth rhythm</p>
                  <p className="mt-1 text-xs text-violet-200/90">
                    Ship tests, read signals, reallocate budget—on repeat.
                  </p>
                </div>
              </div>
            </div>
          </HeroMotion>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <StaggerGroup className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-6 shadow-sm shadow-violet-500/5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md hover:shadow-violet-500/10">
                <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-linear-to-br from-violet-100 to-cyan-100 opacity-60 transition group-hover:opacity-100" />
                <p className="font-display text-3xl font-extrabold text-violet-700">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.hint}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Process */}
      <section className="border-y border-violet-100/80 bg-white/60 py-16 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">How we work</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A clear process. No black-box reporting.
            </h2>
            <p className="mt-4 text-slate-600">
              You get ownership, documentation, and decision-ready insights—so marketing stays aligned
              with finance, product, and sales.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-linear-to-b from-white to-violet-50/40 p-5 transition hover:border-violet-200 hover:shadow-md">
                  <p className="font-mono text-xs font-bold text-violet-500">{phase.step}</p>
                  <p className="font-display mt-2 text-lg font-bold text-slate-900">{phase.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{phase.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + FAQ */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Capabilities</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Full-funnel execution without the agency chaos.
            </h2>
            <p className="mt-4 text-slate-600">
              We build durable systems: consistent creative, disciplined testing, and reporting your
              leadership team can trust.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-violet-200 hover:shadow-md"
                >
                  <p className="font-display text-sm font-bold text-slate-900">{cap.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{cap.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-slate-800 bg-linear-to-br from-slate-950 via-violet-950/80 to-slate-900 p-6 text-slate-200 shadow-xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/90">FAQs</p>
              <h3 className="font-display mt-3 text-xl font-bold text-white">Straight answers</h3>
              <div className="mt-6 space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition open:bg-white/10"
                  >
                    <summary className="cursor-pointer list-none text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-2">
                        {faq.q}
                        <span className="text-cyan-300 transition group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-violet-100/85">{faq.a}</p>
                  </details>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial + CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-linear-to-r from-violet-600 via-fuchsia-600 to-cyan-600 p-[1px] shadow-lg shadow-violet-500/20">
            <div className="rounded-[calc(1.5rem-1px)] bg-white px-6 py-10 sm:px-10 sm:py-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Client voice</p>
                  <blockquote className="font-display mt-4 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                    &ldquo;They replaced noise with numbers. Our cost per qualified lead dropped in the first
                    month—without sacrificing brand tone.&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm font-semibold text-slate-700">— Marketing Director, B2B SaaS</p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl border border-violet-100 bg-violet-50/50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Ready for the same clarity?</p>
                  <p className="text-sm text-slate-600">
                    Send a short brief—we&apos;ll reply with a practical plan, not a generic pitch deck.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Start a conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
