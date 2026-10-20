export type SkillGroup = {
  cat: string;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    cat: "Programming & Web",
    icon: "MERN",
    items: [
      "MERN Stack — MongoDB, Express, React, Node",
      "JavaScript / TypeScript",
      "C++ / Python",
      "CS Fundamentals — Phitron",
      "React • Firebase • Next.js",
    ],
  },
  {
    cat: "Systems & DevOps",
    icon: "Linux",
    items: [
      "Linux — Debian, Kali, Ubuntu, ZorinOS, Arch",
      "Linux Terminal — fluent",
      "DevOps basics",
      "Git / GitHub — shajinahsan",
    ],
  },
  {
    cat: "Hardware & Robotics",
    icon: "Robotics",
    items: [
      "Arduino Uno R3, Nano, ESP32, ESP-01",
      "Robotics & Circuits",
      "MPU6050 Gyro sensor",
      "Relay modules • Remote Socket",
      "Line Following Car • Drone (WIP)",
    ],
  },
  {
    cat: "Interests",
    icon: "Focus",
    items: ["Cybersecurity", "Astronomy", "Archaeology", "Programming", "DevOps"],
  },
];
