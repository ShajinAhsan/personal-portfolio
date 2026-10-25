"use client";

import StatusScreen from "@/components/StatusScreen";
import Link from "next/link";
import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[global error]", error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="theme-transition antialiased">
        <StatusScreen
          code="500"
          codeClassName="text-[clamp(7rem,22vw,18rem)]"
          eyebrow="System response / 500"
          title="The page hit a rough edge."
          description="Something went wrong before the page could render. Try again, or return home."
          actions={
            <>
              <button
                type="button"
                onClick={reset}
                className="mono inline-flex h-11 items-center rounded-full bg-(--text) px-6 text-[11px] font-medium uppercase tracking-[0.14em] text-(--bg) transition hover:opacity-85 cursor-pointer"
              >
                Try again
              </button>
              <Link
                href="/"
                className="mono inline-flex h-11 items-center rounded-full border px-6 text-[11px] font-medium uppercase tracking-[0.14em] transition hover:bg-(--bg-2)"
                style={{ borderColor: "var(--control-line)" }}
              >
                Return home
              </Link>
            </>
          }
          command="inspect failure"
          errorLabel="render failed"
          rows={[
            { label: "status", value: "recoverable" },
            { label: "action", value: "retry or return home" },
          ]}
          signal="signal interrupted / retrying"
          dotColor="var(--bd-red)"
        />
      </body>
    </html>
  );
}
