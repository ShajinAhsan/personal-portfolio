import { navLinks, profile } from "@/data/profile";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { CopyEmail } from "./FooterClient";

const socialLinks = (
  [
    ["GitHub", profile.github],
    ["LinkedIn", profile.linkedin],
    ["Twitter", profile.twitter],
  ] as const
).filter(([, href]) => Boolean(href));
const glow = (color: string) =>
  `radial-gradient(closest-side, ${color} 0%, ${color} 15%, color-mix(in srgb, ${color} 60%, transparent) 55%, color-mix(in srgb, ${color} 20%, transparent) 78%, transparent 100%)`;
const wordmarkFade = "linear-gradient(to bottom, #000 35%, transparent 98%)";

export default function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden border-t"
      style={{ borderColor: "var(--line)" }}
    >
      {/* Soft glows (gradients, not blur, so Safari renders them cleanly) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 -z-10 h-130 w-130 sm:opacity-18 opacity-[0.25]"
        style={{ background: glow("var(--bd-green)") }}
      />

      <div className="mx-auto max-w-330 px-6 lg:px-8">
        {/* The pitch */}
        <div className="grid gap-8 py-12 md:grid-cols-[1fr_0.8fr] md:items-end md:py-16">
          <h2 className="serif max-w-180 text-[clamp(3.5rem,9vw,8rem)] leading-[0.82] tracking-tighter">
            Got a weird
            <br />
            <span className="text-(--bd-green)">idea?</span>
          </h2>
          <div>
            <p className="mb-5 max-w-75 text-sm leading-relaxed text-(--text) opacity-80">
              The best projects usually start as a rough thought. Send yours
              over and let&apos;s see where it goes.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.personalEmail}`}
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-(--text) px-6 mono text-[11px] tracking-[0.14em] uppercase text-(--bg) transition-opacity hover:opacity-90"
              >
                <Mail aria-hidden="true" size={15} />
                Start a conversation
                <ArrowUpRight
                  aria-hidden="true"
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <CopyEmail email={profile.personalEmail} />
            </div>
          </div>
        </div>

        {/* Links + status */}
        <div
          className="grid gap-8 border-t py-8 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1.1fr]"
          style={{ borderColor: "var(--line)" }}
        >
          <div>
            <p className="mono mb-3 text-[10px] tracking-[0.18em] uppercase text-(--text-2)">
              Explore
            </p>
            <nav
              className="flex flex-col items-start gap-2"
              aria-label="Footer navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-[15px] text-(--text-2) transition-all hover:translate-x-1 hover:text-(--text)"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mono mb-3 text-[10px] tracking-[0.18em] uppercase text-(--text-2)">
              Elsewhere
            </p>
            <div className="flex flex-col items-start gap-2">
              {socialLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-[15px] text-(--text-2) transition-colors hover:text-(--text)"
                >
                  {label}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={13}
                    className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
            <a
              href="#top"
              className="group flex w-fit items-center gap-2 self-start mono text-[10px] tracking-[0.14em] uppercase text-(--text-2) transition-colors hover:text-(--text) md:self-end"
            >
              Back to top
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-transform group-hover:-translate-y-1"
                style={{ borderColor: "var(--line)" }}
              >
                <ArrowUp aria-hidden="true" size={14} />
              </span>
            </a>
          </div>
        </div>

        {/* Wordmark: outlined, fading into the bottom of the page */}
        <div
          aria-hidden="true"
          className="select-none overflow-hidden pt-4 md:pt-8"
          style={{ maskImage: wordmarkFade, WebkitMaskImage: wordmarkFade }}
        >
          <div
            className="whitespace-nowrap text-center font-black uppercase leading-[0.8] tracking-tighter text-[clamp(4rem,21vw,19rem)]"
            style={{
              color: "transparent",
              WebkitTextStroke:
                "1.5px color-mix(in srgb, var(--text) 38%, transparent)",
              backgroundImage:
                "linear-gradient(to bottom, color-mix(in srgb, var(--text) 20%, transparent), transparent 85%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Shajin
            <span
              style={{
                WebkitTextFillColor: "var(--bd-green)",
                WebkitTextStroke: "0",
              }}
            >
              .
            </span>
          </div>
        </div>

        {/* Session end */}
        <div
          className="flex flex-wrap items-end justify-between gap-3 border-t py-4 mono text-[11px] text-(--text-2)"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="leading-relaxed">
            <div>
              <span className="text-(--bd-green)">shajin@me</span>{" "}
              <span className="text-sky-400">~</span>{" "}
              <span className="text-(--bd-green)">%</span>{" "}
              <span className="text-(--text)">exit</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-60">
              [Process completed]
              <span
                className="inline-block h-3 w-1.5 animate-pulse"
                style={{ background: "var(--text)" }}
              />
            </div>
          </div>
          <span className="text-[10px] tracking-[0.14em] uppercase">
            © 2026 Shajin Ahsan Shuvo
          </span>
        </div>
      </div>
    </footer>
  );
}
