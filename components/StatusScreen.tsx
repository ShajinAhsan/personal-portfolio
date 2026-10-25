import type { CSSProperties, ReactNode } from "react";

type DiagnosticRow = {
  label: string;
  value: string;
};

type StatusScreenProps = {
  code: string;
  codeClassName: string;
  eyebrow: string;
  title: string;
  description: string;
  actions: ReactNode;
  command: string;
  errorLabel: string;
  rows: DiagnosticRow[];
  signal: string;
  dotColor: string;
  showGlow?: boolean;
  footer?: ReactNode;
};

export default function StatusScreen({
  code,
  codeClassName,
  eyebrow,
  title,
  description,
  actions,
  command,
  errorLabel,
  rows,
  signal,
  dotColor,
  showGlow = false,
  footer,
}: StatusScreenProps) {
  return (
    <main
      aria-labelledby="status-title"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden px-6 py-12 md:px-10 lg:px-16"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 82%)",
        }}
      />

      {showGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full opacity-25 blur-3xl dark:opacity-15"
          style={{ background: "var(--accent-2)" }}
        />
      )}

      <div className="mx-auto grid w-full max-w-330 items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <section>
          <div className="mono mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-(--text-2)">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-(--bd-red) animate-pulse"
            />
            {eyebrow}
          </div>

          <h1
            id="status-title"
            className={`font-black leading-[0.72] tracking-[-0.09em] ${codeClassName}`}
          >
            {code}
          </h1>

          <div className="mt-10 max-w-xl">
            <p className="serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.88]">
              {title}
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-(--text-2)">
              {description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {actions}
          </div>
        </section>

        <section
          aria-label="Route diagnostics"
          className="relative overflow-hidden rounded-[28px] border bg-(--card) p-5 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.18)] md:p-7"
          style={{ borderColor: "var(--line)" }}
        >
          <div
            className="flex items-center justify-between border-b pb-4"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="mono text-[10px] uppercase tracking-[0.16em] text-(--text-2)">
              route-monitor
            </span>
          </div>

          <div className="mono py-8 text-[11px] leading-loose sm:text-xs">
            <p className="text-(--text-2)">
              <span className="text-(--bd-green)">shajin@me</span> ~/portfolio
              <span className="text-(--text-3)"> % </span>
              {command}
            </p>
            <p className="mt-5 text-(--danger-text)">
              <span className="mr-2" aria-hidden="true">
                x
              </span>
              {errorLabel}
            </p>
            {rows.map((row) => (
              <p key={row.label} className="text-(--text-2)">
                {row.label}:{" "}
                <span className="text-(--text)">{row.value}</span>
              </p>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="relative h-50 overflow-hidden rounded-2xl border bg-(--bg-2)"
            style={{ borderColor: "var(--line)" }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed opacity-60"
              style={{ borderColor: "var(--text-2)" }}
            />
            <div
              className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{ borderColor: "var(--accent)" }}
            />
            <span
              className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={
                {
                  background: dotColor,
                  boxShadow: `0 0 18px ${dotColor}`,
                } as CSSProperties
              }
            />
            <span
              className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left animate-spin motion-reduce:animate-none"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), transparent)",
                animationDuration: "4s",
              }}
            />
            <span className="absolute bottom-2 left-3 mono text-[9px] uppercase tracking-[0.16em] text-(--text-2)">
              {signal}
            </span>
          </div>

          {footer}
        </section>
      </div>
    </main>
  );
}
