import { now } from "@/data/now";
import DroneScene from "./DroneScene";

export default function Now() {
  return (
    <section
      id="now"
      className="mx-auto max-w-330 px-6 lg:px-8 py-14 md:py-24 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mono text-[11px] tracking-[0.2em] uppercase mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-(--text-2)">(05) — Now</span>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px]"
              style={{ borderColor: "var(--line)", background: "var(--card)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-(--bd-green) animate-pulse" />
              Currently • {now.label}
            </span>
          </div>
          <h2 className="text-[36px] md:text-[60px] font-black tracking-[-0.04em] leading-[0.9]">
            {now.heading[0]}
            <br />
            {now.heading[1]}
          </h2>
        </div>
        <div className="mono text-[12px] leading-[1.5] max-w-[32ch]">
          <p className="text-(--text-2)">{now.blurb}</p>
          <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
            Updated {now.updated}
          </p>
        </div>
      </div>

      <div data-pause="" className="relative mt-10 md:mt-14 w-full aspect-4/3 sm:aspect-video lg:aspect-1000/440">
        <DroneScene />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[14%] bg-linear-to-r from-(--bg) to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[14%] bg-linear-to-l from-(--bg) to-transparent" />
      </div>

      <dl
        className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-6"
        style={{ borderColor: "var(--line)" }}
      >
        {now.facts.map((f) => (
          <div key={f.k}>
            <dt className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
              {f.k}
            </dt>
            <dd className="mt-1 text-[15px] font-medium">{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
