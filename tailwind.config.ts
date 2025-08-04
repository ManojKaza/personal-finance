import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This is essential
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config