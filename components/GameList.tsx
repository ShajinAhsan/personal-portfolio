"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const VISIBLE = 5;

export default function GamesList({ games }: { games: readonly string[] }) {
  const [open, setOpen] = useState(false);
  const hiddenCount = games.length - VISIBLE;

  return (
    <div id="games-list" className="flex flex-wrap gap-2">
      {games.map((game, i) => (
        <span
          key={game}
          className={`mono text-[10px] px-2.5 py-1 rounded-full border bg-(--card) ${
            i >= VISIBLE && !open ? "hidden" : ""
          }`}
          style={{ borderColor: "var(--line)" }}
        >
          {game}
        </span>
      ))}

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="games-list"
          className="mono text-[10px] px-2.5 py-1.5 min-h-6 rounded-full border inline-flex items-center gap-1 hover:bg-(--bg-2) transition cursor-pointer"
          style={{ borderColor: "var(--line-strong)" }}
        >
          {open ? "Show less" : `+${hiddenCount} more`}
          <ChevronDown
            size={10}
            className={`transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
