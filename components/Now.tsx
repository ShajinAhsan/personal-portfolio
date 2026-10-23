"use client";

import { now } from "@/data/now";
import { useEffect, useRef } from "react";

/* ── Simulation timeline ──
   One 10s loop. A gust shoves the drone off its hover point, it overshoots, corrects and locks back on.
   Every moving part below shares these keyframes, so they stay in sync. */
const T = 10;
const KEY_TIMES = [0, 0.1, 0.18, 0.26, 0.36, 0.46, 0.56, 0.66, 0.76, 1];
// x offset, y offset, roll (deg) at each key time
const PROFILE: [number, number, number][] = [
  [0, 0, 0],
  [0, 0, 0],
  [100, 12, 16],
  [160, 20, 22],
  [50, 5, -12],
  [-38, -3, -6],
  [16, 2, 5],
  [-6, 0, -2],
  [0, 0, 0],
  [0, 0, 0],
];

const keyTimes = KEY_TIMES.join(";");
const splines = KEY_TIMES.slice(1)
  .map(() => "0.42 0 0.58 1")
  .join(";");
const driftValues = PROFILE.map(([x, y]) => `${x} ${y}`).join(";");
const rollValues = PROFILE.map(([, , r]) => `${r} 0 0`).join(";");
const shadowValues = PROFILE.map(([x]) => `${x} 0`).join(";");
const rollReadings = PROFILE.map(([, , r]) => r / 30); // -1..1 along the gauge
const driftReadings = PROFILE.map(([x]) => x / 160);

const ANCHOR = { x: 500, y: 185 };
const HORIZON = 275;
const GREEN = "#16C784";
const AMBER = "#FFBD2E";
const RED = "#FF5F57";

const MOTORS = [
  { x: -105, y: -16, far: true },
  { x: 105, y: -16, far: true },
  { x: -128, y: 26, far: false },
  { x: 128, y: 26, far: false },
];

const FLOOR_X = Array.from({ length: 19 }, (_, i) => 500 + (i - 9) * 130);
const FLOOR_Y = [1, 2, 3, 4, 5, 6].map((k) => HORIZON + 165 * (k / 6) ** 2);
const SCAN_LINES = Array.from({ length: 9 }, (_, i) => i);
const STREAKS = [
  { y: 70, len: 120 },
  { y: 105, len: 80 },
  { y: 140, len: 150 },
  { y: 175, len: 100 },
  { y: 210, len: 130 },
  { y: 245, len: 90 },
];
const sideFade =
  "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)";

function Motion({
  type,
  values,
  begin,
}: {
  type: "translate" | "rotate";
  values: string;
  begin?: string;
}) {
  return (
    <animateTransform
      attributeName="transform"
      type={type}
      values={values}
      keyTimes={keyTimes}
      calcMode="spline"
      keySplines={splines}
      dur={`${T}s`}
      begin={begin}
      repeatCount="indefinite"
    />
  );
}

function Props({ spin }: { spin: boolean }) {
  return (
    <g
      fill="currentColor"
      fillOpacity="0.05"
      stroke="currentColor"
      strokeOpacity="0.55"
      strokeWidth="1.5"
    >
      {MOTORS.map((m) => (
        <ellipse
          key={`${m.x}-${m.y}`}
          cx={m.x}
          cy={m.y - 9}
          rx={m.far ? 46 : 54}
          ry={m.far ? 10 : 12.5}
          strokeDasharray="26 12"
          className={spin ? "fl-prop" : undefined}
        />
      ))}
    </g>
  );
}

// Center-zero gauge: the marker slides along a 120-wide track as the value changes.
function GaugeRow({
  x,
  y,
  label,
  readings,
}: {
  x: number;
  y: number;
  label: string;
  readings: number[];
}) {
  const center = x + 68 + 60;
  const values = readings.map((v) => center + v * 60 - 2).join(";");
  return (
    <g>
      <text
        x={x}
        y={y}
        className="mono"
        fontSize="10"
        fill="currentColor"
        fillOpacity="0.75"
        letterSpacing="2"
      >
        {label}
      </text>
      <line
        x1={x + 68}
        y1={y - 3}
        x2={x + 188}
        y2={y - 3}
        stroke="currentColor"
        strokeOpacity="0.25"
      />
      <line
        x1={center}
        y1={y - 8}
        x2={center}
        y2={y + 2}
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <rect
        x={center - 2}
        y={y - 9}
        width="4"
        height="12"
        rx="1.5"
        style={{ fill: "var(--accent)" }}
      >
        <animate
          attributeName="x"
          values={values}
          keyTimes={keyTimes}
          calcMode="spline"
          keySplines={splines}
          dur={`${T}s`}
          repeatCount="indefinite"
        />
      </rect>
    </g>
  );
}

function smoothPath(pts: number[][]) {
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [x, y] = pts[i];
    d += ` Q${px.toFixed(1)} ${py.toFixed(1)} ${((px + x) / 2).toFixed(1)} ${((py + y) / 2).toFixed(1)}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${last[0]} ${last[1]}`;
}

// Same slot as GaugeRow: label on the left, a small live graph in the track area
function DriftTrace({ x, y, label }: { x: number; y: number; label: string }) {
  const x0 = x + 68,
    w = 120,
    h = 26,
    mid = y - 3;
  const pts = driftReadings.map((v, i) => [
    x0 + KEY_TIMES[i] * w,
    mid - v * (h / 2 - 2),
  ]);
  return (
    <g>
      <text
        x={x}
        y={y}
        className="mono"
        fontSize="10"
        fill="currentColor"
        fillOpacity="0.75"
        letterSpacing="2"
      >
        {label}
      </text>
      <clipPath id="fl-drift-clip">
        <rect x={x0} y={mid - h / 2 - 2} height={h + 4} width="0">
          <animate
            attributeName="width"
            values={`0;${w};${w}`}
            keyTimes="0;0.95;1"
            dur={`${T}s`}
            repeatCount="indefinite"
          />
        </rect>
      </clipPath>
      <line
        x1={x0}
        y1={mid}
        x2={x0 + w}
        y2={mid}
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeDasharray="2 4"
      />
      <line
        x1={x0}
        y1={mid - h / 2}
        x2={x0}
        y2={mid + h / 2}
        stroke="currentColor"
        strokeOpacity="0.25"
      />
      <path
        d={smoothPath(pts)}
        clipPath="url(#fl-drift-clip)"
        fill="none"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ stroke: "var(--accent)" }}
      />
      <line
        x1="0"
        y1={mid - h / 2 - 2}
        x2="0"
        y2={mid + h / 2 + 2}
        stroke="currentColor"
        strokeOpacity="0.4"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values={`${x0} 0;${x0 + w} 0;${x0 + w} 0`}
          keyTimes="0;0.95;1"
          dur={`${T}s`}
          repeatCount="indefinite"
        />
      </line>
    </g>
  );
}

function DroneScene() {
  return (
    <svg
      viewBox="0 0 1000 440"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Simulation of a drone being pushed by a gust of wind and stabilizing back onto its hover point"
      className="absolute inset-0 h-full w-full"
      style={{ color: "var(--text)" }}
    >
      <defs>
        <radialGradient id="fl-shadow">
          <stop
            offset="0"
            style={{ stopColor: "var(--text)", stopOpacity: 0.35 }}
          />
          <stop
            offset="1"
            style={{ stopColor: "var(--text)", stopOpacity: 0 }}
          />
        </radialGradient>
        <linearGradient
          id="fl-floor"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1={HORIZON}
          x2="0"
          y2="440"
        >
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.35" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="0.75" stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Drone body, reused for the main drone and its motion trail */}
        <g id="fl-body">
          <g stroke="currentColor" strokeLinecap="round" fill="none">
            <path
              d="M0 0 L-105 -16 M0 0 L105 -16"
              strokeWidth="6"
              strokeOpacity="0.35"
            />
            <path
              d="M0 0 L-128 26 M0 0 L128 26"
              strokeWidth="8"
              strokeOpacity="0.5"
            />
            <path
              d="M-22 18 L-30 44 M22 18 L30 44 M-36 44 H-22 M36 44 H22"
              strokeWidth="2.5"
              strokeOpacity="0.45"
            />
          </g>
          {MOTORS.map((m) => (
            <g key={`${m.x}-${m.y}`}>
              <ellipse
                cx={m.x}
                cy={m.y}
                rx="13"
                ry="6.5"
                stroke="currentColor"
                strokeOpacity="0.7"
                style={{ fill: "var(--card)" }}
              />
              <circle
                cx={m.x}
                cy={m.y + 8}
                r="2.4"
                fill={m.far ? GREEN : RED}
              />
            </g>
          ))}
          <rect
            x="-36"
            y="-19"
            width="72"
            height="36"
            rx="13"
            stroke="currentColor"
            strokeOpacity="0.7"
            strokeWidth="1.5"
            style={{ fill: "var(--card)" }}
          />
          <rect
            x="-20"
            y="-11"
            width="40"
            height="6"
            rx="3"
            style={{ fill: "var(--accent-2)" }}
          />
          <circle
            cx="0"
            cy="11"
            r="7"
            fill="#111"
            stroke="currentColor"
            strokeOpacity="0.6"
          />
          <circle cx="-2" cy="9" r="2" fill="#fff" fillOpacity="0.7" />
        </g>
      </defs>

      {/* Wind streaks: only fly past during the gust */}
      <g
        className="fl-live"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        {STREAKS.map((s, i) => {
          const a = 0.09 + i * 0.012;
          return (
            <line key={s.y} x1="0" y1={s.y} x2={s.len} y2={s.y}>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="-260 0;-260 0;1260 0;1260 0"
                keyTimes={`0;${a};${a + 0.18};1`}
                dur={`${T}s`}
                repeatCount="indefinite"
              />
            </line>
          );
        })}
      </g>

      {/* Floor */}
      <g fill="none">
        {/* Static lines: faded with a gradient stroke (no mask = cheaper) */}
        <g stroke="url(#fl-floor)">
          <line
            x1="0"
            y1={HORIZON}
            x2="1000"
            y2={HORIZON}
            strokeOpacity="0.3"
          />
          <g strokeOpacity="0.14">
            {FLOOR_X.map((x) => (
              <line key={x} x1="500" y1={HORIZON} x2={x} y2="440" />
            ))}
          </g>
          <g strokeOpacity="0.14" className="fl-hstatic">
            {FLOOR_Y.map((y) => (
              <line key={y} x1="-200" y1={y} x2="1200" y2={y} />
            ))}
          </g>
        </g>

        {/* Scan lines: plain stroke, faded in and out by the CSS keyframes */}
        <g stroke="currentColor" strokeOpacity="0.2">
          {SCAN_LINES.map((i) => (
            <line
              key={i}
              x1="-200"
              y1={HORIZON}
              x2="1200"
              y2={HORIZON}
              className="fl-hline"
              style={{ animationDelay: `${-(i * 3) / SCAN_LINES.length}s` }}
            />
          ))}
        </g>
      </g>

      {/* Hover target on the floor: changes color with the control state */}
      <g
        transform={`translate(${ANCHOR.x} 378)`}
        fill="none"
        strokeWidth="1.6"
        stroke={GREEN}
      >
        <animate
          attributeName="stroke"
          calcMode="discrete"
          dur={`${T}s`}
          repeatCount="indefinite"
          keyTimes="0;0.1;0.28;0.72;1"
          values={`${GREEN};${RED};${AMBER};${GREEN};${GREEN}`}
        />
        <ellipse cx="0" cy="0" rx="130" ry="20" strokeDasharray="5 6" />
        {/* Lock-on pulse ring */}
        <ellipse cx="0" cy="0" rx="130" ry="20" strokeWidth="1.2" opacity="0">
          <animate
            attributeName="rx"
            values="130;130;130;175;175"
            keyTimes="0;0.72;0.73;0.86;1"
            dur={`${T}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="20;20;20;27;27"
            keyTimes="0;0.72;0.73;0.86;1"
            dur={`${T}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0;0.9;0;0"
            keyTimes="0;0.72;0.73;0.86;1"
            dur={`${T}s`}
            repeatCount="indefinite"
          />
        </ellipse>
        <path
          d="M-156 0 H-120 M120 0 H156 M0 -26 V-14 M0 14 V26"
          strokeLinecap="round"
        />
        <circle cx="0" cy="0" r="2.5" fill="currentColor" stroke="none" />
      </g>

      {/* Live simulation */}
      <g className="fl-live">
        {/* Shadow follows the drone's drift */}
        <g transform="translate(500 378)">
          <g>
            <Motion type="translate" values={shadowValues} />
            <ellipse cx="0" cy="0" rx="110" ry="15" fill="url(#fl-shadow)" />
          </g>
        </g>

        {/* Motion trail */}
        {[
          { delay: "0.12s", opacity: 0.2 },
          { delay: "0.24s", opacity: 0.12 },
          { delay: "0.36s", opacity: 0.06 },
        ].map((g) => (
          <g
            key={g.delay}
            transform={`translate(${ANCHOR.x} ${ANCHOR.y})`}
            opacity={g.opacity}
          >
            <g>
              <Motion type="translate" values={driftValues} begin={g.delay} />
              <g>
                <Motion type="rotate" values={rollValues} begin={g.delay} />
                <use href="#fl-body" />
              </g>
            </g>
          </g>
        ))}

        {/* The drone: gentle hover bob → gust drift → roll */}
        <g transform={`translate(${ANCHOR.x} ${ANCHOR.y})`}>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;0 -6;0 0"
              keyTimes="0;0.5;1"
              calcMode="spline"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
              dur="3.2s"
              repeatCount="indefinite"
            />
            <g>
              <Motion type="translate" values={driftValues} />

              {/* Level reference ring: stays flat while the drone tilts */}
              <g
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <ellipse
                  cx="0"
                  cy="44"
                  rx="205"
                  ry="34"
                  strokeDasharray="3 7"
                />
                <path d="M-228 44 H-205 M205 44 H228" />
              </g>

              {/* Corrective thrust arrows */}
              <g
                fill="none"
                stroke={AMBER}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g transform="translate(244 6)" opacity="0">
                  <animate
                    attributeName="opacity"
                    calcMode="discrete"
                    dur={`${T}s`}
                    repeatCount="indefinite"
                    keyTimes="0;0.2;0.42;1"
                    values="0;1;0;0"
                  />
                  <path d="M0 -8 L-9 0 L0 8" />
                  <path d="M16 -8 L7 0 L16 8" strokeOpacity="0.6" />
                  <path d="M32 -8 L23 0 L32 8" strokeOpacity="0.3" />
                </g>
                <g transform="translate(-244 6)" opacity="0">
                  <animate
                    attributeName="opacity"
                    calcMode="discrete"
                    dur={`${T}s`}
                    repeatCount="indefinite"
                    keyTimes="0;0.42;0.58;1"
                    values="0;1;0;0"
                  />
                  <path d="M0 -8 L9 0 L0 8" />
                  <path d="M-16 -8 L-7 0 L-16 8" strokeOpacity="0.6" />
                  <path d="M-32 -8 L-23 0 L-32 8" strokeOpacity="0.3" />
                </g>
              </g>

              <g>
                <Motion type="rotate" values={rollValues} />
                <use href="#fl-body" />
                <Props spin />
              </g>
            </g>
          </g>
        </g>

        {/* Status */}
        <g className="mono" fontSize="14" letterSpacing="3" textAnchor="middle">
          <text x="500" y="52" fill={GREEN}>
            <animate
              attributeName="opacity"
              calcMode="discrete"
              dur={`${T}s`}
              repeatCount="indefinite"
              keyTimes="0;0.1;0.72;1"
              values="1;0;1;1"
            />
            ● LOCKED
          </text>
          <text x="500" y="52" fill={RED} opacity="0">
            <animate
              attributeName="opacity"
              calcMode="discrete"
              dur={`${T}s`}
              repeatCount="indefinite"
              keyTimes="0;0.1;0.28;1"
              values="0;1;0;0"
            />
            ● GUST DETECTED
          </text>
          <text x="500" y="52" fill={AMBER} opacity="0">
            <animate
              attributeName="opacity"
              calcMode="discrete"
              dur={`${T}s`}
              repeatCount="indefinite"
              keyTimes="0;0.28;0.72;1"
              values="0;1;0;0"
            />
            ● CORRECTING
          </text>
        </g>

        {/* Telemetry */}
        <GaugeRow x={270} y={424} label="ROLL" readings={rollReadings} />
        <DriftTrace x={540} y={424} label="DRIFT" />
      </g>

      {/* Still frame for visitors who prefer reduced motion */}
      <g className="fl-still">
        <ellipse cx="500" cy="378" rx="110" ry="15" fill="url(#fl-shadow)" />
        <g transform={`translate(${ANCHOR.x} ${ANCHOR.y})`}>
          <g
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1.4"
            strokeLinecap="round"
          >
            <ellipse cx="0" cy="44" rx="205" ry="34" strokeDasharray="3 7" />
            <path d="M-228 44 H-205 M205 44 H228" />
          </g>
          <use href="#fl-body" />
          <Props spin={false} />
        </g>
        <text
          x="500"
          y="52"
          className="mono"
          fontSize="14"
          letterSpacing="3"
          textAnchor="middle"
          fill={GREEN}
        >
          ● LOCKED
        </text>
      </g>

      <text
        x="500"
        y="74"
        textAnchor="middle"
        className="mono"
        fontSize="9"
        letterSpacing="2"
        fill="currentColor"
        fillOpacity="0.7"
      >
        SIMULATED — NOT FLIGHT DATA
      </text>
    </svg>
  );
}

export default function Now() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Pause SMIL + CSS animations while offscreen or when the tab is hidden
  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = wrap?.querySelector("svg");
    if (!wrap || !svg) return;

    let inView = false;
    const apply = () => {
      const run = inView && !document.hidden;
      wrap.dataset.paused = run ? "false" : "true";
      if (run) svg.unpauseAnimations();
      else svg.pauseAnimations();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        apply();
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);
    document.addEventListener("visibilitychange", apply);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", apply);
    };
  }, []);

  return (
    <section
      id="now"
      className="mx-auto max-w-[1320px] px-6 lg:px-8 py-14 md:py-24 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mono text-[11px] tracking-[0.2em] uppercase mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-(--text-2)">(05) — Now</span>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px]"
              style={{ borderColor: "var(--line)", background: "var(--card)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#16C784] animate-pulse" />
              Currently • {now.label}
            </span>
          </div>
          <h2 className="text-[36px] md:text-[60px] font-black tracking-[-0.04em] leading-[0.9]">
            {now.heading[0]}
            <br />
            {now.heading[1]}
          </h2>
        </div>
        <div className="mono text-[12px] leading-[1.5] max-w-[32ch]">
          <p className="text-(--text-2)">{now.blurb}</p>
          <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            Updated {now.updated}
          </p>
        </div>
      </div>

      <div
        ref={wrapRef}
        className="relative mt-10 md:mt-14 w-full aspect-4/3 sm:aspect-video lg:aspect-1000/440"
        style={{ maskImage: sideFade, WebkitMaskImage: sideFade }}
      >
        <DroneScene />
      </div>

      <dl
        className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-6"
        style={{ borderColor: "var(--line)" }}
      >
        {now.facts.map((f) => (
          <div key={f.k}>
            <dt className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
              {f.k}
            </dt>
            <dd className="mt-1 text-[15px] font-medium">{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
