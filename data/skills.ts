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
    cat: "Problem Solving",
    icon: Binary,
    items: ["C", "C++", "Python", "Data Structures", "Competitive Programming"],
  },
  {
    cat: "Systems & Tools",
    icon: Terminal,
    items: ["Linux", "Arch", "Kali", "Debian", "Git & GitHub"],
  },
  {
    cat: "Side Quests",
    icon: Compass,
    items: [
      "Cybersecurity",
      "Astronomy",
      "History",
      "Archaeology",
      "Travel",
      "Gaming",
    ],
  },
];
