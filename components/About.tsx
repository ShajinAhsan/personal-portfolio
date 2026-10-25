import { games } from "@/data/profile";
import AboutIntro from "./AboutIntro";
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

              <AboutIntro extra={<GamesList games={games} />}>
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
                  astronomy, and archaeology. In my free time, I usually unwind
                  with
                  <span className="border-b border-(--bd-green)">
                    {" "}
                    story-driven games.
                  </span>
                </p>
              </AboutIntro>
            </div>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
