import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Discover growth outcomes delivered by SV DIGITAL campaigns.",
};

const studies = [
  {
    brand: "UrbanLeaf Fashion",
    outcome: "3.4x ROAS in 90 days",
    detail:
      "Rebuilt paid social funnel, launched creative testing sprints, and reduced CPA by 42%.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    brand: "NovaBite Foods",
    outcome: "210% increase in qualified leads",
    detail:
      "Combined SEO + conversion-focused landing pages to drive consistent inbound for B2B sales.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    brand: "TrueFit Wellness",
    outcome: "1.8M organic impressions in 6 months",
    detail:
      "Built content clusters and influencer-led social strategy to improve reach and trust.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">
          Case Studies
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Real campaign outcomes for real businesses.
        </h1>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {studies.map((study) => (
          <article
            key={study.brand}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <Image
              src={study.image}
              alt={`${study.brand} marketing case study preview`}
              width={1400}
              height={900}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm font-semibold text-indigo-700">{study.brand}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">{study.outcome}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{study.detail}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
