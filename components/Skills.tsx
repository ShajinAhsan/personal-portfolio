import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <div id="skills" className="lg:col-span-5">
      <div className="mono text-[11px] tracking-[0.2em] uppercase opacity-40 mb-3">
        Skills — Expanded
      </div>
      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div
            key={group.cat}
            className="rounded-[18px] border p-4 bg-(--card)"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="flex items-center justify-between">
              <div className="mono text-[10px] tracking-[0.2em] uppercase font-semibold">
                {group.cat}
              </div>
              <div
                className="mono text-[8px] px-2 py-1 rounded-full border"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--bg-2)",
                }}
              >
                {group.icon}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
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
