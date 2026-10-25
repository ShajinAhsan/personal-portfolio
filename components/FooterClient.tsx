"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`; // clipboard blocked: fall back to opening a mail app
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border px-5 mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:bg-(--bg-2)"
      style={{ borderColor: "var(--line)" }}
    >
      {copied ? (
        <Check aria-hidden="true" size={14} className="text-(--bd-green)" />
      ) : (
        <Copy aria-hidden="true" size={14} />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
