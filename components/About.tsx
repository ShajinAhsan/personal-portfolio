import { games, profile } from "@/data/profile";
import { Gamepad2 } from "lucide-react";
import Skills from "./Skills";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-330 px-6 lg:px-8 py-14 md:py-20 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-23 flex flex-col gap-4">
            <div className="mono text-[11px] tracking-[0.2em] uppercase opacity-40">
              (02) — About
            </div>
            <div
              className="h-px w-12"
              style={{ background: "var(--line-strong)" }}
            />
            <div className="hidden md:block mono text-[10px] leading-[1.6] opacity-40 max-w-[20ch]">
              Builder studying CSE at CUET. Hardware × Software. Bangladesh.
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="text-[30px] md:text-[42px] font-bold tracking-[-0.03em] leading-[0.95] max-w-[22ch]">
                A curiosity-driven CSE builder who takes things apart to build
                better.
              </h2>
              <div className="mt-7 space-y-4 text-[15px] leading-[1.75] opacity-80 max-w-[58ch]">
                <p>
                  I’m{" "}
                  <span className="font-semibold text-(--text)">
                    {profile.name}
                  </span>{" "}
                  — from Madarganj, now in Chittagong. Studying{" "}
                  <span className="font-semibold">
                    Computer Science &amp; Engineering at CUET
                  </span>
                  . I came to engineering because I like taking things apart. I
                  stayed because I like putting better things back together.
                </p>
                <p>
                  I split time between core CS fundamentals, MERN web dev, and
                  hands-on hardware — Arduino Uno R3, Nano, ESP32, ESP-01, relay
                  modules, MPU6050. Built a remote-controlled wall socket, a
                  line-following car, and currently prototyping a drone with
                  gyro stabilization.
                </p>
                <p className="opacity-70">
                  On the systems side, I live in Linux terminals — Debian, Kali,
                  Ubuntu, ZorinOS, Arch. Interested in DevOps, Cybersecurity,
                  Astronomy, Archaeology. Outside labs, I’m usually deep into a
                  story game.
                </p>
              </div>

              <div
                className="mt-8 rounded-[18px] border p-4 bg-(--bg-2) flex flex-wrap gap-3 items-center"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase opacity-60">
                  <Gamepad2 size={14} /> Plays
                </div>
                <div className="flex flex-wrap gap-2">
                  {games.map((game) => (
                    <span
                      key={game}
                      className="mono text-[10px] px-2.5 py-1 rounded-full border bg-(--card)"
                      style={{ borderColor: "var(--line)" }}
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
