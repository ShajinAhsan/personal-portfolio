import Learning from "./Learning";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-330 px-6 lg:px-8 py-14 md:py-20 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-23">
            <h2
              id="education-title"
              className="mono text-[11px] tracking-[0.2em] uppercase text-(--text-2)"
            >
              (03) — Education &amp; Journey
            </h2>
            <div className="mt-6 hidden md:block space-y-3">
              <div className="flex items-center gap-2 mono text-[10px] text-(--text-2)">
                <span className="h-2 w-2 rounded-full bg-(--bd-green)" /> Always
                compiling.
              </div>
              <div className="h-px w-full bg-(--line)" />
              <div className="mono text-[11px] text-(--text-2) leading-relaxed">
                Degree by day. Side projects by night.
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid md:grid-cols-2 gap-10">
            <div
              className="relative border-l pl-8 md:pl-10 space-y-10"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2) -ml-8 md:-ml-10 mb-2 pl-8 md:pl-10">
                Academic
              </div>

              <div className="relative">
                <span
                  className="absolute -left-9.25 md:-left-11.25 top-1 h-3.5 w-3.5 rounded-full border-[3px] bg-(--bg-2) -translate-x-1/6"
                  style={{ borderColor: "var(--bd-red)" }}
                />
                <div className="mono text-[11px] tracking-[0.2em] uppercase text-(--text-2) mb-2">
                  2026 — Present • Chittagong
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold tracking-[-0.02em] leading-[1.05]">
                  Chittagong University of Engineering &amp; Technology — CUET
                </h3>
                <div className="mt-2 text-[13px]">
                  <span className="inline-flex rounded-full bg-(--accent-2) text-black px-3 py-1 mono text-[10px] tracking-widest uppercase font-medium mr-2">
                    B.Sc. CSE • Undergraduate
                  </span>
                </div>
                <p className="mt-3 max-w-[50ch] text-[14px] leading-[1.6] text-(--text-2)">
                  Studying Computer Science and Engineering. Core engineering +
                  systems design + building practical projects bridging hardware
                  and software.
                </p>
              </div>

              <div className="relative">
                <span
                  className="absolute -translate-x-1/6 -left-9.25 md:-left-11.25 top-1 h-3.5 w-3.5 rounded-full bg-(--bg-2) border"
                  style={{ borderColor: "var(--bd-green)" }}
                />
                <div className="mono text-[11px] tracking-[0.2em] uppercase text-(--text-2) mb-2">
                  2024-25 • Dhaka Cantonment
                </div>
                <h3 className="text-[18px] md:text-[22px] font-bold tracking-[-0.02em]">
                  BAF Shaheen College Kurmitola
                </h3>
                <div
                  className="mt-2 inline-flex rounded-full border px-3 py-1 mono text-[10px] tracking-widest uppercase"
                  style={{ borderColor: "var(--line)" }}
                >
                  Higher Secondary • Science
                </div>
                <p className="mt-3 text-[14px] text-(--text-2)">
                  Built the foundation — establishing first principles —
                  analytical thinking, structural discipline, and scientific
                  fundamentals.
                </p>
              </div>
            </div>
            <Learning />
          </div>
        </div>
      </div>
    </section>
  );
}
