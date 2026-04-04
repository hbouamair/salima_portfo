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
      className="glass-card space-y-5 p-7 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="label text-text-muted mb-2 block">Name</span>
          <input
            name="name"
            required
            className="input-field"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="label text-text-muted mb-2 block">Email</span>
          <input
            type="email"
            name="email"
            required
            className="input-field"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="label text-text-muted mb-2 block">Subject</span>
        <input
          name="title"
          className="input-field"
          placeholder="Collaboration, booking..."
        />
      </label>
      <label className="block">
        <span className="label text-text-muted mb-2 block">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="input-field resize-y"
          placeholder="Tell me about your project"
        />
      </label>

      {status === "sent" && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm text-emerald-400">
            Message sent! I&apos;ll get back to you soon.
          </p>
        </div>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </form>
  );
}
