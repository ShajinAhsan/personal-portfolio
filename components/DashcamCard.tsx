import { profile } from "@/data/profile";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./Icons";

const events = [
  { label: "Lane change", at: "28%", color: "var(--accent-2)" },
  { label: "Near-miss", at: "51%", color: "#FF5F57" },
  { label: "Clip saved", at: "84%", color: "#16C784" },
];

const cameras = ["Front", "Left", "Right", "Rear"];

function DashcamPreview() {
  return (
    <div
      className="relative min-h-55 md:min-h-0 p-3 bg-[#0F0F0E] md:col-span-7"
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-[20px] border overflow-hidden relative p-5 flex flex-col justify-between bg-[#161614]"
        style={{
          borderColor: "color-mix(in srgb, var(--line) 60%, transparent)",
        }}
      >
        <div className="flex justify-between items-center mono text-[9px] tracking-widest uppercase text-white/70">
          <span>Tesla Dashcam Insight.app / Dashboard</span>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28CA42]" />
          </div>
        </div>

        <div className="mt-5">
          {/* Viewfinder */}
          <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden rounded-[12px] border border-[#2A2A26] bg-[#0F0F0E]">
            <svg
              viewBox="0 0 160 90"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="dashcam-road" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1E1E1A" />
                  <stop offset="1" stopColor="#0C0C0B" />
                </linearGradient>
              </defs>
              <rect width="160" height="90" fill="#141412" />
              <polygon
                points="0,90 74,38 86,38 160,90"
                fill="url(#dashcam-road)"
              />
              <line
                x1="18"
                y1="90"
                x2="75"
                y2="39"
                stroke="#3A3A34"
                strokeWidth="1.2"
              />
              <line
                x1="142"
                y1="90"
                x2="85"
                y2="39"
                stroke="#3A3A34"
                strokeWidth="1.2"
              />
              <line
                x1="80"
                y1="90"
                x2="80"
                y2="39"
                stroke="#55554D"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Detection box */}
            <div
              className="absolute left-[54%] top-[46%] h-[28%] w-[22%] rounded-[3px] border animate-pulse"
              style={{ borderColor: "var(--accent-2)" }}
            >
              <span
                className="absolute -top-3 left-0 whitespace-nowrap rounded-[2px] px-1 mono text-[7px] text-black"
                style={{ background: "var(--accent-2)" }}
              >
                LANE CHANGE 0.94
              </span>
              <span className="absolute inset-[18%] rounded-[2px] bg-white/10" />
            </div>

            {/* HUD */}
            <div className="absolute left-2 top-2 flex items-center gap-1 mono text-[7px] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57] animate-pulse" />{" "}
              REC
            </div>
            <div className="absolute right-2 top-2 mono text-[7px] text-white/70">
              FRONT • 00:42:11
            </div>
            <div className="absolute bottom-2 left-2 mono text-[7px] text-white/70">
              TRACKING 3 OBJECTS
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-3">
            <div className="relative h-5">
              <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded bg-[#2A2A26]" />
              <div
                className="absolute left-0 top-1/2 h-1 w-[28%] -translate-y-1/2 rounded"
                style={{ background: "var(--accent-2)" }}
              />
              {events.map((e) => (
                <span
                  key={e.label}
                  className="absolute top-1/2 h-3 w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ left: e.at, background: e.color }}
                />
              ))}
              <span
                className="absolute inset-y-0 w-px bg-white"
                style={{ left: "28%" }}
              />
            </div>
            <div className="mt-1 flex justify-between mono text-[7px] text-white/70">
              <span>00:00</span>
              <span>02:30:00</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {events.map((e) => (
                <span
                  key={e.label}
                  className="inline-flex items-center gap-1 mono text-[8px] text-white/70"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: e.color }}
                  />
                  {e.label}
                </span>
              ))}
            </div>
          </div>

          {/* Camera feeds */}
          <div className="mt-3 grid grid-cols-4 gap-2">
            {cameras.map((cam, i) => {
              const active = i === 0;
              return (
                <div
                  key={cam}
                  className="rounded-[8px] bg-[#1E1E1A] border p-2"
                  style={{
                    borderColor: active ? "var(--accent-2)" : "#2A2A26",
                  }}
                >
                  <div className="flex items-center justify-between mono text-[7px] text-white/70">
                    <span>{cam}</span>
                    {active && (
                      <span
                        className="h-1 w-1 rounded-full animate-pulse"
                        style={{ background: "var(--accent-2)" }}
                      />
                    )}
                  </div>
                  <div className="mt-1 h-5 rounded bg-[#2A2A26]" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 mono text-[8px] tracking-[0.2em] uppercase text-white/70">
          Prototype Interface — Not Production Data
        </div>
      </div>
    </div>
  );
}
export default function DashcamCard({ project: p }: { project: Project }) {
  return (
    <article
      aria-labelledby={`project-${p.n}-title`}
      className="group relative rounded-[28px] border overflow-hidden grid md:grid-cols-12 mb-6"
      style={{ borderColor: "var(--line)", background: "var(--card)" }}
    >
      <div className="md:col-span-5 p-7 md:p-9 flex flex-col">
        <div className="flex items-center gap-3">
          <span className="mono text-[10px] tracking-[0.2em]">{p.n}</span>
          <span className="h-px w-8 bg-current opacity-20" />
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            <time dateTime={p.year}>{p.year}</time> • Prototype
          </span>
        </div>

        <h3
          id={`project-${p.n}-title`}
          className="mt-7 text-[28px] md:text-[34px] font-bold tracking-[-0.02em] leading-[0.95]"
        >
          {p.title}
        </h3>
        <div className="mono text-[12px] tracking-[0.14em] uppercase text-(--text-2) mt-2">
          {p.subtitle}
        </div>

        <p className="mt-5 text-[14px] md:text-[15px] leading-[1.6] text-(--text-2) max-w-[48ch]">
          {p.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="mono text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border"
              style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8 flex gap-3">
          {p.github && (
            <a
              href={p.github ?? profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-5 rounded-full bg-(--text) text-(--bg) inline-flex items-center gap-2 mono text-[10px] tracking-widest uppercase"
            >
              <GithubIcon size={12} /> GitHub
            </a>
          )}
          <span
            className="h-9 px-5 rounded-full border inline-flex items-center mono text-[10px] tracking-widest uppercase"
            style={{ borderColor: "var(--line)" }}
          >
            Prototype
          </span>
        </div>
      </div>

      <DashcamPreview />
    </article>
  );
}
