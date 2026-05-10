import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SV DIGITAL for a free growth strategy consultation.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Let&apos;s grow your business online.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Share your goals and current marketing challenges. Our team will respond
          with a practical action plan tailored to your business.
        </p>

        <div className="mt-8 space-y-2 text-sm text-slate-700">
          <p>
            <span className="font-semibold text-slate-900">Email:</span> hello@svdigital.com
          </p>
          <p>
            <span className="font-semibold text-slate-900">Phone:</span> +91 98765 43210
          </p>
          <p>
            <span className="font-semibold text-slate-900">Location:</span> Pune, Maharashtra
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <ContactForm />
      </section>
    </div>
  );
}
