"use client";

import { navLinks, profile } from "@/data/profile";
import { projectCount } from "@/data/projects";
import { useEffect, useRef, useState } from "react";

/** Hamburger button + dropdown panel. The panel is positioned against the sticky header. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
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
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden h-9 w-9 rounded-full border flex items-center justify-center cursor-pointer"
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
          {/* <span
            className="h-[1.5px] w-3.5 bg-current block"
            style={{ opacity: open ? 0 : 1 }}
          /> */}
          <span
            className="h-px w-4 bg-current block transition-all"
            style={{
              transform: open ? "translateY(-3.5px) rotate(-45deg)" : "",
            }}
          />
        </div>
      </button>

      {open && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden absolute inset-x-0 top-full border-t border-b px-6 py-6 flex flex-col gap-5 backdrop-blur-xl"
          style={{
            borderColor: "var(--line)",
            background: "color-mix(in srgb, var(--bg) 88%, transparent)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              ref={link === navLinks[0] ? firstLinkRef : undefined}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="text-left text-[28px] font-extrabold tracking-[-0.02em] leading-none flex items-center gap-3"
            >
              {link.label}
              {link.id === "work" && (
                <span className="mono text-[10px] px-2 py-1 rounded-full bg-(--bd-green) text-white">
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
              className="mono text-[12px] underline break-all"
            >
              {profile.personalEmail}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[12px] underline break-all"
            >
              github/{profile.githubHandle}
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
