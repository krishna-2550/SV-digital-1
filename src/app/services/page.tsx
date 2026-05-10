import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the digital marketing services offered by SV DIGITAL.",
};

const services = [
  {
    title: "Search Engine Optimization",
    desc: "Technical SEO, content clusters, and authority building that grows your organic rankings and pipeline.",
  },
  {
    title: "Performance Marketing",
    desc: "ROI-focused paid campaigns across Google, Meta, and YouTube with full-funnel optimization.",
  },
  {
    title: "Social Media Marketing",
    desc: "Brand-aligned content strategy, creator collaborations, and paid social that builds demand.",
  },
  {
    title: "Content & Creative",
    desc: "Landing pages, ad creatives, and compelling campaign assets designed for conversion and recall.",
  },
  {
    title: "Marketing Automation",
    desc: "Email flows, lead nurturing, and CRM automation that moves prospects from interest to purchase.",
  },
  {
    title: "Analytics & Reporting",
    desc: "Unified dashboards and actionable insights so every decision is backed by clean data.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            End-to-end growth services built for ambitious businesses.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            SV DIGITAL combines strategy, creative, media, and analytics in one
            team so your marketing works as a connected growth system.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Marketing team discussing strategy in a boardroom"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-2xl font-bold text-slate-900">
              Need a tailored plan for your business?
            </p>
            <p className="mt-2 text-slate-600">
              Get a custom growth roadmap in a free 30-minute strategy session.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
