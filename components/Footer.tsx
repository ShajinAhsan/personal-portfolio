import { navLinks, profile } from "@/data/profile";
import {
  Activity,
  ArrowUp,
  ArrowUpRight,
  CornerDownRight,
  Mail,
} from "lucide-react";

const socialLinks = [
  ["GitHub", profile.github],
  ["LinkedIn", profile.linkedin],
  ["Twitter", profile.twitter],
] as const;

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-330 px-6 lg:px-8">
        <div className="grid gap-8 py-12 md:grid-cols-[1fr_0.8fr] md:items-end md:py-16">
          <h2 className="serif max-w-180 text-[clamp(3.5rem,9vw,8rem)] leading-[0.82] tracking-[-0.05em]">
            Got a weird
            <br />
            <span className="text-(--bd-green)">idea?</span>
          </h2>
          <div>
            <p className="mb-4 max-w-75 text-sm leading-relaxed text-(--text-2)">
              The best projects usually start as a rough thought. Send yours
              over and let&apos;s see where it goes.
            </p>
            <a
              href={`mailto:${profile.personalEmail}`}
              className="group flex w-fit items-center gap-3 mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-(--accent) border-b pb-2"
            >
              <Mail aria-hidden="true" size={15} />
              Start a conversation
              <ArrowUpRight
                aria-hidden="true"
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div
          className="grid gap-6 border-t py-6 sm:grid-cols-2 md:grid-cols-[1fr_1fr_auto] md:gap-4"
          style={{ borderColor: "var(--line)" }}
        >
          <div>
            <p className="mono mb-2 text-[10px] tracking-[0.18em] uppercase text-(--text-2)">
              Explore
            </p>
            <nav
              className="flex flex-col items-start gap-1.5"
              aria-label="Footer navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm text-(--text-2) transition-colors hover:text-(--text)"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mono mb-2 text-[10px] tracking-[0.18em] uppercase text-(--text-2)">
              Elsewhere
            </p>
            <div className="flex flex-col items-start gap-1.5">
              {socialLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-(--text-2) transition-colors hover:text-(--text)"
                >
                  {label}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={12}
                    className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:col-span-2 md:col-span-1 md:items-end">
            <div
              className="flex items-center gap-2 mono text-[10px] tracking-[0.14em] uppercase text-(--text-2)"
              role="status"
              aria-label="System online"
            >
              <Activity
                aria-hidden="true"
                size={13}
                className="text-(--bd-green) animate-pulse"
              />
              <span>System online</span>
            </div>
            <a
              href="#top"
              className="group flex items-center gap-2 mono text-[10px] tracking-[0.14em] uppercase text-(--text-2) transition-colors hover:text-(--text)"
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

        <div
          className="flex flex-wrap items-center justify-between gap-2 border-t py-4 mono text-[10px] tracking-[0.14em] uppercase text-(--text-2)"
          style={{ borderColor: "var(--line)" }}
        >
          <span className="flex items-center gap-2">
            <CornerDownRight aria-hidden="true" size={13} />
            <span>End of page</span>
          </span>
          <span>© 2026 Shajin Ahsan Shuvo</span>
        </div>
      </div>
    </footer>
  );
}
