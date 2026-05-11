"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-200";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const responseBody = (await response.json()) as { error?: string };
        throw new Error(responseBody.error ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thanks! Your inquiry was sent successfully.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit your inquiry.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="name">
          Full name
        </label>
        <input id="name" name="name" type="text" className={inputClass} placeholder="Your name" required />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="email">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={inputClass}
          placeholder="you@company.com"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="service">
          Primary focus
        </label>
        <select id="service" name="service" className={inputClass} required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="seo">SEO</option>
          <option value="paid-media">Paid media</option>
          <option value="social-media">Social media</option>
          <option value="content">Content & creative</option>
          <option value="automation">Marketing automation</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="message">
          Project brief
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Goals, timeline, budget range, and what’s broken today…"
          required
        />
      </div>

      {message ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm ${
            status === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
          }`}
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-2xl bg-linear-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition hover:from-violet-500 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
