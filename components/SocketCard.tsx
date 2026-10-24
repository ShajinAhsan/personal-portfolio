import { profile } from "@/data/profile";
import type { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";

const PINS = [52, 60, 68, 76, 84, 92, 100, 108];
const RAY_ANGLES = [-90, -135, -45, 180, 0, 155, 25];

function SocketPreview() {
  return (
    <div
      className="relative min-h-[220px] md:min-h-0 p-3 bg-[#0F0F0E] md:col-span-7"
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-[20px] border overflow-hidden relative p-5 flex flex-col justify-between bg-[#161614]"
        style={{
          borderColor: "color-mix(in srgb, var(--line) 60%, transparent)",
        }}
      >
        <div className="flex justify-between items-center mono text-[9px] tracking-widest uppercase text-white/70">
          <span>Socket Controller.app / Relay</span>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28CA42]" />
          </div>
        </div>

        <div className="mt-5">
          {/* Circuit: ESP32 → relay → bulb */}
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
                <radialGradient id="socket-halo">
                  <stop offset="0" stopColor="#FFD35A" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#FFD35A" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="socket-glassfill">
                  <stop offset="0" stopColor="#FFF1B8" />
                  <stop offset="1" stopColor="#FFB020" />
                </radialGradient>
              </defs>

              {/* ESP32 */}
              <rect
                x="8"
                y="30"
                width="88"
                height="90"
                rx="6"
                fill="#20242B"
                stroke="#3A3F47"
              />
              <path
                d="M26 46 V38 H32 V46 H38 V38 H44 V46 H50 V38 H56 V46"
                fill="none"
                stroke="#C9A24B"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <rect
                x="20"
                y="48"
                width="64"
                height="38"
                rx="3"
                fill="#5B616B"
                stroke="#8A909A"
              />
              <text
                x="52"
                y="71"
                textAnchor="middle"
                className="mono"
                fontSize="8"
                fill="#E5E7EB"
              >
                ESP32
              </text>
              <rect
                x="40"
                y="114"
                width="16"
                height="9"
                rx="2"
                fill="#8A909A"
              />
              {PINS.map((y) => (
                <g key={y}>
                  <circle cx="13" cy={y} r="1.6" fill="#C9A24B" />
                  <circle cx="91" cy={y} r="1.6" fill="#C9A24B" />
                </g>
              ))}
              <circle
                cx="91"
                cy="76"
                r="3.2"
                className="socket-hi"
                style={{ fill: "var(--accent-2)" }}
              />
              <circle
                cx="30"
                cy="100"
                r="2.2"
                className="socket-blink"
                fill="#4DA3FF"
              />
              <text
                x="122"
                y="70"
                textAnchor="middle"
                className="mono"
                fontSize="6"
                fill="#fff"
                fillOpacity="0.4"
              >
                GPIO23
              </text>

              {/* Signal wire: ESP32 → relay IN */}
              <path
                d="M94 76 H150"
                fill="none"
                stroke="#3A3F47"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M94 76 H150"
                pathLength={100}
                className="socket-wire-in"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ stroke: "var(--accent-2)" }}
              />

              {/* Relay module */}
              <rect
                x="150"
                y="26"
                width="96"
                height="98"
                rx="6"
                fill="#16283A"
                stroke="#2C4A6B"
              />
              <rect
                x="164"
                y="34"
                width="46"
                height="30"
                rx="3"
                fill="#2D6CC0"
                stroke="#4F8FE0"
              />
              <rect
                x="164"
                y="34"
                width="46"
                height="30"
                rx="3"
                className="socket-on"
                fill="none"
                stroke="#BFD9FF"
                strokeWidth="1.5"
              />
              <text
                x="187"
                y="52"
                textAnchor="middle"
                className="mono"
                fontSize="6"
                fill="#D6E6FF"
              >
                RELAY
              </text>
              <circle cx="228" cy="44" r="3.5" fill="#1F3D2A" />
              <g className="socket-on">
                <circle cx="228" cy="44" r="8" fill="#28CA42" opacity="0.25" />
                <circle cx="228" cy="44" r="3.5" fill="#28CA42" />
              </g>
              <circle cx="150" cy="76" r="2.6" fill="#C9A24B" />
              <text
                x="157"
                y="78.5"
                className="mono"
                fontSize="5"
                fill="#fff"
                fillOpacity="0.45"
              >
                IN
              </text>

              {/* Switch contacts: open → snaps shut */}
              <circle cx="170" cy="100" r="2.6" fill="#C9CED6" />
              <circle cx="224" cy="100" r="2.6" fill="#C9CED6" />
              <line
                x1="170"
                y1="100"
                x2="216"
                y2="86"
                className="socket-off"
                stroke="#C9CED6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="170"
                y1="100"
                x2="224"
                y2="100"
                className="socket-on"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ stroke: "#FFBD2E" }}
              />
              <text
                x="176"
                y="110"
                className="mono"
                fontSize="5"
                fill="#fff"
                fillOpacity="0.45"
              >
                COM
              </text>
              <text
                x="224"
                y="112"
                textAnchor="middle"
                className="mono"
                fontSize="5"
                fill="#fff"
                fillOpacity="0.45"
              >
                NO
              </text>
              <path
                d="M170 100 V132"
                fill="none"
                stroke="#3A3F47"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <text
                x="170"
                y="144"
                textAnchor="middle"
                className="mono"
                fontSize="5.5"
                fill="#fff"
                fillOpacity="0.4"
              >
                AC IN
              </text>

              {/* Load wire: relay → bulb */}
              <path
                d="M224 100 H310"
                fill="none"
                stroke="#3A3F47"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M224 100 H310"
                pathLength={100}
                className="socket-wire-load"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ stroke: "#FFBD2E" }}
              />

              {/* Bulb (off) */}
              <circle
                cx="322"
                cy="72"
                r="22"
                fill="#1A1A18"
                stroke="#4A4F57"
                strokeWidth="1.5"
              />
              <path
                d="M312 84 V74 L317 68 L322 74 L327 68 L332 74 V84"
                fill="none"
                stroke="#55554D"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <rect
                x="310"
                y="92"
                width="24"
                height="12"
                rx="2"
                fill="#7A7F88"
              />
              <path
                d="M310 95 H334 M310 98.5 H334 M310 102 H334"
                stroke="#50555D"
                strokeWidth="1"
                fill="none"
              />
              <rect
                x="315"
                y="104"
                width="14"
                height="5"
                rx="2"
                fill="#A0A6AE"
              />
              <text
                x="322"
                y="124"
                textAnchor="middle"
                className="mono"
                fontSize="5.5"
                fill="#fff"
                fillOpacity="0.4"
              >
                LOAD
              </text>

              {/* Bulb (on) */}
              <g className="socket-glow">
                <circle cx="322" cy="72" r="52" fill="url(#socket-halo)" />
                <circle
                  cx="322"
                  cy="72"
                  r="22"
                  fill="url(#socket-glassfill)"
                  opacity="0.9"
                />
                <path
                  d="M312 84 V74 L317 68 L322 74 L327 68 L332 74 V84"
                  fill="none"
                  stroke="#FFF6D6"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {RAY_ANGLES.map((deg) => {
                  const a = (deg * Math.PI) / 180;
                  return (
                    <line
                      key={deg}
                      x1={322 + Math.cos(a) * 29}
                      y1={72 + Math.sin(a) * 29}
                      x2={322 + Math.cos(a) * 37}
                      y2={72 + Math.sin(a) * 37}
                      stroke="#FFD35A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  );
                })}
              </g>
            </svg>

            <div className="absolute left-2 top-2 flex items-center gap-1 mono text-[7px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16C784] animate-pulse" />{" "}
              ESP32 • REMOTE LINK
            </div>
            <div className="absolute right-2 top-2 h-3 w-[84px] mono text-[7px]">
              <span className="socket-lo absolute right-0 top-0 whitespace-nowrap text-white/70">
                ● IDLE
              </span>
              <span className="socket-tx absolute right-0 top-0 whitespace-nowrap text-[#FFBD2E]">
                ● SIGNAL SENT
              </span>
              <span className="socket-on absolute right-0 top-0 whitespace-nowrap text-[#16C784]">
                ● RELAY ON
              </span>
            </div>
            <div className="absolute bottom-2 left-2 mono text-[7px] text-white/70">
              RELAY MODULE
            </div>
            <div className="absolute bottom-2 right-2 h-3 w-[60px] mono text-[7px]">
              <span className="socket-lo absolute right-0 top-0 whitespace-nowrap text-white/70">
                LOAD OFF
              </span>
              <span className="socket-hi absolute right-0 top-0 whitespace-nowrap text-[#FFBD2E]">
                LOAD ON
              </span>
            </div>
          </div>

          {/* Command log */}
          <div className="mt-3 rounded-lg bg-[#1E1E1A] border border-[#2A2A26] p-2.5">
            <div className="flex justify-between mono text-[7px] text-white/70">
              <span>Command log</span>
              <span className="inline-flex items-center gap-1">
                ESP32 <ArrowRight aria-hidden="true" size={9} /> RELAY
              </span>
            </div>
            <div className="mt-2 mono text-[8px] leading-3.5">
              <div className="relative h-3.5">
                <span className="socket-hi absolute left-0 top-0 whitespace-nowrap text-(--accent-2)">
                  &gt; gpio(23, HIGH)
                </span>
                <span className="socket-lo absolute left-0 top-0 whitespace-nowrap text-white/70">
                  &gt; gpio(23, LOW) // idle
                </span>
              </div>
              <div className="socket-on whitespace-nowrap text-white/70">
                &gt; relay.close()
              </div>
              <div className="socket-glow whitespace-nowrap text-[#FFBD2E]">
                &gt; load.on() // bulb lit
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mono text-[8px] tracking-[0.2em] uppercase text-white/70">
          Simulated Signal Flow — Not Live Data
        </div>
      </div>
    </div>
  );
}

export default function SocketCard({ project: p }: { project: Project }) {
  return (
    <article
      id={`project-${p.n}`}
      aria-labelledby={`project-${p.n}-title`}
      className="group relative rounded-[28px] border overflow-hidden grid md:grid-cols-12 mb-6"
      style={{ borderColor: "var(--control-line)", background: "var(--card)" }}
    >
      <div className="md:col-span-5 p-7 md:p-9 flex flex-col">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-current opacity-20" />
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            <time dateTime={p.year}>{p.year}</time> • Internet of Things
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
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-5 rounded-full bg-(--text) text-(--bg) inline-flex items-center gap-2 mono text-[10px] tracking-widest uppercase"
            >
              <GithubIcon size={12} /> GitHub
            </a>
          )}
          <span
            className="h-9 px-5 rounded-full border inline-flex items-center mono text-[10px] tracking-widest uppercase text-(--text-2)"
            style={{ borderColor: "var(--control-line)" }}
          >
            Prototype
          </span>
        </div>
      </div>

      <SocketPreview />
    </article>
  );
}
