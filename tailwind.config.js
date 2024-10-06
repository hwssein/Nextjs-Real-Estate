/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--fa-font)"],
        mono: ["var(--en-font)"],
      },
    },

    colors: {
      bgMain: "#f5f5f5",
      primary: "#be123c",
      primaryHover: "#9f1239",
      secondary: "#262626",
    },
  },
  plugins: [],
};
