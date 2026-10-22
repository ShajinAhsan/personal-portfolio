"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Icons swap with Tailwind's `dark:` variant, so the markup is identical on the
 * server and the client (no mounted-state flicker or hydration mismatch).
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-9 w-9 rounded-full border flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer"
      style={{ borderColor: "var(--line)", background: "var(--card)" }}
      aria-label="Toggle color theme"
    >
      <div className="relative h-4 w-4">
        <Sun
          size={16}
          className="absolute inset-0 transition-all opacity-100 rotate-0 scale-100 dark:opacity-0 dark:rotate-90 dark:scale-0"
        />
        <Moon
          size={16}
          className="absolute inset-0 transition-all opacity-0 -rotate-90 scale-0 dark:opacity-100 dark:rotate-0 dark:scale-100"
        />
      </div>
    </button>
  );
}
