"use client";

import { profile } from "@/data/profile";
import { projectCount } from "@/data/projects";
import { ArrowDown, ArrowRight, ArrowUp, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type Entry = { id: number; cmd: string; out: ReactNode };

const INTRO = ["whoami", "ls", "git status --short"];
const SUGGESTIONS = ["help", "neofetch", "skills", "projects", "contact"];
const MAX_ENTRIES = 100;
const MAX_HISTORY = 50;
const COMMANDS = [
  "help",
  "whoami",
  "about",
  "ls",
  "neofetch",
  "skills",
  "projects",
  "contact",
  "git",
  "date",
  "echo",
  "sudo",
  "open",
  "theme",
  "clear",
];

const INFO = [
  ["user", "shajin@me"],
  ["os", "GNU/Linux"],
  ["uni", "CUET · CSE"],
  ["base", "Chittagong, BD"],
  ["stack", "C/C++ · React · Systems · IoT"],
  ["status", "available"],
];

const dim = "text-(--text-2)";
const green = "text-(--bd-green)";
// amber that stays readable on both light and dark cards
const amber = "text-amber-700 dark:text-[#FEBC2E]";

function Flag() {
  return (
    <div
      aria-hidden
      className="flex h-13.5 w-22.5 shrink-0 items-center justify-center rounded-[3px]"
      style={{ background: "var(--bd-green)" }}
    >
      <span
        className="h-7.5 w-7.5 -translate-x-1 rounded-full"
        style={{ background: "var(--bd-red)" }}
      />
    </div>
  );
}

function InfoList() {
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5">
      {INFO.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className={green}>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Row({ children }: { children: ReactNode }) {
  return <div className="mt-0.5">{children}</div>;
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="underline decoration-(--bd-green) decoration-2 underline-offset-2"
    >
      {children}
    </a>
  );
}

/** Pure command runner: returns what the command prints. */
function run(input: string): ReactNode {
  const [name = "", ...args] = input.trim().split(/\s+/);
  const rest = args.join(" ");

  switch (name.toLowerCase()) {
    case "":
      return null;

    case "help":
      return (
        <dl className="mt-0.5 grid grid-cols-[auto_1fr] gap-x-4">
          {[
            ["about", "who I am, in two lines"],
            ["neofetch", "system summary"],
            ["skills", "what I work with"],
            ["projects", "jump to my work"],
            ["contact", "ways to reach me"],
            ["git log", "recent history"],
            ["open <section>", "jump to a section"],
            ["theme", "switch light / dark"],
            ["clear", "wipe the screen"],
          ].map(([c, d]) => (
            <div key={c} className="contents">
              <dt className={green}>{c}</dt>
              <dd className={dim}>{d}</dd>
            </div>
          ))}
          <dd className={`${dim} col-span-2 mt-1`}>
            Tab completes, <ArrowUp aria-hidden="true" size={11} />{" "}
            <ArrowDown aria-hidden="true" size={11} /> walks history. There are
            a few hidden commands too.
          </dd>
        </dl>
      );

    case "whoami":
      return (
        <Row>
          <span className={dim}>{profile.githubHandle}</span>
        </Row>
      );

    case "about":
      return (
        <Row>
          <p className={dim}>
            CSE student at CUET, Chittagong. I like understanding how things
            work, from simple electronics to software.
          </p>
          <p className={dim}>Still learning, still experimenting.</p>
        </Row>
      );

    case "ls":
      return (
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 pl-0.5">
          {["web/", "systems/", "embedded/", "experiments/"].map((d) => (
            <span key={d} className={green}>
              {d}
            </span>
          ))}
        </div>
      );

    case "neofetch":
      return (
        <div className="mt-1.5 flex items-start gap-4">
          <div className="mt-0.5">
            <Flag />
          </div>
          <InfoList />
        </div>
      );

    case "skills":
      return (
        <Row>
          <p>
            <span className={green}>languages</span>{" "}
            <span className={dim}>C, C++, TypeScript</span>
          </p>
          <p>
            <span className={green}>web</span>{" "}
            <span className={dim}>React, Next.js, Tailwind</span>
          </p>
          <p>
            <span className={green}>hardware</span>{" "}
            <span className={dim}>electronics, embedded, IoT</span>
          </p>
        </Row>
      );

    case "projects":
      return (
        <Row>
          <span className={`${dim} inline-flex items-center gap-1`}>
            {projectCount} projects <ArrowRight aria-hidden="true" size={12} />
          </span>
          <Link href="#work">#work</Link>
        </Row>
      );

    case "contact":
      return (
        <Row>
          <p>
            <span className={green}>mail</span>{" "}
            <Link href={`mailto:${profile.personalEmail}`}>
              {profile.personalEmail}
            </Link>
          </p>
          <p>
            <span className={green}>github</span>{" "}
            <Link href={profile.github}>{profile.githubHandle}</Link>
          </p>
        </Row>
      );

    case "git":
      if (args[0] === "status")
        return (
          <Row>
            <p className={green}> M curiosity</p>
            <p className={dim}>Always a work in progress.</p>
          </Row>
        );
      if (args[0] === "log")
        return (
          <Row>
            <p>
              <span className={amber}>a91c3e2</span> figured it out{" "}
              <span className={dim}>(HEAD)</span>
            </p>
            <p>
              <span className={amber}>5d07b18</span>{" "}
              <span className={dim}>broke it, then fixed it</span>
            </p>
            <p>
              <span className={amber}>0f2a6c4</span>{" "}
              <span className={dim}>first commit</span>
            </p>
          </Row>
        );
      return (
        <Row>
          <span className={dim}>usage: git status | git log</span>
        </Row>
      );

    case "date":
      return (
        <Row>
          <span className={dim}>{new Date().toString()}</span>
        </Row>
      );

    case "echo":
      return <Row>{rest}</Row>;

    case "sudo":
      if (/\bhire\b/i.test(rest))
        return (
          <Row>
            <p className={green}>permission granted. opening mail…</p>
          </Row>
        );
      return (
        <Row>
          <span className={dim}>
            shajin is not in the sudoers file. This incident will be reported.
          </span>
        </Row>
      );

    case "rm":
      return (
        <Row>
          <span className={dim}>nice try. git remembers everything.</span>
        </Row>
      );

    case "cd":
      return (
        <Row>
          <span className={dim}>nothing to enter here. try `projects`.</span>
        </Row>
      );

    case "exit":
      return (
        <Row>
          <span className={dim}>there is no exit, only `contact`.</span>
        </Row>
      );

    case "vim":
    case "nano":
      return (
        <Row>
          <span className={dim}>
            you can open it, but we both know how this ends.
          </span>
        </Row>
      );

    default:
      return (
        <Row>
          <span className={dim}>zsh: command not found: {name}. Type </span>
          <span className={green}>help</span>
        </Row>
      );
  }
}

function Prompt() {
  return <span className={`${green} whitespace-nowrap`}>shajin@me ~ %</span>;
}

export default function TerminalCard() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [line, setLine] = useState("");
  const [introStarted, setIntroStarted] = useState(false);
  const [busy, setBusy] = useState(true); // true while the intro auto-types
  const [focused, setFocused] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [announcement, setAnnouncement] = useState("");
  const { resolvedTheme, setTheme } = useTheme();

  const histIdx = useRef<number | null>(null);
  const nextId = useRef(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const mailtoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const introRunRef = useRef(0);
  const announcementCountRef = useRef(0);

  const push = useCallback((cmd: string, out: ReactNode) => {
    setEntries((e) =>
      [...e, { id: nextId.current++, cmd, out }].slice(-MAX_ENTRIES),
    );
  }, []);

  const exec = useCallback(
    (raw: string) => {
      const cmd = raw.trim();
      histIdx.current = null;
      if (!cmd) return;
      setHistory((h) => {
        if (h.at(-1) === cmd) return h;
        return [...h, cmd].slice(-MAX_HISTORY);
      });
      announcementCountRef.current += 1;
      setAnnouncement(
        `Command executed: ${cmd} (${announcementCountRef.current})`,
      );

      const [name = "", ...args] = cmd.split(/\s+/);
      const commandName = name.toLowerCase();

      if (commandName === "clear") {
        setEntries([]);
        setAnnouncement("Terminal cleared");
        return;
      }

      if (commandName === "open") {
        const target = (args[0] ?? "").replace(/^#/, "").toLowerCase();

        if (!target) {
          push(
            raw,
            <Row>
              <span className={dim}>
                usage: open work | about | skills | education | now | contact
              </span>
            </Row>,
          );
          return;
        }

        const destination = document.getElementById(target);
        if (!destination) {
          push(
            raw,
            <Row>
              <span className={dim}>section not found: {target}</span>
            </Row>,
          );
          return;
        }

        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        inputRef.current?.blur();
        destination.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
        push(
          raw,
          <Row>
            <span className={dim}>opening {target}…</span>
          </Row>,
        );
        setAnnouncement(`Opened ${target}`);
        return;
      }

      if (commandName === "theme") {
        const next = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(next);
        push(
          raw,
          <Row>
            <span className={dim}>theme: {next}</span>
          </Row>,
        );
        setAnnouncement(`Theme switched to ${next}`);
        return;
      }

      push(raw, run(cmd));

      if (/^sudo\b.*\bhire\b/i.test(cmd)) {
        if (mailtoTimerRef.current) clearTimeout(mailtoTimerRef.current);
        mailtoTimerRef.current = setTimeout(() => {
          window.location.href = `mailto:${profile.personalEmail}`;
        }, 700);
      }
    },
    [push, resolvedTheme, setTheme],
  );

  useEffect(() => {
    return () => {
      if (mailtoTimerRef.current) clearTimeout(mailtoTimerRef.current);
    };
  }, []);

  // Wait until the card is visible so the intro is not missed above the fold.
  useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const timeout = setTimeout(() => setIntroStarted(true), 0);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIntroStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // Intro: types a few commands on its own, then hands over control.
  useEffect(() => {
    if (!introStarted) return;

    const runId = ++introRunRef.current;
    let alive = true;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    (async () => {
      await Promise.resolve();
      if (!alive || runId !== introRunRef.current) return;
      setEntries([]);
      setLine("");
      setBusy(true);

      for (const cmd of INTRO) {
        if (!alive || runId !== introRunRef.current) return;
        if (!reduce) {
          for (let i = 1; i <= cmd.length; i++) {
            setLine(cmd.slice(0, i));
            await sleep(45 + Math.random() * 50);
            if (!alive || runId !== introRunRef.current) return;
          }
          await sleep(250);
          if (!alive || runId !== introRunRef.current) return;
        }
        setLine("");
        push(cmd, run(cmd));
        if (!reduce) {
          await sleep(500);
          if (!alive || runId !== introRunRef.current) return;
        }
      }
      if (alive && runId === introRunRef.current) setBusy(false);
    })();

    return () => {
      alive = false;
    };
  }, [introStarted, push]);

  // Keep the newest output in view without scrolling the page itself.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries, line]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (busy) return;

    if (e.key === "Enter") {
      exec(line);
      setLine("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const i =
        histIdx.current === null
          ? history.length - 1
          : Math.max(0, histIdx.current - 1);
      histIdx.current = i;
      setLine(history[i]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx.current === null) return;
      const i = histIdx.current + 1;
      if (i >= history.length) {
        histIdx.current = null;
        setLine("");
      } else {
        histIdx.current = i;
        setLine(history[i]);
      }
    } else if (e.key === "Tab") {
      const q = line.toLowerCase();
      const hits = q ? COMMANDS.filter((c) => c.startsWith(q)) : [];
      if (hits.length === 1) {
        e.preventDefault();
        setLine(hits[0]);
      }
    } else if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setEntries([]);
    } else if (
      (e.ctrlKey || e.metaKey) &&
      e.key.toLowerCase() === "c" &&
      !window.getSelection()?.toString()
    ) {
      e.preventDefault();
      push(`${line}^C`, null);
      setAnnouncement("Command cancelled");
      setLine("");
    }
  };

  const showHint = !busy && !line && entries.length <= INTRO.length;
  const terminalBorderColor = focused ? "var(--control-line)" : "var(--line)";

  return (
    <div
      ref={terminalRef}
      className="w-full overflow-hidden rounded-2xl border"
      style={{ borderColor: terminalBorderColor, background: "var(--card)" }}
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
      {/* title bar */}
      <div
        className="flex items-center justify-between border-b px-4 py-3"
        style={{ borderColor: terminalBorderColor }}
      >
        <div className="flex w-24 items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className={`mono flex items-center gap-2 text-[10px] ${dim}`}>
          <Terminal size={12} />
          zsh — shajin@me
        </div>
        <div className={`mono w-24 text-right text-[10px] ${dim}`}>
          {busy ? "" : focused ? "live" : "click to type"}
        </div>
      </div>

      {/* screen + side panel (panel only on wide screens) */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
        <div
          ref={bodyRef}
          onClick={() => {
            if (window.getSelection()?.toString()) return;
            inputRef.current?.focus({ preventScroll: true });
          }}
          className="mono h-75 cursor-text space-y-1.5 overflow-y-auto p-4 text-[11px] leading-relaxed has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-(--accent) sm:h-85 sm:text-xs lg:h-95 lg:p-6 lg:text-[13px]"
        >
          {entries.map((en) => (
            <div key={en.id}>
              <div className="flex flex-wrap gap-x-1">
                <Prompt />
                <span>{en.cmd}</span>
              </div>
              {en.out}
            </div>
          ))}

          {/* live prompt */}
          <div className="relative flex flex-wrap items-center gap-x-1">
            <Prompt />
            <span className="whitespace-pre-wrap break-all">{line}</span>
            <span
              aria-hidden
              className={`inline-block h-3.25 w-1.5 ${focused || busy ? "animate-pulse" : "opacity-40"}`}
              style={{ background: "var(--text)" }}
            />
            {showHint && <span className={dim}>type help</span>}
            {/* real input stays invisible; 16px prevents iOS focus zoom */}
            <input
              ref={inputRef}
              value={line}
              readOnly={busy}
              onChange={(e) => setLine(e.target.value)}
              onKeyDown={onKeyDown}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              aria-label="Terminal command input"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="absolute inset-0 h-full w-full opacity-0"
              style={{ fontSize: 16 }}
            />
          </div>
        </div>

        <aside
          aria-label="System summary"
          className="mono hidden flex-col gap-5 border-l p-6 text-[13px] leading-relaxed lg:flex"
          style={{ borderColor: terminalBorderColor }}
        >
          <InfoList />
          <p className={`${dim} mt-auto text-xs`}>
            Tab completes commands. <ArrowUp aria-hidden="true" size={11} />{" "}
            <ArrowDown aria-hidden="true" size={11} /> walks history. Ctrl+L
            clears the screen.
          </p>
        </aside>
      </div>

      {/* tap targets for phones, shortcuts for everyone */}
      <div
        className="flex flex-wrap gap-2 border-t px-4 py-2.5"
        style={{ borderColor: terminalBorderColor }}
      >
        {SUGGESTIONS.map((c) => (
          <button
            key={c}
            type="button"
            disabled={busy}
            onClick={() => {
              exec(c);
              setLine("");
            }}
            className="mono min-h-6 rounded-full border px-2.5 py-1 text-[10px] transition hover:bg-(--bg-2) disabled:opacity-40 cursor-pointer"
            style={{ borderColor: "var(--line)" }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
