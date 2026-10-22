import { profile } from "@/data/profile";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./Icons";

const TRACK =
  "M70 34 C90.0 31.0 130.0 30.0 160.0 30.0 C190.0 30.0 224.7 30.3 250.0 34.0 C275.3 37.7 298.7 44.0 312.0 52.0 C325.3 60.0 331.3 72.0 330.0 82.0 C328.7 92.0 317.3 105.3 304.0 112.0 C290.7 118.7 266.3 123.0 250.0 122.0 C233.7 121.0 219.7 110.3 206.0 106.0 C192.3 101.7 181.0 95.0 168.0 96.0 C155.0 97.0 142.0 107.7 128.0 112.0 C114.0 116.3 98.3 123.0 84.0 122.0 C69.7 121.0 51.0 113.7 42.0 106.0 C33.0 98.3 30.3 85.7 30.0 76.0 C29.7 66.3 33.3 55.0 40.0 48.0 C46.7 41.0 50.0 37.0 70.0 34.0 Z";

const SENSORS = ["S1", "S2", "S3", "S4", "S5"];

function LineFollowerPreview() {
  return (
    <div
      className="relative min-h-[220px] md:min-h-0 p-3 bg-[#0F0F0E] md:col-span-7 md:order-first"
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-[20px] border overflow-hidden relative p-5 flex flex-col justify-between bg-[#161614]"
        style={{
          borderColor: "color-mix(in srgb, var(--line) 60%, transparent)",
        }}
      >
        <div className="flex justify-between items-center mono text-[9px] tracking-widest uppercase text-white/70">
          <span>Line Follower.app / Telemetry</span>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28CA42]" />
          </div>
        </div>

        <div className="mt-5">
          {/* Top-down track: the car drives the loop */}
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
              <defs>
                <g id="linecar-car">
                  <polygon
                    points="11,-5 20,-9 20,9 11,5"
                    fill="#E6FF55"
                    opacity="0.14"
                  />
                  <rect
                    x="-7"
                    y="-7.8"
                    width="5"
                    height="2.4"
                    rx="0.8"
                    fill="#2A2A26"
                    stroke="#55554D"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="2"
                    y="-7.8"
                    width="5"
                    height="2.4"
                    rx="0.8"
                    fill="#2A2A26"
                    stroke="#55554D"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="-7"
                    y="5.4"
                    width="5"
                    height="2.4"
                    rx="0.8"
                    fill="#2A2A26"
                    stroke="#55554D"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="2"
                    y="5.4"
                    width="5"
                    height="2.4"
                    rx="0.8"
                    fill="#2A2A26"
                    stroke="#55554D"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="-9"
                    y="-5.5"
                    width="18"
                    height="11"
                    rx="3"
                    fill="#2A2A26"
                    stroke="#8A909A"
                    strokeWidth="0.8"
                  />
                  <rect
                    x="-5"
                    y="-3.4"
                    width="9"
                    height="6.8"
                    rx="1.2"
                    fill="#16283A"
                    stroke="#4F8FE0"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="9"
                    y="-5"
                    width="2.6"
                    height="10"
                    rx="0.8"
                    fill="#3A3A34"
                  />
                  {[-4, -2, 0, 2, 4].map((y) => (
                    <circle
                      key={y}
                      cx="10.3"
                      cy={y}
                      r="0.8"
                      style={{ fill: "var(--accent-2)" }}
                    />
                  ))}
                </g>
              </defs>

              <path
                d={TRACK}
                fill="none"
                strokeWidth="11"
                strokeLinejoin="round"
                opacity="0.12"
                style={{ stroke: "var(--accent-2)" }}
              />
              <path
                d={TRACK}
                fill="none"
                strokeWidth="3.6"
                strokeLinejoin="round"
                opacity="0.9"
                style={{ stroke: "var(--accent-2)" }}
              />

              <line
                x1="70"
                y1="24"
                x2="70"
                y2="44"
                stroke="#fff"
                strokeOpacity="0.5"
                strokeWidth="1.2"
                strokeDasharray="2 2"
              />
              <text
                x="70"
                y="19"
                textAnchor="middle"
                className="mono"
                fontSize="5.5"
                fill="#fff"
                fillOpacity="0.35"
              >
                START
              </text>

              <g className="linecar-moving">
                <use href="#linecar-car" />
                <animateMotion
                  path={TRACK}
                  dur="10s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </g>
              <g
                className="linecar-static"
                transform="translate(70 34) rotate(-8.4)"
              >
                <use href="#linecar-car" />
              </g>
            </svg>

            <div className="absolute left-2 top-2 flex items-center gap-1 mono text-[7px] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16C784] animate-pulse" />{" "}
              5-CH IR ARRAY
            </div>
            <div className="absolute right-2 top-2 mono text-[7px] text-[#16C784]">
              ● TRACKING LINE
            </div>
            <div className="absolute bottom-2 left-2 mono text-[7px] text-white/70">
              PID: ON
            </div>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-2">
            {/* Where the line sits under the sensor array */}
            <div className="col-span-3 rounded-[8px] bg-[#1E1E1A] border border-[#2A2A26] p-2">
              <div className="flex justify-between mono text-[7px] text-white/70">
                <span>Line position</span>
                <span>S1 ← → S5</span>
              </div>
              <div className="relative mt-2 h-6">
                <div className="grid h-full grid-cols-5 gap-1">
                  {SENSORS.map((s) => (
                    <div
                      key={s}
                      className="flex items-center justify-center rounded border border-[#2A2A26] bg-[#161614] mono text-[6px] text-white/70"
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div className="linecar-marker absolute inset-0 flex items-center justify-center">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      background: "var(--accent-2)",
                      boxShadow: "0 0 8px var(--accent-2)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Motor speed: the PID steers by slowing one side */}
            <div className="col-span-2 rounded-[8px] bg-[#1E1E1A] border border-[#2A2A26] p-2">
              <div className="mono text-[7px] text-white/70">Motor speed</div>
              <div className="mt-2 space-y-2">
                {(["L", "R"] as const).map((side) => (
                  <div key={side} className="flex items-center gap-1.5">
                    <span className="mono text-[7px] text-white/70 w-2">
                      {side}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded bg-[#2A2A26]">
                      <div
                        className={`h-full w-full origin-left rounded ${side === "L" ? "linecar-motor-l" : "linecar-motor-r"}`}
                        style={{ background: "var(--accent-2)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 mono text-[7px] text-white/70">
                Steering: auto
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mono text-[8px] tracking-[0.2em] uppercase text-white/70">
          Simulated Track — Not Live Data
        </div>
      </div>
    </div>
  );
}

export default function LineFollowerCard({ project: p }: { project: Project }) {
  return (
    <article
      aria-labelledby={`project-${p.n}-title`}
      className="group relative rounded-[28px] border overflow-hidden grid md:grid-cols-12 mb-6"
      style={{ borderColor: "var(--line)", background: "var(--card)" }}
    >
      <div className="md:col-span-5 p-7 md:p-9 flex flex-col">
        <div className="flex items-center gap-3">
          <span className="mono text-[11px] tracking-[0.2em]">{p.n}</span>
          <span className="h-px w-8 bg-current opacity-20" />
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            <time dateTime={p.year}>{p.year}</time> • Autonomous
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
            className="h-9 px-5 rounded-full border inline-flex items-center mono text-[10px] tracking-widest uppercase text-(--text-2)"
            style={{ borderColor: "var(--line)" }}
          >
            Prototype
          </span>
        </div>
      </div>

      <LineFollowerPreview />
    </article>
  );
}
