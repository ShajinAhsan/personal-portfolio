import { profile } from "@/data/profile";
import { projectCount } from "@/data/projects";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import TerminalCard from "./TerminalCard";
const glow = (color: string) =>
  `radial-gradient(closest-side, ${color} 0%, ${color} 15%, color-mix(in srgb, ${color} 60%, transparent) 55%, color-mix(in srgb, ${color} 20%, transparent) 78%, transparent 100%)`;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative mx-auto max-w-330 px-6 lg:px-8 pt-8 md:pt-12 pb-14"
    >
      <div
        className="pointer-events-none absolute top-40 left-[40%] h-px w-30 hidden md:block"
        style={{ background: "var(--line-strong)" }}
      />

      <div className="relative grid grid-cols-12 gap-y-6 md:gap-x-6">
        <div className="col-span-12 flex flex-wrap items-center gap-3 mb-1 md:mb-4">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--bd-green)" }}
            />
            <span className="mono text-[10px] tracking-[0.18em] uppercase">
              Chittagong, BD — 22°21&apos;N
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="mono text-[10px] tracking-[0.18em] uppercase text-(--text-2)">
              Portfolio / 01
            </span>
          </div>
        </div>

        <div className="col-span-12 grid lg:grid-cols-12 gap-8 items-start">
          <div className="relative isolate lg:col-span-7 order-2 lg:order-1">
            <div
              className="pointer-events-none absolute -z-10 top-[24%] left-[28%] h-140 w-140 sm:opacity-18 sm:w-190 -translate-x-1/2 -translate-y-1/2 opacity-[0.25]"
              style={{ background: glow("var(--accent-2)") }}
            />
            <div
              className="pointer-events-none absolute -z-10 top-[30%] left-[32%] h-85 w-85 sm:w-110 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
              style={{ background: glow("var(--bd-red)") }}
            />
            <h1
              id="hero-title"
              className="font-black leading-[0.85] tracking-[-0.04em] text-[14vw] md:text-[10vw] lg:text-[110px] xl:text-[128px] flex flex-col"
            >
              <span className="flex items-baseline gap-[0.08em]">
                <span>SHAJIN</span>
                <span
                  className="hidden md:inline-block h-[0.11em] w-[0.9em] translate-y-[-0.22em] ml-[0.2em]"
                  style={{ background: "var(--line-strong)" }}
                />
              </span>
              <span className="flex flex-wrap items-baseline gap-[0.18em] mt-[-0.02em]">
                <span className="text-[0.72em] font-extrabold tracking-tighter text-(--text-2) opacity-75">
                  AHSAN
                </span>
                <span>
                  SHUVO
                  <sub className="mono text-[11px] md:text-[13px] font-medium tracking-widest ml-2 text-(--text-2)">
                    ©2026
                  </sub>
                </span>
              </span>
            </h1>

            <div className="mt-6 md:mt-8 max-w-[56ch]">
              <p className="text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.02em] font-normal">
                22.36°N 91.78°E{" "}
                <span className="mt-1 block text-xs text-(--text-2) sm:mt-0 sm:inline">
                  EXPLORING THE KNOWN &amp; UNKNOWN
                </span>
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] font-normal text-(--text-2) max-w-[44ch]">
                I like understanding how things work, from simple electronics to
                software. Still learning, still experimenting, one project at a
                time.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group h-11.5 px-7 rounded-full bg-(--text) text-(--bg) mono text-[12px] tracking-wide sm:tracking-[0.14em] uppercase font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
              >
                View Work — {projectCount} Projects
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                  size={15}
                />
              </a>
              <a
                href={`mailto:${profile.personalEmail}`}
                className="h-11.5 px-7 rounded-full border mono text-[12px] tracking-[0.14em] uppercase font-medium inline-flex items-center gap-2 hover:bg-(--bg-2) transition"
                style={{ borderColor: "var(--line)" }}
              >
                <Mail size={14} /> Email Me
              </a>
            </div>
          </div>

          <div className="relative isolate lg:col-span-5 order-1 lg:order-2">
            <div
              className="pointer-events-none absolute -z-10 top-[20%] left-4/5 h-140 w-140 -translate-x-1/2 -translate-y-1/2 opacity-[0.15]"
              style={{ background: glow("var(--accent-2)") }}
            />
            <div
              className="pointer-events-none absolute -z-10 top-[20%] left-3/4 h-95 w-95 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]"
              style={{ background: glow("var(--bd-red)") }}
            />

            <div className="relative mx-auto lg:ml-auto max-w-105">
              <div
                className="absolute -top-4 -left-4 h-18 w-18 rounded-full border-[6px] hidden md:block"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--bd-green) 18%, transparent)",
                  background:
                    "color-mix(in srgb, var(--bd-green) 8%, transparent)",
                }}
              />
              <div
                className="relative rounded-[28px] md:rounded-4xl overflow-hidden border-[1.5px] p-1.5 bg-(--card) shadow-[0_24px_64px_-20px_rgba(0,0,0,0.28)]"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-[22px] md:rounded-[26px] bg-(--bg-2)">
                  <Image
                    src={profile.portrait}
                    alt="Shajin Ahsan Shuvo — Formal portrait with Bangladesh flag"
                    fill
                    preload
                    sizes="(min-width: 640px) 420px, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-[inherit]" />
                  <div className="absolute bottom-0 inset-x-0 h-[46%] bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 flex items-end justify-between">
                    <div>
                      <div className="mono text-[9px] tracking-[0.22em] uppercase text-white/70">
                        Formal Portrait — 2026
                      </div>
                      <div className="text-white font-semibold text-[14px] leading-tight">
                        {profile.name}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="h-2 w-6 rounded-full"
                        style={{ background: "var(--bd-green)" }}
                      />
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: "var(--bd-red)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-6 mb-6 lg:mt-16 lg:mb-0">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
