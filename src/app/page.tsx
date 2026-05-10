import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "180%", label: "Average annual lead growth" },
  { value: "120+", label: "Brands scaled across niches" },
  { value: "4.9/5", label: "Client satisfaction rating" },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.18em] text-indigo-200">
              Growth. Strategy. Performance.
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              SV DIGITAL drives measurable growth for modern brands.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              We build high-performing digital campaigns that blend storytelling,
              data, and precision targeting to generate leads, revenue, and
              long-term customer value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Book a Free Strategy Call
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
              alt="Team reviewing digital marketing analytics dashboard"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
