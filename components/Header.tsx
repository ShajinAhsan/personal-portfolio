import { navLinks, profile } from "@/data/profile";
import { GithubIcon } from "./Icons";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className="sticky z-50 w-full border-b"
      style={{
        top: "var(--safe-area-inset-top)",
        borderColor: "var(--line)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 backdrop-blur-xl"
        style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
      />
      <div className="mx-auto max-w-330 px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Back to top"
          >
            <div
              className="h-8 w-8 rounded-full flex items-center justify-center text-[11px] font-bold tracking-widest border"
              style={{
                background: "var(--text)",
                color: "var(--bg)",
                borderColor: "var(--line-strong)",
              }}
            >
              S.
            </div>
            <span className="mono text-[11px] tracking-[0.2em] uppercase opacity-60 hidden sm:block">
              SHAJIN AHSAN
            </span>
          </a>
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="mono text-[12px] tracking-[0.14em] uppercase hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="hidden lg:flex items-center gap-2 rounded-full border px-3 py-1.5"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
          >
            <span className="h-2 w-2 rounded-full bg-[#16C784] animate-pulse" />
            <span className="mono text-[10px] tracking-widest uppercase">
              Available • CUET
            </span>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-9 rounded-full border flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
