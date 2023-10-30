/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkbg1: "#0F0F10",
        darkbg2: "#18181b",
        darkbg3: "#242429",
        text1: "#dfdfdf",
        text2: "#a1a1aa",
        accent: "#5574a8",
      },
    },
  },
  plugins: [],
};
