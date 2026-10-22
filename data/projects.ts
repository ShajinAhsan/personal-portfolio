export type Project = {
  n: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  year: string;
  github?: string;
  liveUrl?: string;
  wip?: boolean;
};

export const weatherProject: Project = {
  n: "01",
  title: "Weather App",
  subtitle: "Live Weather Dashboard",
  desc: "My first weather website built in 2022. Live weather data with clean UI. Deployed on Firebase - still running. Looking forward to upgrading it using latest technology in 2026.",
  tags: ["React.js", "Weather API", "Firebase", "Tailwindcss"],
  year: "2022",
  liveUrl: "https://shajin-weather.web.app",
};
export const dashcamProject: Project = {
  n: "02",
  title: "Tesla Dashcam Insight",
  subtitle: "Video Analysis Tool",
  desc: "Parses hours of Tesla dashcam footage to surface interesting events — detects lane changes, near-misses, and extracts clips automatically. Built for researchers and curious owners.",
  tags: ["Python", "OpenCV", "Video Processing"],
  year: "2026",
};
export const droneProject: Project = {
  n: "03",
  title: "Drone with MPU6050",
  subtitle: "Gyro Stabilization • WIP",
  desc: "Upcoming drone project using MPU6050 gyro sensor for stabilization. ESP32 + flight controller logic — work in progress, learning flight dynamics.",
  tags: ["ESP32", "MPU6050", "Gyro"],
  year: "2026",
  wip: true,
};
export const socketProject: Project = {
  n: "04",
  title: "Remote Wall Socket",
  subtitle: "Relay Module • ESP32",
  desc: "Remote controlled wall socket using relay module. Control home appliances from distance using ESP-01 WiFi module. Built for home automation curiosity.",
  tags: ["ESP32", "Relay Module", "Circuits"],
  year: "2024",
};
export const lineFollowerProject: Project = {
  n: "05",
  title: "Line Following Car",
  subtitle: "Robotics • Sensors",
  desc: "Autonomous line-following car using IR sensors and Arduino. PID tuned, obstacle aware.",
  tags: ["Arduino Nano", "IR Sensors"],
  year: "2023",
};

export const projects: Project[] = [
  weatherProject,
  dashcamProject,
  droneProject,
  socketProject,
  lineFollowerProject,
];

export const projectCount = projects.length;
