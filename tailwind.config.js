/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070A0F",
        surface: {
          DEFAULT: "#0B0F17",
          panel: "#0F141F",
          card: "#141B2A",
          hover: "#182235",
          active: "#1E2A42",
        },
        border: {
          subtle: "#17202F",
          DEFAULT: "#1E293B",
          strong: "#2B3A52",
        },
        institutional: {
          emerald: "#10B981",
          emeraldDark: "#047857",
          rose: "#F43F5E",
          roseDark: "#BE123C",
          amber: "#F59E0B",
          cyan: "#0EA5E9",
          slate: "#94A3B8",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "IBM Plex Mono", "SF Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        terminal: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)",
        panel: "0 4px 20px -2px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
