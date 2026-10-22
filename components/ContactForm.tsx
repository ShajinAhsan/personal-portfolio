"use client";

import { sendMessage, type ContactState } from "@/app/actions";
import { ArrowRight } from "lucide-react";
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
      aria-labelledby="contact-form-title"
      className="rounded-[28px] border p-6 md:p-8 bg-(--card)"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="flex items-center justify-between mb-8">
        <h3 id="contact-form-title" className="mono text-[11px] tracking-[0.2em] uppercase text-(--text-2)">
          Send a message
        </h3>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#28CA42]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label htmlFor="contact-name" className="flex flex-col gap-2">
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            Your Name
          </span>
          <input
            id="contact-name"
            name="name"
            defaultValue={state.values.name}
            placeholder="Your name"
            required
            maxLength={100}
            autoComplete="name"
            aria-invalid={state.status === "error" ? true : undefined}
            className="h-12 rounded-full border px-5 text-[14px] bg-(--bg) outline-none focus:border-(--text) transition w-full min-w-0"
            style={{ borderColor: "var(--control-line)" }}
          />
        </label>
        <label htmlFor="contact-email" className="flex flex-col gap-2">
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            Email Address
          </span>
          <input
            id="contact-email"
            name="email"
            type="email"
            defaultValue={state.values.email}
            placeholder="you@domain.com"
            required
            maxLength={200}
            autoComplete="email"
            aria-invalid={state.status === "error" ? true : undefined}
            className="h-12 rounded-full border px-5 text-[14px] bg-(--bg) outline-none focus:border-(--text) transition w-full min-w-0"
            style={{ borderColor: "var(--control-line)" }}
          />
        </label>
      </div>

      <label htmlFor="contact-message" className="flex flex-col gap-2 mt-5">
        <span className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
          Project / Idea
        </span>
        <textarea
          id="contact-message"
          name="message"
          defaultValue={state.values.message}
          placeholder="Tell me about what you want to build — hardware, web, or systems..."
          rows={5}
          required
          maxLength={5000}
          aria-invalid={state.status === "error" ? true : undefined}
          className="rounded-[20px] border p-5 text-[14px] leading-normal bg-(--bg) outline-none focus:border-(--text) transition resize-none"
          style={{ borderColor: "var(--control-line)" }}
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
        <div className="mono text-[11px] text-(--text-2) max-w-[28ch]">
          Your message goes straight to my inbox, and I reply to the email you
          sent me :)
        </div>
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className="h-11 px-7 rounded-full bg-(--text) text-(--bg) mono text-[12px] tracking-[0.14em] uppercase font-medium hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition flex items-center gap-2"
        >
          {pending
            ? "Sending…"
            : state.status === "success"
              ? "Sent ✓"
              : (
                <>
                  Send message
                  <ArrowRight aria-hidden="true" size={15} />
                </>
              )}
        </button>
      </div>

      <div aria-live="polite">
        {state.status === "success" && (
          <div
            role="status"
            className="mt-5 rounded-full bg-(--accent-2) text-black px-4 py-2 mono text-[11px] tracking-widest uppercase inline-flex"
          >
            Message sent — I&apos;ll reply to your email soon!
          </div>
        )}
        {state.status === "error" && (
          <div
            role="alert"
            className="mt-5 rounded-[18px] bg-(--bd-red) text-black px-4 py-2 mono text-[11px] tracking-wider inline-flex"
          >
            {state.message}
          </div>
        )}
      </div>
    </form>
  );
}
