export default function Footer() {
  return (
    <footer className="border-t mt-6" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-330 px-6 lg:px-8 h-19 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <span className="mono text-[11px] tracking-[0.18em] uppercase text-(--text-2)">
            © 2026 Shajin Ahsan Shuvo • CSE CUET
          </span>
          <span className="hidden md:inline-flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase text-(--text-2)">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--bd-green)" }}
            />{" "}
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--bd-red)" }}
            />{" "}
            Built in Bangladesh
          </span>
        </div>
        <div className="flex items-center gap-5 mono text-[11px] tracking-[0.18em] uppercase text-(--text-2)">
          <span className="hidden sm:inline">MERN • Linux • Robotics</span>
          <span className="h-3 w-px bg-current opacity-20" />
          <a
            href="#top"
            className="opacity-90 hover:opacity-100 transition-opacity p-1"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
