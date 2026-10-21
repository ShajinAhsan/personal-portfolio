import { games } from "@/data/profile";
import { Gamepad2 } from "lucide-react";
import GamesList from "./GameList";
import Skills from "./Skills";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-330 px-6 lg:px-8 py-14 md:py-20 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-23 flex flex-col gap-4">
            <div className="mono text-[11px] tracking-[0.2em] uppercase opacity-40">
              (02) — About
            </div>
            <div
              className="h-px w-12"
              style={{ background: "var(--line-strong)" }}
            />
            <div className="hidden md:block mono text-[11px] leading-[1.6] opacity-40 max-w-[20ch]">
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
                A curiosity-driven CSE builder who takes things apart to build
                better.
              </h2>
              <div className="mt-7 space-y-4 text-[15px] leading-[1.75] opacity-80 max-w-[58ch]">
                <p>
                  I'm{" "}
                  <span className="font-semibold text-(--text)">
                    Shajin Ahsan Shuvo
                  </span>
                  , a{" "}
                  <span className="font-semibold">
                    Computer Science &amp; Engineering student at CUET
                  </span>{" "}
                  from Madarganj, Jamalpur, now in Chittagong. I came to
                  engineering because I like taking things apart, and I stayed
                  because I like putting better things back together.
                </p>
                <p>
                  My work sits between software and hardware. On the web, I
                  build full-stack with MERN and others. On the bench, I work
                  with Arduino Uno R3m Nano, ESP32, ESP-01, relay modules and
                  the MPU6050 and so on. So far that's a remote-controlled wall
                  socket, a line-following car, and a gyro-stabilized drone
                  that's still in prototype.
                </p>
                <p className="opacity-70">
                  Outside the editor, I live in the Linux terminal (Debian,
                  Kali, Ubuntu, Arch used so far) and follow DevOps,
                  cybersecurity, astronomy and archaeology. When the labs close,
                  I'm usually deep in{" "}
                  <span className="border-b border-(--accent-2)">
                    story-driven games.
                  </span>
                </p>
              </div>

              <div
                className="mt-8 rounded-[18px] border p-4 bg-(--bg-2) flex flex-wrap gap-3 items-center"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase opacity-60">
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
