"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

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

      {message ? (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-500"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
