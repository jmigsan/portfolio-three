/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Apfel Grotezk Regular', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        display: ['Nacelle Heavy', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
