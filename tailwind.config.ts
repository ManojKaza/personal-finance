import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class', // <-- Your configuration goes here
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config