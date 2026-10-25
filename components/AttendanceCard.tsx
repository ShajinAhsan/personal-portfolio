import type { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

type Person = {
  x: number;
  y: number;
  r: number;
  time: string;
  id?: string;
  score?: string;
  glasses?: boolean;
  updated?: boolean;
};

// Detected in this order. The person with no id is the one the system doesn't recognise.
const PEOPLE: Person[] = [
  { x: 62, y: 62, r: 10, time: "09:02:11", id: "ID 014", score: "0.97" },
  {
    x: 140,
    y: 58,
    r: 10,
    time: "09:02:13",
    id: "ID 027",
    score: "0.91",
    glasses: true,
    updated: true,
  },
  { x: 226, y: 54, r: 10, time: "09:02:15", id: "ID 031", score: "0.95" },
  { x: 300, y: 66, r: 11, time: "09:02:17" },
  { x: 100, y: 92, r: 13, time: "09:02:19", id: "ID 008", score: "0.98" },
  { x: 232, y: 98, r: 13, time: "09:02:21", id: "ID 042", score: "0.94" },
];

const RECOGNIZED = PEOPLE.flatMap((p, i) => (p.id ? [i] : []));
const PIPELINE = ["Camera", "Detect", "Embed", "Match", "Log"];
const CHALLENGES = [
  "Multi-face detection in crowded, multi-person frames",
  "Handling changing facial features over time",
];

const bracket = (x: number, y: number, w: number, h: number, l = 4) =>
  `M${x} ${y + l} V${y} H${x + l} M${x + w - l} ${y} H${x + w} V${y + l} M${x + w} ${y + h - l} V${y + h} H${x + w - l} M${x + l} ${y + h} H${x} V${y + h - l}`;

function AttendancePreview() {
  return (
    <div data-pause=""
      className="relative min-h-[220px] md:min-h-0 p-3 bg-[#0F0F0E] md:col-span-7 md:order-first"
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-[20px] border overflow-hidden relative p-5 flex flex-col justify-between bg-[#161614]"
        style={{
          borderColor: "var(--screen-line)",
        }}
      >
        <div className="flex justify-between items-center mono text-[9px] tracking-widest uppercase text-white/70">
          <span>Attendance.app / Live Feed</span>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28CA42]" />
          </div>
        </div>

        <div className="mt-5">
          {/* Camera frame: every face gets scanned, matched, and logged */}
          <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden rounded-[12px] border border-[#2A2A26] bg-[#0F0F0E]">
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <svg
              viewBox="0 0 360 150"
              className="absolute inset-0 h-full w-full"
            >
              {PEOPLE.map((p, i) => (
                <g key={i}>
                  <ellipse
                    cx={p.x}
                    cy={p.y + p.r * 2.3}
                    rx={p.r * 1.9}
                    ry={p.r * 1.3}
                    fill="#1E1E1A"
                    stroke="#3A3A34"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={p.r}
                    fill="#242421"
                    stroke="#4A4F57"
                    strokeWidth="0.8"
                  />
                  {p.glasses && (
                    <g fill="none" stroke="#8A909A" strokeWidth="0.8">
                      <circle cx={p.x - p.r * 0.38} cy={p.y} r={p.r * 0.3} />
                      <circle cx={p.x + p.r * 0.38} cy={p.y} r={p.r * 0.3} />
                      <line
                        x1={p.x - p.r * 0.08}
                        y1={p.y}
                        x2={p.x + p.r * 0.08}
                        y2={p.y}
                      />
                    </g>
                  )}
                </g>
              ))}

              {PEOPLE.map((p, i) => {
                const bx = p.x - p.r * 1.4;
                const by = p.y - p.r * 1.55;
                const d = bracket(bx, by, p.r * 2.8, p.r * 3.1);
                const known = Boolean(p.id);
                const color = known ? "#16C784" : "#FF5F57";
                const label = known
                  ? `${p.id} · ${p.score}${p.updated ? " ↻" : ""}`
                  : "UNKNOWN";
                return (
                  <g key={i}>
                    <g className={`att-scan-${i}`}>
                      <path
                        d={d}
                        fill="none"
                        stroke="#FFBD2E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <rect
                        x={bx}
                        y={by - 8}
                        width="28"
                        height="6.5"
                        rx="1.5"
                        fill="#FFBD2E"
                      />
                      <text
                        x={bx + 2}
                        y={by - 3.3}
                        className="mono"
                        fontSize="4.6"
                        fill="#0F0F0E"
                      >
                        SCANNING…
                      </text>
                    </g>
                    <g className={`att-res-${i}`}>
                      <path
                        d={d}
                        fill="none"
                        stroke={color}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <rect
                        x={bx}
                        y={by - 8}
                        width={label.length * 2.9 + 4}
                        height="6.5"
                        rx="1.5"
                        fill={color}
                      />
                      <text
                        x={bx + 2}
                        y={by - 3.3}
                        className="mono"
                        fontSize="4.6"
                        fill="#0F0F0E"
                      >
                        {label}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            <div className="absolute left-2 top-2 flex items-center gap-1 mono text-[7px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57] animate-pulse" />{" "}
              CAM 01 • LIVE
            </div>
            <div className="absolute right-2 top-2 mono text-[7px] text-white/70">
              FACES IN FRAME: {PEOPLE.length}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-2">
            {/* Attendance log */}
            <div className="col-span-3 rounded-[8px] bg-[#1E1E1A] border border-[#2A2A26] p-2">
              <div className="flex justify-between mono text-[7px] text-white/70">
                <span>Attendance log</span>
                <span>admin dashboard</span>
              </div>
              <div className="mt-2 space-y-0.5">
                {PEOPLE.map((p, i) => (
                  <div
                    key={i}
                    className={`att-res-${i} flex items-center justify-between gap-2 mono text-[8px] leading-3`}
                  >
                    <span className="text-white/70">{p.time}</span>
                    <span
                      className={`flex-1 ${p.id ? "text-white/80" : "text-[#FF5F57]"}`}
                    >
                      {p.id ?? "Unknown face"}
                    </span>
                    <span
                      className={p.id ? "text-[#16C784]" : "text-[#FF5F57]"}
                    >
                      {p.id ? (p.updated ? "✓ ↻" : "✓") : "flagged"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedding + headcount */}
            <div className="col-span-2 rounded-[8px] bg-[#1E1E1A] border border-[#2A2A26] p-2">
              <div className="flex justify-between mono text-[7px] text-white/70">
                <span>Embedding</span>
                <span>128-D</span>
              </div>
              <div className="mt-2 flex h-8 items-end gap-[2px]">
                {Array.from({ length: 16 }, (_, i) => (
                  <span
                    key={i}
                    className="att-bar h-full flex-1 origin-bottom rounded-[1px]"
                    style={{
                      background: "var(--accent-2)",
                      opacity: 0.75,
                      animationDuration: `${3 + (i % 5) * 0.7}s`,
                      animationDelay: `${-(i * 0.9)}s`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-2 mono text-[7px] text-white/70">Present</div>
              <div className="mt-1 flex gap-1">
                {RECOGNIZED.map((i) => (
                  <div
                    key={i}
                    className="relative h-1.5 flex-1 overflow-hidden rounded bg-[#2A2A26]"
                  >
                    <span
                      className={`att-res-${i} absolute inset-0 rounded bg-[#16C784]`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mono text-[8px] tracking-[0.2em] uppercase text-white/70">
          Simulated Detection — Not Live Data
        </div>
      </div>
    </div>
  );
}

function AttendanceDetails() {
  return (
    <>
      <div className="mt-5 flex flex-wrap items-center gap-1.5 mono text-[10px]">
        {PIPELINE.map((step, i) => (
          <span key={step} className="inline-flex items-center gap-1.5">
            {i > 0 && (
              <ArrowRight
                aria-hidden="true"
                className="text-(--text-2)"
                size={11}
              />
            )}
            <span
              className="rounded-full border px-2 py-0.5"
              style={{ borderColor: "var(--control-line)" }}
            >
              {step}
            </span>
          </span>
        ))}
      </div>

      <div
        className="mt-5 rounded-[14px] border p-3.5 bg-[var(--bg-2)]"
        style={{ borderColor: "var(--control-line)" }}
      >
        <div className="mono text-[9px] tracking-[0.2em] uppercase text-(--text-2)">
          Key challenges
        </div>
        <ul className="mt-2 space-y-1.5 text-[13px] leading-snug text-(--text-2)">
          {CHALLENGES.map((c) => (
            <li key={c} className="flex gap-2">
              <ArrowRight
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-(--bd-green)"
                size={13}
              />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function AttendanceCard({ project: p }: { project: Project }) {
  return (
    <ProjectCard
      project={p}
      preview={<AttendancePreview />}
      extra={<AttendanceDetails />}
    />
  );
}
