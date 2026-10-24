import { learning, type LearningNode } from "@/data/learning";
import { ArrowRight, ChevronDown, Lock, Unlock } from "lucide-react";

// Show this many nodes; anything older folds into "Earlier unlocks" so the tree never grows taller than this.
const VISIBLE = 3;

const chip = "mono text-[10px] px-2.5 py-1 rounded-full border bg-(--bg-2)";
const dot = "absolute -left-9.25 md:-left-11.25 top-1 h-2.5 w-2.5 rounded-full";

function Node({ node }: { node: LearningNode }) {
  const locked = node.status === "locked";

  return (
    <div className="relative">
      {node.status === "now" && (
        <span
          className={`${dot} animate-ping`}
          style={{ background: node.color, opacity: 0.6 }}
          aria-hidden="true"
        />
      )}
      <span
        className={locked ? `${dot} border border-dashed bg-(--bg)` : dot}
        style={
          locked ? { borderColor: "var(--text-3)" } : { background: node.color }
        }
        aria-hidden="true"
      />

      <div className="flex items-baseline justify-between gap-3">
        <h4
          className={`text-[14px] font-semibold leading-snug ${locked ? "opacity-50" : ""}`}
        >
          {node.title}
        </h4>
        <span className="mono shrink-0 text-[10px] text-(--text-2)">
          {node.date}
        </span>
      </div>

      {/* Finished nodes stay compact; the live and locked ones get a line of context */}
      {node.status !== "done" && (
        <p className="mt-1 text-[12px] text-(--text-2) leading-relaxed">
          {node.desc}
        </p>
      )}

      {locked ? (
        <div className="mt-2 mono inline-flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase text-(--text-2)">
          <Lock size={11} /> locked
        </div>
      ) : (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="mono mr-1 inline-flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase text-(--text-2)">
            {node.status === "now" ? (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFBD2E] animate-pulse" />{" "}
                unlocking
              </>
            ) : (
              <>
                <Unlock size={11} /> unlocked
              </>
            )}
          </span>
          {node.unlocks.map((u) =>
            u.href ? (
              <a
                key={u.label}
                href={u.href}
                className={`${chip} transition hover:bg-(--card)`}
                style={{ borderColor: "var(--line)" }}
              >
                {u.label}
              </a>
            ) : (
              <span
                key={u.label}
                className={chip}
                style={{ borderColor: "var(--line)" }}
              >
                {u.label}
              </span>
            ),
          )}
        </div>
      )}
    </div>
  );
}

export default function LearningTree() {
  const earlier = learning.slice(0, Math.max(0, learning.length - VISIBLE));
  const recent = learning.slice(-VISIBLE);

  return (
    <div
      className="relative border-l pl-8 md:pl-10 space-y-6"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="mono flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-(--text-2) -ml-8 md:-ml-10 mb-2 pl-8 md:pl-10">
        <span>Skill tree — learn</span>
        <ArrowRight aria-hidden="true" size={12} />
        <span>ship</span>
      </div>

      {earlier.length > 0 && (
        <details className="group">
          <summary className="relative flex cursor-pointer list-none items-center gap-1.5 mono text-[10px] tracking-[0.2em] uppercase text-(--text-2) transition hover:text-(--text) [&::-webkit-details-marker]:hidden">
            <span
              className={`${dot} border border-dashed bg-(--bg)`}
              style={{ borderColor: "var(--text-3)" }}
              aria-hidden="true"
            />
            Earlier unlocks ({earlier.length})
            <ChevronDown
              size={12}
              className="transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="mt-6 space-y-6">
            {earlier.map((node) => (
              <Node key={node.title} node={node} />
            ))}
          </div>
        </details>
      )}

      {recent.map((node) => (
        <Node key={node.title} node={node} />
      ))}
    </div>
  );
}
