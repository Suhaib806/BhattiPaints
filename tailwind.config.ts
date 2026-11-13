import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2500px",
        "5xl": "3400px",
      },
      colors: {
        alabaster: "#FAF8F5",
        linen: "#F2EDE4",
        travertine: "#E6DFD3",
        charcoal: "#161514",
        umber: "#5C564F",
        hairline: "#DDD6CC",
        bhatti: {
          red: "#C8283C",
          magenta: "#B5267F",
          orange: "#F08A1C",
          yellow: "#F2E40F",
          green: "#3FAE49",
          teal: "#3CB8B0",
          blue: "#1E73BE",
          indigo: "#3B3F8F",
        },
      },
      fontFamily: {
        sans: ["Moderat", "var(--font-moderat)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        serif: ["Moderat", "var(--font-moderat)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Moderat", "var(--font-moderat)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["Moderat Mono", "Moderat", "var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
