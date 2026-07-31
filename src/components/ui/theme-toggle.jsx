"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.theme = dark ? "dark" : "light";
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
    >
      <Moon aria-hidden="true" className="h-4 w-4 dark:hidden" />
      <Sun aria-hidden="true" className="h-4 w-4 hidden dark:block" />
    </button>
  );
}
