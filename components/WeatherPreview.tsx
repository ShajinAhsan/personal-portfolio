import { getDhakaWeather, type Weather } from "@/lib/weather";

function WeatherCard({
  weather,
  loading = false,
}: {
  weather: Weather | null;
  loading?: boolean;
}) {
  const dash = "—";
  const stats = [
    { k: "Humidity", v: weather ? `${weather.humidity}%` : dash },
    { k: "Wind", v: weather ? `${weather.windKmh} km/h` : dash },
    { k: "Feels", v: weather ? `${weather.feelsLike}°C` : dash },
  ];
  const status = loading
    ? "Loading…"
    : weather
      ? `Live API • Updated ${weather.updatedAt} Dhaka time`
      : "Live data unavailable right now";

  return (
    <div className="md:col-span-5 relative min-h-65 p-3 bg-[#0F0F0E]">
      <div className="h-full w-full rounded-[20px] border border-[#2A2A26] overflow-hidden relative p-5 flex flex-col justify-between bg-[#161614]">
        <div className="flex justify-between mono text-[9px] tracking-widest uppercase text-white/40">
          <span>Weather</span>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28CA42]" />
          </div>
        </div>
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-linear-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white text-[18px]">
              {weather?.icon ?? "⛅"}
            </div>
            <div>
              <div className="text-white font-bold text-[22px]">
                {weather ? `${weather.temp}°C` : dash}
              </div>
              <div className="mono text-[10px] text-white/60">
                Dhaka, Bangladesh •{" "}
                {weather?.description ?? (loading ? "Loading" : "Unavailable")}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {stats.map((s) => (
              <div
                key={s.k}
                className="rounded-[10px] bg-[#1E1E1A] border border-[#2A2A26] p-2.5"
              >
                <div className="mono text-[7px] text-white/40 uppercase tracking-widest">
                  {s.k}
                </div>
                <div className="text-white text-[12px] font-semibold mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
          <div className="h-8 rounded-full bg-[#1E1E1A] border border-[#2A2A26] flex items-center px-3 gap-2">
            <span
              className={`h-1 w-1 rounded-full ${weather ? "bg-[#16C784] animate-ping [animation-duration:2000ms]" : "bg-white/30"}`}
            />
            <span className="mono text-[10px] text-white/60">{status}</span>
          </div>
        </div>
        <div className="mono text-[8px] md:text-[10px] tracking-wide text-white/40 mt-4">
          Data via OpenWeather • Auto-syncs turned on
        </div>
      </div>
    </div>
  );
}

export function WeatherFallback() {
  return <WeatherCard weather={null} loading />;
}

export default async function WeatherPreview() {
  const weather = await getDhakaWeather();
  return <WeatherCard weather={weather} />;
}
