import { profile } from "@/data/profile";
import {
  featuredProject,
  projectCount,
  projects,
  type Project,
} from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Suspense } from "react";
import { GithubIcon } from "./Icons";
import WeatherPreview, { WeatherFallback } from "./WeatherPreview";

<Suspense fallback={<WeatherFallback />}>
  <WeatherPreview />
</Suspense>;

function FeaturedProject() {
  const p = featuredProject;
  return (
    <div
      className="rounded-[28px] border overflow-hidden mb-6 grid md:grid-cols-12"
      style={{ borderColor: "var(--line)", background: "var(--card)" }}
    >
      <div className="md:col-span-7 p-7 md:p-9 flex flex-col">
        <div className="flex items-center gap-3">
          <span className="mono text-[11px] tracking-[0.2em]">{p.n}</span>
          <span className="h-px w-8 bg-current opacity-20" />
          <span className="mono text-[10px] tracking-[0.2em] uppercase opacity-50">
            {p.meta}
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 mono text-[9px] px-2 py-1 rounded-full bg-[#16C784] text-white">
            <span className="h-1 w-1 rounded-full bg-white animate-pulse" />{" "}
            LIVE
          </span>
        </div>
        <h3 className="mt-7 text-[28px] md:text-[34px] font-bold tracking-[-0.02em] leading-[0.95]">
          {p.title}
        </h3>
        <div className="mono text-[12px] tracking-[0.14em] uppercase opacity-50 mt-2">
          {p.tagline}
        </div>
        <p className="mt-5 text-[14px] md:text-[15px] leading-[1.6] opacity-70 max-w-[48ch]">
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
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-5 rounded-full border inline-flex items-center gap-2 mono text-[11px] tracking-wider uppercase"
            style={{ borderColor: "var(--line)" }}
          >
            <GithubIcon size={12} /> GitHub
          </a>
        </div>
      </div>
      <WeatherPreview />
    </div>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <div
      className="group relative rounded-[26px] border overflow-hidden flex flex-col md:col-span-6 lg:col-span-4"
      style={{ borderColor: "var(--line)", background: "var(--card)" }}
    >
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="mono text-[11px] tracking-[0.2em]">{p.n}</span>
            <span className="h-px w-6 bg-current opacity-20" />
            <span className="mono text-[10px] tracking-[0.2em] uppercase opacity-50">
              {p.year} {p.wip ? "• WIP" : ""}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {p.wip && (
              <span className="mono text-[8px] px-2 py-1 rounded-full bg-(--bd-red) text-white uppercase">
                WIP
              </span>
            )}
            <span
              className="h-7 w-7 rounded-full border flex items-center justify-center group-hover:rotate-45 transition-transform"
              style={{ borderColor: "var(--line)" }}
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-[22px] md:text-[24px] font-bold tracking-[-0.02em] leading-[0.95]">
            {p.title}
          </h3>
          <div className="mono text-[11px] tracking-[0.14em] uppercase opacity-50 mt-1.5">
            {p.subtitle}
          </div>
        </div>
        <p className="mt-4 text-[13px] leading-[1.6] opacity-70 min-h-13">
          {p.desc}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="mono text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border"
              style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="mt-6 pt-5 border-t flex gap-2"
          style={{ borderColor: "var(--line)" }}
        >
          <a
            href={p.github ?? profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 px-4 rounded-full bg-(--text) text-(--bg) inline-flex items-center gap-1.5 mono text-[10px] tracking-wider uppercase"
          >
            <GithubIcon size={12} /> GitHub
          </a>
          <span
            className="h-8 px-4 rounded-full border inline-flex items-center mono text-[10px] tracking-wider uppercase opacity-60"
            style={{ borderColor: "var(--line)" }}
          >
            {p.wip ? "Building" : "Prototype"}
          </span>
        </div>
      </div>
    </div>
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
          <div className="mono text-[11px] tracking-[0.2em] uppercase opacity-40 mb-4">
            (04) — Selected Work • {projectCount} Projects
          </div>
          <h2 className="text-[36px] md:text-[60px] font-black tracking-[-0.04em] leading-[0.9]">
            Projects that
            <br />
            taught me to build.
          </h2>
        </div>
        <div className="mono text-[12px] leading-normal opacity-60 max-w-[32ch]">
          From my first weather site in 2022 to line-followers and gyro drones.
          Prototypes, shipped, documented on GitHub{" "}
          <span className="underline">{profile.githubHandle}</span>.
        </div>
      </div>

      <FeaturedProject />

      <div className="grid md:grid-cols-12 gap-5 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
