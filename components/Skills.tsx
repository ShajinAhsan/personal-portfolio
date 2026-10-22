import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <div id="skills" className="lg:col-span-5">
      <h3 className="mono text-[11px] tracking-[0.2em] uppercase text-(--text-2) mb-3">
        Skills — Simplified
      </h3>
      <div className="space-y-4">
        {skillGroups.map(({ cat, icon: Icon, items }) => (
          <div
            key={cat}
            className="rounded-[18px] border p-4 bg-(--card)"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="flex items-center justify-between">
              <div className="mono text-[10px] tracking-[0.2em] uppercase font-semibold">
                {cat}
              </div>
              <div
                className="h-7 w-7 rounded-full border flex items-center justify-center"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--bg-2)",
                }}
                aria-hidden="true"
              >
                <Icon size={13} />
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-[11px] px-3 py-1.5 rounded-full border bg-(--bg-2) leading-tight"
                  style={{ borderColor: "var(--line)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
