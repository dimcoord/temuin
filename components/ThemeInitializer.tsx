"use client";
import { useEffect } from "react";

// Adds or removes the `dark` class on the <html> element based on local time.
// Night hours are configurable here (default: 19:00 - 06:00).
export default function ThemeInitializer({
  nightStart = 18,
  nightEnd = 6,
}: {
  nightStart?: number;
  nightEnd?: number;
}) {
  useEffect(() => {
    function applyTheme() {
      try {
        const hour = new Date().getHours();
        const isNight = nightStart <= nightEnd ? hour >= nightStart && hour < nightEnd : hour >= nightStart || hour < nightEnd;
        const el = document.documentElement;
        if (isNight) el.classList.add("dark");
        else el.classList.remove("dark");
      } catch (e) {
        // noop
      }
    }

    applyTheme();
    const id = setInterval(applyTheme, 60 * 1000); // recheck every minute
    return () => clearInterval(id);
  }, [nightStart, nightEnd]);

  return null;
}
