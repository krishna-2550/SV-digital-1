"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-section";

const values = [
  {
    title: "Performance over vanity",
    body: "We optimize for pipeline and profit—not impressions that look good in a slide deck.",
  },
  {
    title: "Creative with evidence",
    body: "Ideas win when they are tested quickly and measured against conversion outcomes.",
  },
  {
    title: "Transparent ops",
    body: "Clear owners, timelines, and reporting so stakeholders always know what’s shipping next.",
  },
  {
    title: "Velocity without chaos",
    body: "Fast experiments, disciplined documentation, and clean tracking as a default.",
  },
];

const milestones = [
  { year: "2019", text: "SV DIGITAL founded with a focus on measurable acquisition." },
  { year: "2021", text: "Expanded into lifecycle, CRO, and analytics implementation." },
  { year: "2024", text: "Serving brands across India and global remote partnerships." },
];

export default function AboutView() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">About SV DIGITAL</p>
          <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            A growth partner that behaves like an in-house team.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            We help ambitious brands build predictable acquisition systems—combining sharp creative,
            disciplined media, and analytics hygiene that holds up under scrutiny.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Meet the team
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-200 hover:bg-violet-50/60"
            >
              Read outcomes
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[1.75rem] border border-violet-100 shadow-xl shadow-violet-500/10 ring-1 ring-violet-100/50">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
              alt="SV DIGITAL team collaborating at the office"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-slate-900">Principles we operate on</h2>
          <p className="mt-3 text-sm text-slate-600">
            Culture drives output. These principles keep our work sharp as we scale alongside you.
          </p>
          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-violet-200 hover:shadow-md">
                  <p className="font-display text-sm font-bold text-slate-900">{v.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-3xl border border-slate-800 bg-linear-to-br from-slate-950 via-violet-950/70 to-slate-900 p-8 text-slate-200 shadow-xl">
            <h2 className="font-display text-xl font-bold text-white">Milestones</h2>
            <ol className="mt-6 space-y-6">
              {milestones.map((m) => (
                <li key={m.year} className="flex gap-4">
                  <span className="font-mono text-sm font-bold text-cyan-300">{m.year}</span>
                  <p className="text-sm leading-relaxed text-violet-100/90">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
