"use client";

import { navLinks, profile } from "@/data/profile";
import { projectCount } from "@/data/projects";
import { useEffect, useRef, useState } from "react";

/** Hamburger button + dropdown panel. The panel is positioned against the sticky header. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (
        !menuRef.current?.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const onBreakpointChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    mediaQuery.addEventListener("change", onBreakpointChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
      mediaQuery.removeEventListener("change", onBreakpointChange);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden h-11 w-11 rounded-full border flex items-center justify-center cursor-pointer"
        style={{ borderColor: "var(--line)" }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className="h-px w-4 bg-current block transition-all"
            style={{ transform: open ? "translateY(3.5px) rotate(45deg)" : "" }}
          />
          <span
            className="h-px w-4 bg-current block transition-all"
            style={{
              transform: open ? "translateY(-3.5px) rotate(-45deg)" : "",
            }}
          />
        </div>
      </button>

      <nav
        ref={menuRef}
        id="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
        className="mobile-menu-panel md:hidden absolute inset-x-0 top-full border-t border-b px-6 py-6 flex flex-col gap-5 backdrop-blur-xl"
        style={{
          borderColor: "var(--line)",
          background: "color-mix(in srgb, var(--bg) 96%, transparent)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            ref={link === navLinks[0] ? firstLinkRef : undefined}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
            className="text-left text-[28px] font-extrabold tracking-[-0.02em] leading-none flex items-center gap-3 hover:opacity-60 transition-opacity motion-reduce:transition-none"
          >
            {link.label}
            {link.id === "work" && (
              <span className="mono text-[10px] px-2 py-1 rounded-full bg-(--bd-green) text-white dark:bg-[#007A5D]">
                {projectCount} projects
              </span>
            )}
          </a>
        ))}
        <div
          className="pt-4 border-t flex flex-col items-start gap-2"
          style={{ borderColor: "var(--line)" }}
        >
          <a
            href={`mailto:${profile.personalEmail}`}
            className="mono text-[12px] underline break-all hover:opacity-60 transition-opacity motion-reduce:transition-none"
          >
            {profile.personalEmail}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-[12px] underline break-all hover:opacity-60 transition-opacity motion-reduce:transition-none"
          >
            github/{profile.githubHandle}
          </a>
        </div>
      </nav>
    </>
  );
}
