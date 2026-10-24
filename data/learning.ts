// The skill tree in the Education section. Add a node when you learn something new.
// status: "done" = unlocked, "now" = unlocking, "locked" = what's next.
export type Unlock = { label: string; href?: string };

export type LearningNode = {
  date: string;
  title: string;
  source?: string;
  desc: string;
  status: "done" | "now" | "locked";
  color: string;
  unlocks: Unlock[];
};

export const learning: LearningNode[] = [
  {
    date: "2021",
    title: "MERN Stack — Complete Web Development",
    desc: "Learned MongoDB, Express, React and Node. Built my first live projects, including the weather app.",
    status: "done",
    color: "var(--bd-green)",
    unlocks: [{ label: "Weather App", href: "#project-01" }],
  },
  {
    date: "2023",
    title: "Arduino Step by Step: Getting Serious With Arduino",
    desc: "Advanced embedded systems, complex sensor interfacing, and hardware-level C++ programming.",
    status: "done",
    color: "var(--bd-green)",
    unlocks: [
      { label: "Line Following Car", href: "#project-05" },
      { label: "Remote Wall Socket", href: "#project-04" },
    ],
  },
  {
    date: "Recent",
    title: "CS Fundamentals",
    desc: "DSA, OOP and databases. Strengthening core CSE alongside CUET coursework.",
    status: "done",
    color: "var(--bd-green)",
    unlocks: [{ label: "DSA" }, { label: "OOP" }, { label: "Databases" }],
  },
  {
    date: "Now",
    title: "Drone stabilization",
    desc: "Learning flight dynamics with an MPU6050 gyro and an ESP32.",
    status: "now",
    color: "#FFBD2E",
    unlocks: [{ label: "Drone with MPU6050", href: "#now" }],
  },
  {
    date: "Next",
    title: "???",
    desc: "Whatever I get curious about next.",
    status: "locked",
    color: "var(--text-3)",
    unlocks: [],
  },
];
