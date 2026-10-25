import { cacheLife } from "next/cache";

export type Weather = {
  temp: number;
  feelsLike: number;
  humidity: number;
  windKmh: number;
  description: string;
  icon: string;
  updatedAt: string;
};

type OpenWeatherResponse = {
  main: { temp: number; feels_like: number; humidity: number };
  wind: { speed: number };
  weather: { description: string; icon: string }[];
  dt: number;
};

const ICONS: Record<string, string> = {
  "01d": "☀️",
  "01n": "🌙",
  "02d": "⛅",
  "02n": "☁️",
  "10d": "🌦️",
  "10n": "🌧️",
  "03": "☁️",
  "04": "☁️",
  "09": "🌧️",
  "11": "⛈️",
  "13": "❄️",
  "50": "🌫️",
};

function emojiFor(code: string) {
  return ICONS[code] ?? ICONS[code.slice(0, 2)] ?? "🌡️";
}

function isOpenWeatherResponse(value: unknown): value is OpenWeatherResponse {
  if (typeof value !== "object" || value === null) return false;

  const data = value as Partial<OpenWeatherResponse>;
  const current = data.weather?.[0];

  return (
    typeof data.main?.temp === "number" &&
    typeof data.main?.feels_like === "number" &&
    typeof data.main?.humidity === "number" &&
    typeof data.wind?.speed === "number" &&
    typeof data.dt === "number" &&
    typeof current?.description === "string" &&
    typeof current?.icon === "string"
  );
}

export function parseWeather(data: OpenWeatherResponse): Weather {
  const w = data.weather[0];
  return {
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: Math.round(data.main.humidity),
    windKmh: Math.round(data.wind.speed * 3.6), // m/s → km/h
    description: w.description.charAt(0).toUpperCase() + w.description.slice(1),
    icon: emojiFor(w.icon),
    updatedAt: new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(data.dt * 1000)),
  };
}

// Cached for 10 minutes (a failed fetch is cached too, so the API isn't hammered while it's down).
// Errors are caught inside the cached function — throwing from it would fail the build.
export async function getDhakaWeather(): Promise<Weather | null> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 600, expire: 86400 });

  try {
    const key = process.env.OPENWEATHER_API_KEY;
    if (!key) throw new Error("OPENWEATHER_API_KEY is not set");

    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.search = new URLSearchParams({
      q: "Dhaka,BD",
      units: "metric",
      appid: key,
    }).toString();

    const res = await fetch(url, { signal: AbortSignal.timeout(5_000) });
    if (!res.ok) throw new Error(`OpenWeather responded ${res.status}`);

    const data: unknown = await res.json();
    if (!isOpenWeatherResponse(data)) {
      throw new Error("OpenWeather returned an unexpected payload");
    }

    return parseWeather(data);
  } catch (err) {
    console.error("[weather]", err);
    return null;
  }
}
