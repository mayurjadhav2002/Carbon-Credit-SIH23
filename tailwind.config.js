/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Flowbite Library
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Flowbite Plugin
    require('flowbite/plugin')
  ],
}

