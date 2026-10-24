"use client";

import { skillGroups } from "@/data/skills";
import { useState, type CSSProperties, type KeyboardEvent } from "react";

/**
 * Skills as an IC pinout, with two package styles chosen by the CARD width
 * (container queries), not the screen width:
 *
 *  - narrow card (< 336px): SIP, a single in-line package. The chip is a tall
 *    strip on the left and every pin sits on its right with plenty of room.
 *  - wider card: DIP, the dual in-line package with pins on both sides.
 *
 * Theme rule: the chip body is --text and its markings are --bg, so it is dark in
 * light mode and light in dark mode. Lime (--accent-2) is only used as a fill with
 * fixed dark content on top, never as text.
 */

const ROW = 40; // height of one pin row (px)
const pad = (n: number) => String(n).padStart(2, "0");

export default function Skills() {
  const [active, setActive] = useState(0);

  const group = skillGroups[active];
  const { items } = group;
  const Icon = group.icon;

  // DIP: pins come in pairs, an odd count leaves the last pin reserved.
  const perSide = Math.ceil(items.length / 2);
  const total = perSide * 2;
  const pins = Array.from({ length: total }, (_, p) => items[p] ?? null);
  const left = pins.slice(0, perSide);
  const right = pins.slice(perSide);
  const part = `SAS-${pad(active + 1)}${pad(items.length)}`;

  const onTabKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = skillGroups.length;
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown")
      next = (active + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = (active - 1 + n) % n;
    else return;
    e.preventDefault();
    setActive(next);
    (e.currentTarget.children[next] as HTMLElement | undefined)?.focus();
  };

  /** One pin row. `side` "r" means: leg, number, then label (used by SIP and the DIP right side). */
  const renderPin = (
    label: string | null,
    pin: number,
    side: "l" | "r",
    i: number,
    sip = false,
  ) => {
    const reserved = label === null;

    const num = (
      <span className="mono w-5 shrink-0 text-center text-[10px] text-(--text-2)">
        {pad(pin)}
      </span>
    );

    const leg = (
      <span
        className={`sk-plug block h-1.75 shrink-0 rounded-xs ${
          sip ? "w-4" : "w-3 @md:w-6 @lg:w-8"
        }`}
        style={{
          background: reserved ? "var(--line)" : "var(--control-line)",
          transformOrigin: side === "l" ? "right" : "left",
          animationDelay: `${i * 55}ms`,
        }}
      />
    );

    const text = (
      <span
        className={`sk-label min-w-0 flex-1 wrap-break-word leading-tight ${
          sip
            ? "pl-2.5 text-left text-[13px]"
            : `text-[11.5px] @md:text-[13px] @lg:text-[14px] ${
                side === "l" ? "pr-2 text-right" : "pl-2 text-left"
              }`
        } ${reserved ? "italic text-(--text-2) opacity-60" : "font-medium text-(--text)"}`}
        style={{ animationDelay: `${i * 55 + 80}ms` }}
      >
        {reserved ? "Reserved" : label}
      </span>
    );

    return (
      <li
        key={`${side}${pin}`}
        className="flex min-w-0 items-center"
        style={{ height: ROW }}
      >
        {side === "l" ? (
          <>
            {text}
            {num}
            {leg}
          </>
        ) : (
          <>
            {leg}
            {num}
            {text}
          </>
        )}
      </li>
    );
  };

  /** The chip body, shared by both package styles. */
  const renderChip = (className: string, style?: CSSProperties) => (
    <div
      className={`relative flex min-h-37.5 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl px-1.5 text-center ${className}`}
      style={{
        color: "var(--bg)",
        background: "var(--text)",
        boxShadow:
          "inset 0 0 0 1px color-mix(in srgb, var(--bg) 16%, transparent), 0 14px 28px -18px color-mix(in srgb, var(--text) 70%, transparent)",
        ...style,
      }}
    >
      {/* orientation notch */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-2 w-4 -translate-x-1/2 rounded-b-full"
        style={{ background: "var(--card)" }}
      />
      {/* pin-1 marker + status LED */}
      <span
        aria-hidden="true"
        className="absolute left-2.5 top-3 h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--bg)", opacity: 0.45 }}
      />
      <span
        aria-hidden="true"
        className="sk-led absolute right-2.5 top-3 h-1.5 w-1.5 rounded-full"
        style={{
          background: "var(--bd-red)",
          boxShadow: "0 0 4px 1px var(--bd-red)",
        }}
      />

      {/* die: lime fill with fixed dark icon, readable on either chip color */}
      <div
        className="relative grid h-10 w-10 shrink-0 place-items-center rounded-md"
        style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        {[
          "left-[-3px] top-[-3px] border-l border-t",
          "right-[-3px] top-[-3px] border-r border-t",
          "left-[-3px] bottom-[-3px] border-l border-b",
          "right-[-3px] bottom-[-3px] border-r border-b",
        ].map((c) => (
          <span
            key={c}
            aria-hidden="true"
            className={`absolute h-1.5 w-1.5 ${c}`}
            style={{ borderColor: "var(--bg)", opacity: 0.6 }}
          />
        ))}
        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <span className="wrap-break-word text-[11px] font-semibold leading-tight tracking-[-0.02em] @md:text-[12.5px] @lg:text-[13px]">
        {group.cat}
      </span>

      {/* etched part number */}
      <span
        className="mono absolute bottom-2 left-0 right-0 text-[8.5px] uppercase tracking-[0.22em]"
        style={{ opacity: 0.7 }}
      >
        {part}
      </span>
    </div>
  );

  return (
    <div id="skills" className="min-w-0 lg:col-span-5">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes sk-plug { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          @keyframes sk-in { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: none; } }
          @keyframes sk-led { 0%,100% { opacity: 1; } 50% { opacity: .25; } }
          .sk-plug { animation: sk-plug .35s cubic-bezier(.3,.9,.3,1) both; }
          .sk-label { animation: sk-in .4s ease-out both; }
          .sk-led { animation: sk-led 2.4s ease-in-out infinite; }
        }
      `}</style>

      <h3 className="mono mb-3 text-[11px] uppercase tracking-[0.2em] text-(--text-2)">
        Skills — Pinout
      </h3>

      {/* Package picker */}
      <div
        role="tablist"
        aria-label="Skill groups"
        onKeyDown={onTabKey}
        className="flex flex-wrap gap-2"
      >
        {skillGroups.map(({ cat, icon: GIcon, items: list }, g) => {
          const on = g === active;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              id={`skill-tab-${g}`}
              aria-selected={on}
              aria-controls="skill-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(g)}
              className={`flex cursor-pointer items-center gap-2 rounded-full border py-1.5 pl-3 pr-2.5 text-[12px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text) ${
                on ? "bg-(--text) text-(--bg)" : "bg-(--card) hover:bg-(--bg-2)"
              }`}
              style={{ borderColor: on ? "var(--text)" : "var(--line)" }}
            >
              <GIcon size={14} aria-hidden="true" className="shrink-0" />
              <span className="leading-tight">{cat}</span>
              <span
                className="mono rounded-full px-1.5 py-px text-[9.5px]"
                style={
                  on
                    ? { background: "var(--bg)", color: "var(--text)" }
                    : { background: "var(--bg-2)" }
                }
              >
                {list.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Datasheet */}
      <div
        id="skill-panel"
        role="tabpanel"
        aria-labelledby={`skill-tab-${active}`}
        className="@container relative mt-3 overflow-hidden rounded-[20px] border bg-(--card)"
        style={{ borderColor: "var(--line)" }}
      >
        {/* dot grid, fading toward the edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(color-mix(in srgb, var(--text) 16%, transparent) 1px, transparent 1.3px)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 85%)",
          }}
        />
        {/* soft lime glow behind the chip */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 45% at 50% 52%, color-mix(in srgb, var(--accent-2) 16%, transparent), transparent 70%)",
          }}
        />

        <div
          className="mono relative flex items-center justify-between border-b px-4 py-2.5 text-[10px] uppercase tracking-[0.16em] text-(--text-2)"
          style={{ borderColor: "var(--line)" }}
        >
          <span>Pinout U{active + 1}</span>
          <span>{part}</span>
        </div>

        {/* SIP: narrow cards. Chip strip on the left, every pin on its right. */}
        <div
          key={`sip-${active}`}
          className="relative grid grid-cols-[auto_minmax(0,1fr)] items-stretch px-3 py-6 @min-[336px]:hidden"
        >
          {renderChip("w-[88px]")}
          <ul className="flex min-w-0 flex-col py-3">
            {items.map((label, i) => renderPin(label, i + 1, "r", i, true))}
          </ul>
        </div>

        {/* DIP: wider cards. Pins on both sides of the chip. */}
        <div
          key={`dip-${active}`}
          className="relative hidden grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch px-2 py-6 @min-[336px]:grid"
        >
          <ul className="flex min-w-0 flex-col justify-around">
            {left.map((label, i) => renderPin(label, i + 1, "l", i))}
          </ul>
          {renderChip("w-[72px] @md:w-[120px] @md:px-2 @lg:w-[140px]", {
            height: perSide * ROW + 24,
          })}
          <ul className="flex min-w-0 flex-col justify-around">
            {right.map((label, i) => renderPin(label, perSide + i + 1, "r", i))}
          </ul>
        </div>

        {/* status */}
        <div
          className="mono relative flex items-center justify-between gap-3 border-t px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] text-(--text-2)"
          style={{ borderColor: "var(--line)" }}
        >
          <span>Pins in use</span>
          <span>
            <span className="@min-[336px]:hidden">{items.length}</span>
            <span className="hidden @min-[336px]:inline">
              {items.length}/{total}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
