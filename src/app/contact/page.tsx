import type { Metadata } from "next";

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
        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-indigo-200 transition focus:ring-2"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-indigo-200 transition focus:ring-2"
              placeholder="you@company.com"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="service">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-indigo-200 transition focus:ring-2"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="seo">SEO</option>
              <option value="paid-media">Paid Media</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="content">Content and Creative</option>
              <option value="automation">Marketing Automation</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
              Project Brief
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-indigo-200 transition focus:ring-2"
              placeholder="Tell us about your goals and timeline..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Send Inquiry
          </button>
        </form>
      </section>
    </div>
  );
}
