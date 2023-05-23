/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Apfel Grotezk Regular', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        apfelGrotezk: ['Apfel Grotezk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
