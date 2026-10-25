import StatusScreen from "@/components/StatusScreen";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <StatusScreen
      code="404"
      codeClassName="text-[clamp(8rem,25vw,22rem)]"
      eyebrow="System response / 404"
      title="This route took a wrong turn."
      description="The page you are looking for is missing, moved, or still being prototyped. Nothing is broken on your end."
      actions={
        <>
          <Link
            href="/"
            className="mono inline-flex h-11 items-center rounded-full bg-(--text) px-6 text-[11px] font-medium uppercase tracking-[0.14em] text-(--bg) transition hover:opacity-85"
          >
            <span>Return Home</span>
            <ArrowRight aria-hidden="true" className="ml-2" size={15} />
          </Link>
          <Link
            href="/#work"
            className="mono inline-flex h-11 items-center rounded-full border px-6 text-[11px] font-medium uppercase tracking-[0.14em] transition hover:bg-(--bg-2)"
            style={{ borderColor: "var(--control-line)" }}
          >
            Browse work
          </Link>
        </>
      }
      command="locate route"
      errorLabel="route not found"
      rows={[
        { label: "searched", value: "current location" },
        { label: "status", value: "disconnected" },
      ]}
      signal="signal lost / searching"
      dotColor="var(--accent-2)"
      showGlow
      footer={
        <div className="mt-5 flex items-center justify-between">
          <span className="mono text-[9px] uppercase tracking-[0.16em] text-(--text-2)">
            error.log / 000404
          </span>
          <span className="mono text-[9px] uppercase tracking-[0.16em] text-(--bd-green)">
            recoverable
          </span>
        </div>
      }
    />
  );
}
