/** @type {import('tailwindcss').Config} */
// Colors are CSS variables (app/globals.css) so `html.dark` flips the whole
// palette; components don't need dark: pairs for gray/ink/surface/accent.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: v("ink"),
        surface: v("surface"),
        accent: v("accent"),
        gray: {
          50: v("g50"),
          100: v("g100"),
          200: v("g200"),
          300: v("g300"),
          400: v("g400"),
          500: v("g500"),
          600: v("g600"),
          700: v("g700"),
          800: v("g800"),
          900: v("g900"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
