"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-section";

const studies = [
  {
    brand: "UrbanLeaf Fashion",
    tag: "D2C · Paid Social",
    outcome: "3.4× ROAS in 90 days",
    detail:
      "Rebuilt the paid social funnel, launched structured creative tests, and cut CPA by 42% while scaling spend.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    brand: "NovaBite Foods",
    tag: "B2B · SEO + CRO",
    outcome: "210% more qualified leads",
    detail:
      "Merged technical SEO with conversion-focused landing pages and clearer offer positioning for inbound sales.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    brand: "TrueFit Wellness",
    tag: "Brand · Content",
    outcome: "1.8M organic impressions",
    detail:
      "Built topical authority with content clusters and creator-led social proof to lift trust and discovery.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function CaseStudiesView() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Case studies</p>
        <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Proof from campaigns we have shipped end-to-end.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
          Outcomes vary by category and budget—but the through-line is disciplined execution, clean measurement,
          and creative that supports conversion.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-8 lg:grid-cols-3">
        {studies.map((study) => (
          <StaggerItem key={study.brand}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10">
              <div className="relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={`${study.brand} marketing case study preview`}
                  width={1400}
                  height={900}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700 shadow-sm backdrop-blur">
                  {study.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">{study.brand}</p>
                <h2 className="font-display mt-2 text-2xl font-bold text-slate-900">{study.outcome}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{study.detail}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex text-sm font-semibold text-violet-700 transition hover:text-fuchsia-600"
                >
                  Discuss a similar build →
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
