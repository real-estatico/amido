import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'luxury-display': ['Playfair Display', 'Cormorant Garamond', 'serif'],
        'luxury-heading': ['Playfair Display', 'Cormorant Garamond', 'serif'],
        'luxury-body': ['Heebo', 'Assistant', 'sans-serif'],
        'luxury-accent': ['Assistant', 'Rubik', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
