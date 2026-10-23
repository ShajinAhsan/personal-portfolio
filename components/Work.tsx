import { profile } from "@/data/profile";
import {
  attendanceProject,
  dashcamProject,
  droneProject,
  lineFollowerProject,
  projectCount,
  socketProject,
  weatherProject,
} from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Suspense } from "react";
import AttendanceCard from "./AttendanceCard";
import DashcamCard from "./DashcamCard";
import DroneCard from "./DroneCard";
import { GithubIcon } from "./Icons";
import LineFollowerCard from "./LineFollowerCard";
import SocketCard from "./SocketCard";
import WeatherPreview, { WeatherFallback } from "./WeatherPreview";

function WeatherProject() {
  const p = weatherProject;
  return (
    <article
      aria-labelledby={`project-${p.n}-title`}
      className="rounded-[28px] border overflow-hidden mb-6 grid md:grid-cols-12"
      style={{ borderColor: "var(--control-line)", background: "var(--card)" }}
    >
      <div className="md:col-span-7 p-7 md:p-9 flex flex-col">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-current opacity-20" />
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            Live since <time dateTime={p.year}>{p.year}</time>
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 mono text-[9px] px-2 py-1 rounded-full bg-[#16C784] text-black">
            <span className="h-1 w-1 rounded-full bg-white animate-pulse" />{" "}
            LIVE
          </span>
        </div>
        <h3
          id={`project-${p.n}-title`}
          className="mt-7 text-[28px] md:text-[34px] font-bold tracking-[-0.02em] leading-[0.95]"
        >
          {p.title}
        </h3>
        <div className="mono text-[12px] tracking-[0.14em] uppercase text-(--text-2) mt-2">
          Firebase
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
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-5 rounded-full bg-(--text) text-(--bg) inline-flex items-center gap-2 mono text-[11px] tracking-wider uppercase"
          >
            Live Site <ExternalLink size={12} />
          </a>
          <a
            href={`${profile.github}/shajin-weather`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-5 rounded-full border inline-flex items-center gap-2 mono text-[11px] tracking-wider uppercase"
            style={{ borderColor: "var(--line)" }}
          >
            <GithubIcon size={12} /> GitHub
          </a>
        </div>
      </div>
      <Suspense fallback={<WeatherFallback />}>
        <WeatherPreview />
      </Suspense>
    </article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-330 px-6 lg:px-8 py-14 md:py-24 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
        <div>
          <div className="mono text-[11px] tracking-[0.2em] uppercase text-(--text-2) mb-4">
            (04) — Selected Work • {projectCount} Projects
          </div>
          <h2 className="text-[36px] md:text-[60px] font-black tracking-[-0.04em] leading-[0.9]">
            Projects that
            <br />
            taught me to build.
          </h2>
        </div>
        <div className="mono text-[12px] leading-normal text-(--text-2) max-w-[32ch]">
          From my first weather site in 2022 to line-followers and gyro drones.
          Prototypes, shipped, documented on GitHub{" "}
          <span className="underline">{profile.githubHandle}</span>.
        </div>
      </div>

      <WeatherProject />
      <DroneCard project={droneProject} />
      <DashcamCard project={dashcamProject} />
      <LineFollowerCard project={lineFollowerProject} />
      <SocketCard project={socketProject} />
      <AttendanceCard project={attendanceProject} />
    </section>
  );
}
