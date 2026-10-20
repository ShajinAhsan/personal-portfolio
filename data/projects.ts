export type Project = {
  n: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  year: string;
  github?: string;
  wip?: boolean;
};

export const featuredProject = {
  n: "01",
  title: "Weather App",
  tagline: "My first live website — 2022",
  desc: "My first weather website built in 2022. Live weather data with clean UI. Deployed on Firebase — still running. Where my web journey started after MERN from Programming Hero.",
  tags: ["JavaScript", "Weather API", "Firebase Hosting", "2022"],
  liveUrl: "https://shajin-weather.web.app",
  meta: "2022 • Featured • Live",
};

export const projects: Project[] = [
  {
    n: "02",
    title: "Remote Wall Socket",
    subtitle: "Relay Module • Arduino",
    desc: "Remote controlled wall socket using relay module. Control home appliances from distance — hardware hack for daily convenience.",
    tags: ["Arduino Uno R3", "Relay Module", "Circuits"],
    year: "2023",
    github: "https://github.com/shajinahsan",
  },
  {
    n: "03",
    title: "Line Following Car",
    subtitle: "Robotics • Sensors",
    desc: "Autonomous line-following car using IR sensors and Arduino. PID tuned, obstacle aware. Built for CUET robotics curiosity.",
    tags: ["Arduino Nano", "IR Sensors", "Robotics"],
    year: "2023",
  },
  {
    n: "04",
    title: "Drone with MPU6050",
    subtitle: "Gyro Stabilization • WIP",
    desc: "Upcoming drone project using MPU6050 gyro sensor for stabilization. ESP32 + flight controller logic — work in progress, learning flight dynamics.",
    tags: ["ESP32", "MPU6050", "Drone • WIP"],
    year: "2025",
    wip: true,
  },
  {
    n: "05",
    title: "CampusConnect",
    subtitle: "Student Platform",
    desc: "A unified hub for CUET students — class routines, club updates, lost & found, and peer help. Reducing friction between notice boards and reality.",
    tags: ["React", "Firebase", "Product Design"],
    year: "2024",
  },
  {
    n: "06",
    title: "Tesla Dashcam Insight",
    subtitle: "Video Analysis Tool",
    desc: "Parses Tesla dashcam footage to surface interesting events — lane changes, near-misses, auto clip extraction. For researchers and curious owners.",
    tags: ["Python", "OpenCV", "Data Viz"],
    year: "2024",
  },
  {
    n: "07",
    title: "Bravo",
    subtitle: "Team Motivation App",
    desc: "Lightweight tool for small engineering teams to give meaningful kudos — not just likes. Designed for CUET project groups.",
    tags: ["Next.js", "Design System", "Behavioural"],
    year: "2025",
  },
];

export const projectCount = projects.length + 1;
