"use client";

import { ChevronDown, Gamepad2 } from "lucide-react";
import { useState, type ReactNode } from "react";

export default function AboutIntro({
  children,
  extra,
}: {
  children: ReactNode;
  extra: ReactNode;
}) {
  const [introExpanded, setIntroExpanded] = useState(false);

  return (
    <>
      <div className="mt-7 max-w-[58ch]">
        <div
          id="about-intro"
          className={`relative space-y-4 text-[15px] leading-[1.75] text-(--text-2) transition-[max-height] duration-300 md:max-h-none md:overflow-visible ${
            introExpanded
              ? "max-h-[1200px]"
              : "max-h-[220px] overflow-hidden after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-20 after:bg-linear-to-t after:from-(--bg) after:to-transparent after:content-[''] md:after:hidden"
          }`}
        >
          {children}
        </div>

        <button
          type="button"
          onClick={() => setIntroExpanded((expanded) => !expanded)}
          aria-controls="about-intro"
          aria-expanded={introExpanded}
          className="mt-1 inline-flex min-h-6 items-center gap-1.5 py-1 mono text-[10px] tracking-[0.14em] uppercase text-(--text-2) transition-colors hover:text-(--text) md:hidden cursor-pointer"
        >
          {introExpanded ? "Read less" : "Read more"}
          <ChevronDown
            aria-hidden="true"
            size={13}
            className={`transition-transform motion-reduce:transition-none ${
              introExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`mt-8 rounded-[18px] border p-4 bg-(--bg-2) flex-wrap gap-3 items-center md:flex ${
          introExpanded ? "flex" : "hidden"
        }`}
        style={{ borderColor: "var(--line)" }}
      >
        <div className="flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase text-(--text-2)">
          <Gamepad2 size={14} /> Plays
        </div>
        {extra}
      </div>
    </>
  );
}
