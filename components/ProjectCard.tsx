import type { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { GithubIcon } from "./Icons";

export function ProjectTags({ tags }: { tags: readonly string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="mono text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border"
          style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectStatusBadge({ project: p }: { project: Project }) {
  if (p.status === "wip") {
    return (
      <span className="ml-auto inline-flex items-center gap-1.5 mono text-[9px] px-2 py-1 rounded-full bg-(--bd-red) text-black">
        <span className="h-1 w-1 rounded-full bg-white animate-pulse" /> WIP
      </span>
    );
  }

  if (p.status === "live") {
    return (
      <span className="ml-auto inline-flex items-center gap-1.5 mono text-[9px] px-2 py-1 rounded-full bg-[#16C784] text-black">
        <span className="h-1 w-1 rounded-full bg-white animate-pulse" /> LIVE
      </span>
    );
  }

  return null;
}

export function ProjectActions({ project: p }: { project: Project }) {
  return (
    <div className="mt-auto pt-8 flex flex-wrap gap-3">
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 px-5 rounded-full bg-(--text) text-(--bg) inline-flex items-center gap-2 mono text-[10px] tracking-widest uppercase"
        >
          <GithubIcon size={12} /> GitHub
        </a>
      )}

      {p.liveUrl && (
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            p.github
              ? "h-9 px-5 rounded-full border inline-flex items-center gap-2 mono text-[10px] tracking-widest uppercase"
              : "h-9 px-5 rounded-full bg-(--text) text-(--bg) inline-flex items-center gap-2 mono text-[10px] tracking-widest uppercase"
          }
          style={p.github ? { borderColor: "var(--line)" } : undefined}
        >
          Live Site <ExternalLink size={12} />
        </a>
      )}

      <span
        className="h-9 px-5 rounded-full border inline-flex items-center mono text-[10px] tracking-widest uppercase text-(--text-2)"
        style={{ borderColor: "var(--control-line)" }}
      >
        {p.statusLabel}
      </span>
    </div>
  );
}

export default function ProjectCard({
  project: p,
  preview,
  extra,
}: {
  project: Project;
  preview: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <article
      id={`project-${p.n}`}
      aria-labelledby={`project-${p.n}-title`}
      className="group relative rounded-[28px] border overflow-hidden grid md:grid-cols-12 mb-6"
      style={{ borderColor: "var(--control-line)", background: "var(--card)" }}
    >
      <div className="md:col-span-5 p-7 md:p-9 flex flex-col">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-current opacity-20" />
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            <time dateTime={p.year}>{p.year}</time> • {p.category}
          </span>
          <ProjectStatusBadge project={p} />
        </div>

        <h3
          id={`project-${p.n}-title`}
          className="mt-7 text-[28px] md:text-[34px] font-bold tracking-[-0.02em] leading-[0.95]"
        >
          {p.title}
        </h3>
        <div className="mono text-[12px] tracking-[0.14em] uppercase text-(--text-2) mt-2">
          {p.subtitle}
        </div>

        <p className="mt-5 text-[14px] md:text-[15px] leading-[1.6] text-(--text-2) max-w-[48ch]">
          {p.desc}
        </p>

        {extra}

        <ProjectTags tags={p.tags} />
        <ProjectActions project={p} />
      </div>

      {preview}
    </article>
  );
}
