import { profile } from "@/data/profile";
import { projectCount } from "@/data/projects";
import { Cpu, Mail, Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-330 px-6 lg:px-8 pt-8 md:pt-12 pb-14">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-130 w-130 rounded-full blur-[90px] opacity-[0.12]"
        style={{ background: "var(--accent-2)" }}
      />
      <div
        className="pointer-events-none absolute top-32 right-[22%] h-55 w-55 rounded-full blur-2xl opacity-[0.18]"
        style={{ background: "var(--bd-green)" }}
      />
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
              Chittagong, BD — 22°20'N
            </span>
            {/* <span className="h-1 w-1 rounded-full bg-(--text-3)" /> */}
            {/* <span className="mono text-[10px] tracking-[0.18em] uppercase">
              {profile.studentId}
            </span> */}
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="mono text-[10px] tracking-[0.18em] uppercase opacity-50">
              Portfolio / 01
            </span>
          </div>
        </div>

        <div className="col-span-12 grid lg:grid-cols-12 gap-8 items-start">
          <div className="relative isolate lg:col-span-7 order-2 lg:order-1">
            <div
              className="pointer-events-none absolute -top-8 -left-10 -z-10 h-85 w-[min(560px,90%)] rounded-full blur-[100px] opacity-25 dark:opacity-40"
              style={{
                background:
                  "radial-gradient(circle, var(--bd-red) 0%, var(--accent-2) 30%, transparent 100%)",
              }}
            />
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
                <sup className="mono text-[11px] md:text-[13px] font-medium tracking-widest ml-2 opacity-40">
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
                className="group h-11.5 px-7 rounded-full bg-(--text) text-(--bg) mono text-[12px] tracking-wide sm:tracking-[0.14em] uppercase font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
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
              {/* for later */}
              {/* 
              <div className="hidden p-6 md:p-8 flex-col justify-between">
                <div className="flex justify-between">
                  <div className="mono text-[10px] tracking-[0.2em] uppercase opacity-50">
                    Studio / Desk Setup — Chittagong
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                    <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2 w-2 rounded-full bg-[#28CA42]" />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-3 mt-6">
                  <div className="col-span-8">
                    <div
                      className="h-full min-h-[200px] rounded-[18px] border bg-[var(--card)] p-5 flex flex-col justify-between relative overflow-hidden"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <div
                        className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full blur-[30px] opacity-20"
                        style={{ background: "var(--accent)" }}
                      />
                      <div className="mono text-[10px] tracking-widest uppercase opacity-40">
                        Now Exploring
                      </div>
                      <div className="relative">
                        <div className="text-[26px] md:text-[30px] font-bold tracking-[-0.03em] leading-[0.95]">
                          Hardware ×
                          <br />
                          Software
                          <br />
                          Interfaces
                        </div>
                        <div className="mt-3 mono text-[11px] opacity-60 leading-relaxed">
                          Prototyping ideas at CUET labs. Breaking, fixing,
                          learning.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-4 flex flex-col gap-3">
                    <div className="rounded-[18px] bg-[var(--text)] text-[var(--bg)] p-4 flex-1 flex flex-col justify-between">
                      <div className="mono text-[9px] tracking-[0.2em] uppercase opacity-60">
                        Experience
                      </div>
                      <div className="text-[42px] font-black leading-none tracking-[-0.05em]">
                        02<span className="text-[18px] align-super">+</span>
                      </div>
                      <div className="mono text-[10px] opacity-70 leading-tight">
                        Years building
                        <br />
                        side projects
                      </div>
                    </div>

                    <div
                      className="rounded-[18px] border p-4 bg-[var(--card)]"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <div className="mono text-[9px] tracking-[0.2em] uppercase opacity-40">
                        Stack Signal
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {["C/C++", "React", "Systems", "IoT"].map((tag) => (
                          <span
                            key={tag}
                            className="mono text-[9px] px-2 py-1 rounded-full border"
                            style={{ borderColor: "var(--line)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

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
                  <div className="absolute top-3 left-3 mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/90 text-black backdrop-blur">
                    Flag • Intentional
                  </div>
                  {/* <div className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[12px]">
                    🇧🇩
                  </div> */}
                </div>
              </div>

              <button className="mt-6 p-2 hidden md:flex items-center gap-2 mono text-[10px] tracking-[0.18rem] uppercase opacity-30 cursor-pointer animate-pulse">
                <span>Scroll</span>
                <span className="h-3.5 w-px bg-current" />
                <span>↓</span>
              </button>

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
