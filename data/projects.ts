export type ProjectStatus = "live" | "wip" | "prototype";

export type Project = {
  n: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: readonly string[];
  year: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  github?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "Weather App",
    subtitle: "Live Weather Dashboard",
    desc: "My first weather website built in 2022. Live weather data with clean UI. Deployed on Firebase - still running. Looking forward to upgrading it using latest technology in 2026.",
    tags: ["React.js", "Weather API", "Firebase", "Tailwindcss"],
    year: "2022",
    category: "Live Weather",
    status: "live",
    statusLabel: "Live",
    github: "https://github.com/shajinahsan/shajin-weather",
    liveUrl: "https://shajin-weather.web.app",
  },
  {
    n: "02",
    title: "Tesla Dashcam Insight",
    subtitle: "Video Analysis Tool",
    desc: "Parses hours of Tesla dashcam footage to surface interesting events — detects lane changes, near-misses, and extracts clips automatically. Built for researchers and curious owners.",
    tags: ["Python", "OpenCV", "Video Processing"],
    year: "2026",
    category: "Computer Vision",
    status: "prototype",
    statusLabel: "Prototype",
  },
  {
    n: "03",
    title: "Drone with MPU6050",
    subtitle: "Gyro Stabilization • WIP",
    desc: "Upcoming drone project using MPU6050 gyro sensor for stabilization. ESP32 + flight controller logic — work in progress, learning flight dynamics.",
    tags: ["ESP32", "MPU6050", "Gyro"],
    year: "2026",
    category: "In the lab",
    status: "wip",
    statusLabel: "Building",
  },
  {
    n: "04",
    title: "Remote Wall Socket",
    subtitle: "Relay Module • ESP32",
    desc: "Remote controlled wall socket using relay module. Control home appliances from distance using ESP-01 WiFi module. Built for home automation curiosity.",
    tags: ["ESP32", "Relay Module", "Circuits"],
    year: "2024",
    category: "Internet of Things",
    status: "prototype",
    statusLabel: "Prototype",
  },
  {
    n: "05",
    title: "Line Following Car",
    subtitle: "Robotics • Sensors",
    desc: "Autonomous line-following car using IR sensors and Arduino. PID tuned, obstacle aware.",
    tags: ["Arduino Nano", "IR Sensors"],
    year: "2023",
    category: "Autonomous",
    status: "prototype",
    statusLabel: "Prototype",
  },
  {
    n: "06",
    title: "Face Attendance Logger",
    subtitle: "Computer Vision • Real-Time",
    desc: "Replaces manual roll calls. It reads a live camera feed, detects every face in the frame, turns each one into a 128-dimensional embedding, and matches it against a pre-encoded database. Every match lands on an admin dashboard with a timestamp.",
    tags: ["Python", "OpenCV", "Face Embeddings", "SQLite / PostgreSQL"],
    year: "2026",
    category: "Computer Vision",
    status: "prototype",
    statusLabel: "Prototype",
  },
];

export const projectCount = projects.length;

export function getProject(n: string) {
  const project = projects.find((entry) => entry.n === n);

  if (!project) {
    throw new Error(`Unknown project number: ${n}`);
  }

  return project;
}
