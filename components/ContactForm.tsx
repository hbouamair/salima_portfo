"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500">
            Name
          </span>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-white/10 bg-[#141210] px-4 py-3 text-sm text-stone-100 outline-none ring-amber-500/40 transition placeholder:text-stone-600 focus:border-amber-500/50 focus:ring-2"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-white/10 bg-[#141210] px-4 py-3 text-sm text-stone-100 outline-none ring-amber-500/40 transition placeholder:text-stone-600 focus:border-amber-500/50 focus:ring-2"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500">
          Subject
        </span>
        <input
          name="title"
          className="w-full rounded-xl border border-white/10 bg-[#141210] px-4 py-3 text-sm text-stone-100 outline-none ring-amber-500/40 transition placeholder:text-stone-600 focus:border-amber-500/50 focus:ring-2"
          placeholder="Collaboration, booking…"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-xl border border-white/10 bg-[#141210] px-4 py-3 text-sm text-stone-100 outline-none ring-amber-500/40 transition placeholder:text-stone-600 focus:border-amber-500/50 focus:ring-2"
          placeholder="Tell me about your project"
        />
      </label>
      {status === "sent" ? (
        <p className="text-sm text-emerald-400/90">
          Thanks — your message is ready to send. Connect this form to your
          email provider or API when you deploy.
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 px-8 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-amber-900/20 transition hover:brightness-105 active:scale-[0.98]"
      >
        Send message
      </button>
    </form>
  );
}
