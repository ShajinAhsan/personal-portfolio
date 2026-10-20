"use client";

import { sendMessage, type ContactState } from "@/app/actions";
import { useActionState } from "react";

const initialState: ContactState = {
  status: "idle",
  message: "",
  values: { name: "", email: "", message: "" },
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendMessage,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="rounded-[28px] border p-6 md:p-8 bg-(--card)"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="mono text-[11px] tracking-[0.2em] uppercase opacity-60">
          Send a message
        </div>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#28CA42]" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className="mono text-[10px] tracking-[0.2em] uppercase opacity-50">
            Your Name
          </span>
          <input
            name="name"
            defaultValue={state.values.name}
            placeholder="Your name"
            required
            maxLength={100}
            autoComplete="name"
            className="h-12 rounded-full border px-5 text-[14px] bg-(--bg) outline-none focus:border-(--text) transition"
            style={{ borderColor: "var(--line)" }}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="mono text-[10px] tracking-[0.2em] uppercase opacity-50">
            Email Address
          </span>
          <input
            name="email"
            type="email"
            defaultValue={state.values.email}
            placeholder="you@domain.com"
            required
            maxLength={200}
            autoComplete="email"
            className="h-12 rounded-full border px-5 text-[14px] bg-(--bg) outline-none focus:border-(--text) transition"
            style={{ borderColor: "var(--line)" }}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 mt-5">
        <span className="mono text-[10px] tracking-[0.2em] uppercase opacity-50">
          Project / Idea
        </span>
        <textarea
          name="message"
          defaultValue={state.values.message}
          placeholder="Tell me about what you want to build — hardware, web, or systems..."
          rows={5}
          required
          maxLength={5000}
          className="rounded-[20px] border p-5 text-[14px] leading-normal bg-(--bg) outline-none focus:border-(--text) transition resize-none"
          style={{ borderColor: "var(--line)" }}
        />
      </label>

      {/* Honeypot — hidden from people, tempting for bots */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="mono text-[11px] opacity-50 max-w-[28ch]">
          Your message goes straight to my inbox, and I reply to the email you
          enter.
        </div>
        <button
          type="submit"
          disabled={pending}
          className="h-11 px-7 rounded-full bg-(--text) text-(--bg) mono text-[12px] tracking-[0.14em] uppercase font-medium hover:opacity-90 disabled:opacity-60 transition flex items-center gap-2"
        >
          {pending
            ? "Sending…"
            : state.status === "success"
              ? "Sent ✓"
              : "Send message →"}
        </button>
      </div>

      <div aria-live="polite">
        {state.status === "success" && (
          <div className="mt-5 rounded-full bg-(--accent-2) text-black px-4 py-2 mono text-[11px] tracking-widest uppercase inline-flex">
            Message sent — I&apos;ll reply to your email soon!
          </div>
        )}
        {state.status === "error" && (
          <div
            role="alert"
            className="mt-5 rounded-[18px] bg-(--bd-red) text-white px-4 py-2 mono text-[11px] tracking-wider inline-flex"
          >
            {state.message}
          </div>
        )}
      </div>
    </form>
  );
}
