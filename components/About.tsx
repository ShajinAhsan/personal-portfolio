"use client";

import { games } from "@/data/profile";
import { ChevronDown, Gamepad2 } from "lucide-react";
import { useState } from "react";
import GamesList from "./GameList";
import Skills from "./Skills";

export default function About() {
  const [introExpanded, setIntroExpanded] = useState(false);

  return (
    <section
      id="about"
      className="mx-auto max-w-330 px-6 lg:px-8 py-14 md:py-20 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-23 flex flex-col gap-4">
            <div className="mono text-[11px] tracking-[0.2em] uppercase text-(--text-2)">
              (02) — About
            </div>
            <div
              className="h-px w-12"
              style={{ background: "var(--line-strong)" }}
            />
            <div className="hidden md:block mono text-[11px] leading-[1.6] text-(--text-2) max-w-[20ch]">
              Input: Curiosity
              <br />
              Output: Working things
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="text-[30px] md:text-[42px] font-bold tracking-[-0.03em] leading-[0.95] max-w-[22ch]">
                A CSE student learning by building, experimenting, and
                exploring.
              </h2>

              <div className="mt-7 max-w-[58ch]">
                <div
                  id="about-intro"
                  className={`relative space-y-4 text-[15px] leading-[1.75] text-(--text-2) transition-[max-height] duration-300 md:max-h-none md:overflow-visible ${
                    introExpanded
                      ? "max-h-none"
                      : "max-h-[220px] overflow-hidden after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-20 after:bg-linear-to-t after:from-(--bg) after:to-transparent after:content-[''] md:after:hidden"
                  }`}
                >
                  <p>
                    I&apos;m{" "}
                    <span className="font-semibold text-(--text)">
                      Shajin Ahsan Shuvo
                    </span>
                    , a{" "}
                    <span className="font-semibold">
                      Computer Science &amp; Engineering student at CUET
                    </span>{" "}
                    from Madarganj, Jamalpur, currently living in Chittagong.
                    I&apos;ve always enjoyed understanding how things work, and
                    engineering gives me an opportunity to explore that interest
                    through practical projects and continuous learning.
                  </p>

                  <p>
                    I work on projects across software and hardware, from
                    full-stack web applications using MERN and related
                    technologies to small electronics projects with Arduino and
                    ESP32 boards. Some of my experiments include a
                    remote-controlled wall socket, a line-following car, and an
                    ongoing prototype of a gyro-stabilized drone. Each project
                    gives me something new to learn.
                  </p>

                  <p>
                    Outside of development, I enjoy using Linux and exploring
                    different distributions, including Debian, Ubuntu, Kali, and
                    Arch. I&apos;m also interested in cybersecurity, DevOps,
                    astronomy, and archaeology. In my free time, I usually
                    unwind with
                    <span className="border-b border-(--accent-2)">
                      {" "}
                      story-driven games.
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIntroExpanded((expanded) => !expanded)}
                  aria-controls="about-intro"
                  aria-expanded={introExpanded}
                  className="mt-2 inline-flex items-center gap-1.5 mono text-[10px] tracking-[0.14em] uppercase text-(--text-2) transition-colors hover:text-(--text) md:hidden cursor-pointer"
                >
                  {introExpanded ? "Read less" : "Read more"}
                  <ChevronDown
                    aria-hidden="true"
                    size={13}
                    className={`transition-transform ${
                      introExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`mt-8 rounded-[18px] border p-4 bg-(--bg-2) flex-wrap gap-3 items-center md:flex ${
                  introExpanded ? "flex" : "hidden"
                }`}
                style={{ borderColor: "var(--line)" }}
              >
                <div className="flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase text-(--text-2)">
                  <Gamepad2 size={14} /> Plays
                </div>
                <GamesList games={games} />
              </div>
            </div>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
