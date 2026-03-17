import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal — extraída de image_0.png
        malva: {
          50:  "#F4F1F7",
          100: "#E8E3F0",
          200: "#D0C7E1",
          300: "#B8AACF",
          400: "#9F8EBC",
          500: "#8871A9",
          600: "#725794",
          700: "#594D66", // fondo principal oscuro
          800: "#3E3547",
          900: "#231D28",
          950: "#120F15",
        },
        crema: {
          50:  "#FDFCFE",
          100: "#F8F7F9", // fondo sección clara
          200: "#F0EDF4",
          300: "#E8E3ED",
          400: "#DDD7E6",
          500: "#C8BFDA",
        },
        lavanda: {
          100: "#EDE8F5",
          200: "#DAD1EB",
          300: "#C7BAE1",
          400: "#A99AC9",
          500: "#8B7BB1",
        },
        // Texto
        text: {
          light:  "#FDFCFE",    // títulos sobre fondo oscuro
          muted:  "#E0DBE8",    // subtítulos sobre fondo oscuro
          dark:   "#2C2735",    // texto sobre fondo claro
          medium: "#5A5165",    // texto secundario sobre fondo claro
        },
      },
      fontFamily: {
        heading: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)",   { lineHeight: "1.1", fontWeight: "800" }],
        "display-lg": ["clamp(2rem,   4vw, 3rem)",   { lineHeight: "1.15", fontWeight: "700" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2",  fontWeight: "700" }],
        "display-sm": ["clamp(1.25rem,2vw, 1.75rem)", { lineHeight: "1.3",  fontWeight: "600" }],
      },
      backgroundImage: {
        "gradient-malva":
          "linear-gradient(135deg, #3E3547 0%, #594D66 50%, #725794 100%)",
        "gradient-malva-soft":
          "linear-gradient(160deg, #594D66 0%, #8B7BB1 100%)",
        "gradient-crema":
          "linear-gradient(180deg, #F8F7F9 0%, #F0EDF4 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #231D28 0%, #3E3547 40%, #594D66 70%, #725794 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "organic": "60% 40% 55% 45% / 45% 55% 45% 55%",
      },
      boxShadow: {
        "malva-sm": "0 2px 8px rgba(89,77,102,0.15)",
        "malva-md": "0 4px 20px rgba(89,77,102,0.25)",
        "malva-lg": "0 8px 40px rgba(89,77,102,0.35)",
        "glow":     "0 0 60px rgba(139,123,177,0.3)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "blob": "blob 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%" },
          "33%":       { borderRadius: "50% 50% 40% 60% / 55% 45% 55% 45%" },
          "66%":       { borderRadius: "45% 55% 60% 40% / 40% 60% 50% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
