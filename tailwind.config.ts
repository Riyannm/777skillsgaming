import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00B4D8",
          foreground: "#020617",
        },
        secondary: {
          DEFAULT: "#F7941D",
          foreground: "#020617",
        },
        background: "#020617",
        foreground: "#E5E7EB",
        muted: {
          DEFAULT: "#0B1220",
          foreground: "#9CA3AF",
        },
        border: "#1E293B",
        accent: {
          DEFAULT: "#38BDF8",
          foreground: "#020617",
        },
        // Legacy colors for backward compatibility
        "primary-blue": "#00B4D8",
        "primary-orange": "#F7941D",
        "dark-navy": "#020617",
        "accent-cyan": "#38BDF8",
        "accent-gold": "#FFB703",
        "success-green": "#06D6A0",
      },
    },
  },
  plugins: [],
};

export default config;
