import {
  Binary,
  Compass,
  Globe,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export type SkillGroup = {
  cat: string;
  icon: LucideIcon;
  items: string[];
};
export const skillGroups: SkillGroup[] = [
  {
    cat: "Web & Software",
    icon: Globe,
    items: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    cat: "Core CS",
    icon: Binary,
    items: [
      "C",
      "C++",
      "Python",
      "Data Structures",
      "Algorithms",
      "Competitive Programming",
    ],
  },
  {
    cat: "Systems & Tools",
    icon: Terminal,
    items: [
      "Arch Linux",
      "Debian",
      "Kali Linux",
      "Git & GitHub",
      "Cybersecurity",
    ],
  },
  {
    cat: "Side Quests",
    icon: Compass,
    items: ["Astronomy", "History", "Archaeology", "Travel", "Gaming"],
  },
];
