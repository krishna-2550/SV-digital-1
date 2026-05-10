import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the team and mission behind SV DIGITAL.",
};

const values = [
  "Performance over vanity metrics",
  "Creative built with customer insight",
  "Fast experimentation and optimization",
  "Transparent communication and reporting",
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">
            About SV DIGITAL
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            We are your growth team, not just another agency.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            SV DIGITAL was founded to help businesses scale with modern marketing
            systems that are creative, data-driven, and conversion-focused. We
            partner with startups, D2C brands, and established enterprises to
            build predictable growth engines.
          </p>
          <ul className="mt-6 space-y-3">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 block h-2.5 w-2.5 rounded-full bg-indigo-600" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
            alt="SV DIGITAL team collaborating at the office"
            width={1400}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
