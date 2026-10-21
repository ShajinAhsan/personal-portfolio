import { profile } from "@/data/profile";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { GithubIcon } from "./Icons";

const quickLinks = [
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  {
    label: "Personal",
    value: profile.personalEmail,
    href: `mailto:${profile.personalEmail}`,
  },
  {
    label: "CUET",
    value: profile.institutionalEmail,
    href: `mailto:${profile.institutionalEmail}`,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-330 px-6 lg:px-8 py-14 md:py-20 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-5">
          <div className="mono text-[11px] tracking-[0.2em] uppercase opacity-40 mb-6">
            (05) — Contact
          </div>
          <h2 className="text-[34px] md:text-[48px] font-black tracking-[-0.03em] leading-[0.9]">
            Let&apos;s build
            <br />
            something useful.
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <div
                className="h-10 w-10 rounded-full border flex items-center justify-center shrink-0"
                style={{ borderColor: "var(--line)" }}
              >
                <Mail size={16} />
              </div>
              <div>
                <div className="mono text-[10px] tracking-[0.2em] uppercase opacity-40">
                  Personal Email
                </div>
                <a
                  href={`mailto:${profile.personalEmail}`}
                  className="mt-1 text-[14px] font-medium underline decoration-(--bd-green) decoration-2 block"
                >
                  {profile.personalEmail}
                </a>
                <div className="mono text-[11px] opacity-50 mt-1">
                  Primary • Fast response
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="h-10 w-10 rounded-full border flex items-center justify-center shrink-0"
                style={{ borderColor: "var(--line)" }}
              >
                🎓
              </div>
              <div>
                <div className="mono text-[10px] tracking-[0.2em] uppercase opacity-40">
                  Institutional
                </div>
                <a
                  href={`mailto:${profile.institutionalEmail}`}
                  className="mt-1 text-[14px] font-medium block"
                >
                  {profile.institutionalEmail}
                </a>
                <div className="mono text-[11px] opacity-50 mt-1">
                  CUET CSE • Academic use
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="h-10 w-10 rounded-full border flex items-center justify-center shrink-0"
                style={{ borderColor: "var(--line)" }}
              >
                <MapPin size={16} />
              </div>
              <div>
                <div className="mono text-[10px] tracking-[0.2em] uppercase opacity-40">
                  Location
                </div>
                <div className="mt-1 text-[14px] font-medium">
                  Madarganj / Dhaka / Chittagong, Bangladesh
                </div>
                <div className="mono text-[11px] opacity-50 mt-1">
                  Open to remote &amp; campus collabs
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-8 rounded-[18px] border p-4 bg-(--bg-2) flex items-center gap-4"
            style={{ borderColor: "var(--line)" }}
          >
            <Image
              src={profile.portrait}
              alt="Shajin"
              width={96}
              height={96}
              className="h-12 w-12 rounded-full object-cover border"
              style={{ borderColor: "var(--line)" }}
            />
            <div>
              <div className="text-[14px] font-semibold">{profile.name}</div>
              <div className="mono text-[11px] opacity-60">
                CSE @ CUET • Builder • {profile.githubHandle}
              </div>
            </div>
            <div className="ml-auto mono text-[10px] px-2.5 py-1 rounded-full bg-[#16C784] text-white">
              ● Online
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-11 rounded-full border flex items-center justify-center gap-2 mono text-[11px] tracking-widest uppercase bg-(--card) hover:bg-(--bg-2) transition"
              style={{ borderColor: "var(--line)" }}
            >
              <GithubIcon size={14} /> github.com/{profile.githubHandle}
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ContactForm />

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {quickLinks.map((link) => {
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
                  <span className="mono text-[9px] opacity-60 truncate ml-2 max-w-[14ch]">
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
