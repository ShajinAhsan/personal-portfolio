import { profile } from "@/data/profile";
import { projectCount } from "@/data/projects";
import { Cpu, Mail, Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-330 px-6 lg:px-8 pt-8 md:pt-12 pb-14 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-130 w-130 rounded-full blur-[90px] opacity-[0.12]"
        style={{ background: "var(--bd-red)" }}
      />
      <div
        className="pointer-events-none absolute top-32 right-[22%] h-55 w-55 rounded-full blur-2xl opacity-[0.18]"
        style={{ background: "var(--bd-green)" }}
      />
      <div
        className="pointer-events-none absolute top-40 left-[40%] h-px w-30 hidden md:block"
        style={{ background: "var(--line-strong)" }}
      />

      <div className="relative grid grid-cols-12 gap-6">
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
              Chittagong, BD — 22°20'N
            </span>
            <span className="h-1 w-1 rounded-full bg-(--text-3)" />
            {/* <span className="mono text-[10px] tracking-[0.18em] uppercase">
              {profile.studentId}
            </span> */}
          </div>
          <div className="inline-flex items-center gap-2">
            <span
              className="h-1.5 w-4.5 rounded-full"
              style={{ background: "var(--bd-green)" }}
            />
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--bd-red)" }}
            />
            <span className="mono text-[10px] tracking-[0.18em] uppercase opacity-50">
              Portfolio / 01
            </span>
          </div>
        </div>

        <div className="col-span-12 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <h1 className="font-black leading-[0.85] tracking-[-0.04em] text-[14vw] md:text-[10vw] lg:text-[110px] xl:text-[128px] flex flex-col">
              <span className="flex items-baseline gap-[0.08em]">
                <span>SHAJIN</span>
                <span
                  className="hidden md:inline-block h-[0.11em] w-[0.9em] translate-y-[-0.22em] ml-[0.2em]"
                  style={{ background: "var(--line-strong)" }}
                />
              </span>
              <span className="flex flex-wrap items-baseline gap-[0.18em] mt-[-0.02em]">
                <span className="text-[0.72em] font-extrabold tracking-tighter opacity-[0.12]">
                  AHSAN
                </span>
                <span>SHUVO</span>
                <sup className="mono text-[11px] md:text-[13px] font-medium tracking-widest ml-2 opacity-40 translate-y-[-1.8em]">
                  ©2026
                </sup>
              </span>
            </h1>

            <div className="mt-6 md:mt-8 max-w-[56ch]">
              <p className="serif text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.02em] font-normal">
                Curious about everything.
                <br />
                <span className="italic opacity-60">
                  Certain about nothing.
                </span>
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] font-normal opacity-70 max-w-[44ch]">
                CSE student at CUET — obsessed with how things work, from
                relay-controlled sockets and line-followers to MERN apps and
                Linux terminals. I learn by shipping.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group h-11.5 px-7 rounded-full bg-(--text) text-(--bg) mono text-[12px] tracking-[0.14em] uppercase font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
              >
                View Work — {projectCount} Projects
                <span className="group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
              <a
                href={`mailto:${profile.personalEmail}`}
                className="h-11.5 px-7 rounded-full border mono text-[12px] tracking-[0.14em] uppercase font-medium inline-flex items-center gap-2 hover:bg-(--bg-2) transition"
                style={{ borderColor: "var(--line)" }}
              >
                <Mail size={14} /> Email Me
              </a>
            </div>

            <div
              className="mt-10 grid grid-cols-3 gap-4 border-t pt-6 max-w-105"
              style={{ borderColor: "var(--line)" }}
            >
              <div>
                <div className="mono text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1.5">
                  Based
                </div>
                <div className="text-[13px] font-medium leading-tight">
                  Chittagong
                  <br />
                  <span className="opacity-60">Madarganj / Dhaka origin</span>
                </div>
              </div>
              <div>
                <div className="mono text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1.5">
                  Studying
                </div>
                <div className="text-[13px] font-medium leading-tight">
                  CSE at CUET
                  <br />
                  <span className="opacity-60">{profile.studentId}</span>
                </div>
              </div>
              <div>
                <div className="mono text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1.5">
                  GitHub
                </div>
                <div className="text-[13px] font-medium leading-tight">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-(--bd-green) decoration-2"
                  >
                    {profile.githubHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
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
                className="absolute -bottom-6 -right-3 h-3 w-3 rounded-full md:h-4 md:w-4"
                style={{ background: "var(--bd-red)" }}
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
                    priority
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-[inherit]" />
                  <div className="absolute bottom-0 inset-x-0 h-[46%] bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 flex items-end justify-between gap-3">
                    <div>
                      <div className="mono text-[9px] tracking-[0.22em] uppercase text-white/70">
                        Formal Portrait — 2025
                      </div>
                      <div className="mt-1 text-white font-semibold text-[14px] leading-tight">
                        {profile.name}
                        <br />
                        <span className="font-normal text-white/70 text-[12px]">
                          CSE • CUET • Bangladesh
                        </span>
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
                  <div className="absolute top-3 left-3 mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/90 text-black backdrop-blur">
                    Flag • Intentional
                  </div>
                  {/* <div className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[12px]">
                    🇧🇩
                  </div> */}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between px-2">
                <div className="mono text-[10px] tracking-[0.18em] uppercase opacity-40">
                  {profile.institutionalEmail} • Institutional
                </div>
                <div className="hidden md:flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase opacity-30">
                  <span>Scroll</span>
                  <span className="h-3.5 w-px bg-current" />
                  <span>↓</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div
                  className="rounded-2xl border p-3.5 bg-(--bg-2)"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="flex items-center gap-2 mono text-[9px] tracking-[0.2em] uppercase opacity-50">
                    <Cpu size={12} /> Hardware
                  </div>
                  <div className="mt-2 text-[12px] font-medium leading-snug">
                    Line Follower • Drone MPU6050 • Relay Socket
                  </div>
                </div>
                <div
                  className="rounded-2xl border p-3.5 bg-(--card)"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="flex items-center gap-2 mono text-[9px] tracking-[0.2em] uppercase opacity-50">
                    <Terminal size={12} /> Systems
                  </div>
                  <div className="mt-2 text-[12px] font-medium leading-snug">
                    Debian, Kali, Arch, Ubuntu, ZorinOS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
