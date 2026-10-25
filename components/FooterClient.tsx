"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border px-5 mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:bg-(--bg-2)"
      style={{ borderColor: "var(--line)" }}
    >
      {status === "copied" ? (
        <Check aria-hidden="true" size={14} className="text-(--bd-green)" />
      ) : (
        <Copy aria-hidden="true" size={14} />
      )}
      <span aria-live="polite">
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Unable to copy"
            : "Copy email"}
      </span>
    </button>
  );
}
