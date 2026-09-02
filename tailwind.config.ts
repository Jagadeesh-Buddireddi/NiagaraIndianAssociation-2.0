import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        foreground: "#0F172A",

        primary: {
          DEFAULT: "#FF9933",
          dark: "#E88716",
          light: "#FFB966",
        },

        secondary: {
          DEFAULT: "#138808",
          dark: "#0F6D06",
          light: "#33A830",
        },

        canadian: {
          DEFAULT: "#D52B1E",
        },

        navy: {
          DEFAULT: "#0B1F3A",
        },

        muted: {
          DEFAULT: "#64748B",
        },
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        glass: "0 8px 32px rgba(15,23,42,0.08)",
        card: "0 20px 60px rgba(15,23,42,0.08)",
        hero: "0 40px 80px rgba(15,23,42,0.15)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
};

export default config;