import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily:{
            sans:['Inter', ...defaultTheme.fontFamily.sans]
        }
    },
  },
plugins: [tailwindcssAnimate],
} satisfies Config