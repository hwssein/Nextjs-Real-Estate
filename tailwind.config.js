/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bgMain: "#18181b",
      bgCard: "#3f3f46",
      primary: "#0e7490",
      secondary: "#a5f3fc",
      font: "#fafafa",
    },
    extend: {
      fontFamily: {
        sans: ["var(--fa-font)"],
        mono: ["var(--en-font)"],
      },
    },
  },
  plugins: [],
};
