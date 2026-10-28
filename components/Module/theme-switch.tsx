"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="flex justify-center items-center w-11 h-11 text-gray-500 rounded-lg border border-gray-200 transition-colors hover:text-ink hover:border-gray-400"
    >
      {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
}
