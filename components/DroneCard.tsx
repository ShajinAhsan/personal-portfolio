import type { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const TRACE_PATH =
  "M0 40.0 C10.1 40.0 13.9 68.6 24.0 68.6 C41.6 68.6 48.4 23.1 66.0 23.1 C81.1 23.1 86.9 49.1 102.0 49.1 C115.9 49.1 121.1 35.5 135.0 35.5 C147.6 35.5 152.4 42.0 165.0 42.0 C177.6 42.0 182.4 39.2 195.0 39.2 C207.6 39.2 212.4 40.0 225.0 40.0 C256.5 40.0 268.5 40.0 300.0 40.0";

function DronePreview() {
  return (
    <div data-pause=""
      className="relative min-h-55 md:min-h-0 p-3 bg-[#0F0F0E] md:col-span-7 md:order-first"
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-[20px] border overflow-hidden relative p-5 flex flex-col justify-between bg-[#161614]"
        style={{
          borderColor: "var(--screen-line)",
        }}
      >
        <div className="flex justify-between items-center mono text-[9px] tracking-widest uppercase text-white/70">
          <span>Drone / Stabilize</span>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28CA42]" />
          </div>
        </div>

        <div className="mt-5">
          {/* Attitude view: the drone gets knocked over, then levels itself */}
          <div className="relative aspect-video lg:aspect-21/9 overflow-hidden rounded-xl border border-[#2A2A26] bg-[#0F0F0E]">
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-x-5 top-1/2 border-t border-dashed border-white/20" />
            <span className="absolute right-5 top-1/2 -translate-y-full pb-0.5 mono text-[7px] text-white/70">
              TARGET 0°
            </span>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="drone-tilt h-[70%] aspect-5/3">
                <svg viewBox="0 0 200 120" className="h-full w-full">
                  <line
                    x1="30"
                    y1="62"
                    x2="170"
                    y2="62"
                    stroke="#3A3A34"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M88 76 L80 92 M112 76 L120 92"
                    stroke="#55554D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="22"
                    y="56"
                    width="16"
                    height="12"
                    rx="3"
                    fill="#2A2A26"
                    stroke="#55554D"
                  />
                  <rect
                    x="162"
                    y="56"
                    width="16"
                    height="12"
                    rx="3"
                    fill="#2A2A26"
                    stroke="#55554D"
                  />
                  <ellipse
                    cx="30"
                    cy="52"
                    rx="26"
                    ry="3"
                    fill="#fff"
                    opacity="0.16"
                  />
                  <ellipse
                    cx="170"
                    cy="52"
                    rx="26"
                    ry="3"
                    fill="#fff"
                    opacity="0.16"
                  />
                  <rect
                    x="76"
                    y="48"
                    width="48"
                    height="28"
                    rx="9"
                    fill="#1E1E1A"
                    stroke="#55554D"
                  />
                  <circle
                    cx="100"
                    cy="62"
                    r="4"
                    style={{ fill: "var(--accent-2)" }}
                  />
                </svg>
              </div>
            </div>

            <div className="absolute left-2 top-2 flex items-center gap-1 mono text-[7px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16C784] animate-pulse" />{" "}
              MPU6050 • GYRO LIVE
            </div>
            <div className="absolute right-2 top-2 h-3 w-23 mono text-[7px]">
              <span className="drone-status-gust absolute right-0 top-0 whitespace-nowrap text-[#FF5F57]">
                ● GUST DETECTED
              </span>
              <span className="drone-status-fix absolute right-0 top-0 whitespace-nowrap text-[#FFBD2E]">
                ● PID CORRECTING
              </span>
              <span className="drone-status-ok absolute right-0 top-0 whitespace-nowrap text-[#16C784]">
                ● STABLE
              </span>
            </div>
            <div className="absolute bottom-2 left-2 mono text-[7px] text-white/70">
              ROLL AXIS
            </div>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-2">
            {/* Gyro trace */}
            <div className="col-span-3 rounded-lg bg-[#1E1E1A] border border-[#2A2A26] p-2">
              <div className="flex justify-between mono text-[7px] text-white/70">
                <span>Roll angle</span>
                <span className="inline-flex items-center gap-0.5">
                  ±22° <ArrowRight aria-hidden="true" size={8} /> 0°
                </span>
              </div>
              <div className="relative mt-1 h-14 overflow-hidden">
                <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/15" />
                <div className="drone-trace absolute inset-0">
                  <svg
                    viewBox="0 0 300 80"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                  >
                    <path
                      d={TRACE_PATH}
                      fill="none"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      style={{ stroke: "var(--accent-2)" }}
                    />
                  </svg>
                </div>
                <span
                  className="drone-cursor absolute inset-y-0 left-0 w-px"
                  style={{ background: "var(--accent-2)" }}
                />
              </div>
            </div>

            {/* Motor thrust */}
            <div className="col-span-2 rounded-lg bg-[#1E1E1A] border border-[#2A2A26] p-2">
              <div className="mono text-[7px] text-white/70">Motor thrust</div>
              <div className="mt-2 space-y-2">
                {(["L", "R"] as const).map((side) => (
                  <div key={side} className="flex items-center gap-1.5">
                    <span className="mono text-[7px] text-white/70 w-2">
                      {side}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded bg-[#2A2A26]">
                      <div
                        className={`h-full w-full origin-left rounded ${side === "L" ? "drone-motor-l" : "drone-motor-r"}`}
                        style={{ background: "var(--accent-2)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 mono text-[7px] text-white/70">PID: ON</div>
            </div>
          </div>
        </div>

        <div className="mt-5 mono text-[8px] tracking-[0.2em] uppercase text-white/70">
          Simulated Telemetry — Not Flight Data
        </div>
      </div>
    </div>
  );
}

export default function DroneCard({ project: p }: { project: Project }) {
  return <ProjectCard project={p} preview={<DronePreview />} />;
}
