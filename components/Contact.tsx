import { profile } from "@/data/profile";
import { ArrowUpRight, GraduationCap, Mail } from "lucide-react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { GithubIcon } from "./Icons";

const socialLinks = [
  { label: "Facebook", value: profile.facebookHandle, href: profile.facebook },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
  { label: "Twitter", value: profile.twitterHandle, href: profile.twitter },
];

const glow = (color: string) =>
  `radial-gradient(closest-side, ${color} 0%, ${color} 15%, color-mix(in srgb, ${color} 60%, transparent) 55%, color-mix(in srgb, ${color} 20%, transparent) 78%, transparent 100%)`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-330 px-6 lg:px-8 py-14 md:py-20 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-5">
          <div className="mb-7">
            <div className="mono text-[11px] tracking-[0.2em] uppercase text-(--text-2)">
              (06) — Contact
            </div>
          </div>
          <div className="relative isolate grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 left-[32%] top-[42%] h-70 w-90 -translate-x-1/2 -translate-y-1/2 opacity-[0.14] sm:left-[18%] sm:h-80 sm:w-95"
              style={{ background: glow("var(--accent-2)") }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 left-[35%] top-[48%] h-45 w-60 -translate-x-1/2 -translate-y-1/2 opacity-[0.035] sm:left-[22%]"
              style={{ background: glow("var(--bd-red)") }}
            />
            <h2 className="relative text-[42px] font-black leading-[0.86] tracking-[-0.05em] md:text-[58px]">
              Bring the
              <br />
              <span className="text-(--bd-green)">spark.</span>
            </h2>
            <p className="relative max-w-[34ch] text-[14px] leading-[1.65] text-(--text-2) sm:self-end lg:mt-5">
              Have a project, question, or delightfully impractical idea? The
              inbox is open.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            <div
              className="group rounded-[18px] border p-4 transition-colors hover:bg-(--bg-2)"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <Mail size={15} />
                  </div>
                  <div className="min-w-0">
                    <div className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
                      Personal
                    </div>
                    <a
                      href={`mailto:${profile.personalEmail}`}
                      className="mt-1 block break-all text-[14px] font-medium underline decoration-(--bd-green) decoration-2 underline-offset-3"
                    >
                      {profile.personalEmail}
                    </a>
                  </div>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  size={15}
                  className="text-(--text-3) transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <div
                className="mt-3 border-t pt-3 mono text-[10px] text-(--text-2)"
                style={{ borderColor: "var(--line)" }}
              >
                Primary channel • Fast response
              </div>
            </div>

            <div
              className="group rounded-[18px] border p-4 transition-colors hover:bg-(--bg-2)"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <GraduationCap size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="mono text-[10px] tracking-[0.2em] uppercase text-(--text-2)">
                      Institutional
                    </div>
                    <a
                      href={`mailto:${profile.institutionalEmail}`}
                      className="mt-1 block break-all text-[14px] font-medium"
                    >
                      {profile.institutionalEmail}
                    </a>
                  </div>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  size={15}
                  className="text-(--text-3) transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <div
                className="mt-3 border-t pt-3 mono text-[10px] text-(--text-2)"
                style={{ borderColor: "var(--line)" }}
              >
                CUET CSE • Academic use
              </div>
            </div>
          </div>

          <div
            className="mt-10 flex items-center justify-between gap-4 border-y py-4"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src={profile.portrait}
                alt=""
                width={80}
                height={80}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <div className="text-[14px] font-semibold">{profile.name}</div>
                <div className="mono text-[10px] tracking-[0.12em] uppercase text-(--text-2)">
                  Personal portfolio
                </div>
              </div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex shrink-0 items-center gap-1.5 mono text-[10px] tracking-[0.12em] uppercase text-(--text-2) transition-colors hover:text-(--text)"
            >
              <GithubIcon size={13} />
              <span>{profile.githubHandle}</span>
              <ArrowUpRight
                aria-hidden="true"
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ContactForm />

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {socialLinks.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="rounded-full border h-10.5 flex items-center justify-between px-4 bg-(--card) hover:bg-(--bg-2) transition"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="mono text-[11px] tracking-[0.12em] uppercase">
                    {link.label}
                  </span>
                  <span className="mono text-[9px] text-(--text-2) truncate ml-2 max-w-[14ch]">
                    {link.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
