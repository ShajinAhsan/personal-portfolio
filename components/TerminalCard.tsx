import { Terminal } from "lucide-react";

export default function TerminalCard() {
  return (
    <div
      className="mt-6 mb-12 lg:mb-0 overflow-hidden rounded-2xl border"
      style={{
        borderColor: "var(--line)",
        background: "var(--card)",
      }}
    >
      {/* macOS-style terminal title bar */}
      <div
        className="flex items-center justify-between border-b px-4 py-3"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>

        <div className="mono flex items-center gap-2 text-[10px] text-(--text-2)">
          <Terminal size={12} />
          zsh — shajin@me
        </div>
        <div className="w-10" />
      </div>

      {/* Terminal output */}
      <div className="space-y-px p-4 mono text-[11px] sm:text-xs leading-relaxed">
        {/* Identity */}
        <div>
          <div className="flex flex-wrap gap-x-1">
            <span className="text-(--bd-green)">shajin@me</span>
            <span className="text-sky-400">~</span>
            <span className="text-(--bd-green)">%</span>
            <span>whoami</span>
          </div>
          <p className="mt-0.5 text-(--text-2)">shajinahsan</p>
        </div>

        {/* System */}
        <div>
          <div className="flex flex-wrap gap-x-1">
            <span className="text-(--bd-green)">shajin@me</span>
            <span className="text-sky-400">~</span>
            <span className="text-(--bd-green)">%</span>
            <span>uname -o</span>
          </div>
          <p className="mt-0.5 text-(--text-2)">GNU/Linux</p>
        </div>

        {/* Projects */}
        <div>
          <div className="flex flex-wrap gap-x-1">
            <span className="text-(--bd-green)">shajin@me</span>
            <span className="text-sky-400">~/projects</span>
            <span className="text-(--bd-green)">%</span>
            <span>ls</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 pl-0.5">
            <span className="text-sky-400">web/</span>
            <span className="text-sky-400">systems/</span>
            <span className="text-sky-400">embedded/</span>
            <span className="text-sky-400">experiments/</span>
          </div>
        </div>

        {/* Git */}
        <div>
          <div className="flex flex-wrap gap-x-1">
            <span className="text-(--bd-green)">shajin@me</span>
            <span className="text-sky-400">~/projects</span>
            <span className="text-(--bd-green)">%</span>
            <span>git status --short</span>
          </div>
          <p className="mt-0.5 text-(--bd-green)"> M curiosity</p>
          <p className="text-(--text-2)">
            Always a work in progress.
          </p>
        </div>

        {/* Idle prompt */}
        <div className="flex flex-wrap items-center gap-x-1">
          <span className="text-(--bd-green)">shajin@me</span>
          <span className="text-sky-400">~</span>
          <span className="text-(--bd-green)">%</span>
          <span>git commit -m &quot;figured it out&quot;</span>
          <span
            className="inline-block h-3.25 w-1.5 animate-pulse"
            style={{ background: "var(--text)" }}
          />
        </div>
      </div>
    </div>
  );
}
