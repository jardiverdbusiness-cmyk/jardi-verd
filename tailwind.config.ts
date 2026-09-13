import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f4",
          100: "#e0ece4",
          200: "#c1d9ca",
          300: "#96c0a7",
          400: "#679f82",
          500: "#457a63",
          600: "#33604d",
          700: "#2a4d3f",
          800: "#20392f",
          900: "#182b23",
          950: "#0e1b16",
        },
        cream: {
          50: "#fffdf8",
          100: "#fbf6ea",
          200: "#f6ecd6",
          300: "#eeddb6",
          400: "#e2c88b",
          500: "#d3ae5e",
        },
        gold: {
          400: "#d9a441",
          500: "#c18a2c",
          600: "#a06f21",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1ea952",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(14, 27, 22, 0.12)",
        card: "0 8px 30px -8px rgba(14, 27, 22, 0.18)",
      },
      backgroundImage: {
        "leaf-texture":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
