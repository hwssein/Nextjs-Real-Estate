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
        sans: ["Zain", "sans-serif"],
        mono: ["Montserrat", "sans-serif"],
      },
    },

    colors: {
      bgMain: "#f5f5f4",
      primary: "#0f766e",
      darkPrimary: "#134e4a",
      secondary: "#042f2e",
      line: "#a1a1aa",
    },
  },
  plugins: [],
};
