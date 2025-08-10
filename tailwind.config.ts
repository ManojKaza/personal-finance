import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  // Tells Tailwind where to look for class names
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // Enables the class-based dark mode strategy
  darkMode: 'class',

  // Defines your project's custom design system
  theme: {
    extend: {
      // This links your custom color names (e.g., bg-background)
      // to the CSS variables you defined in index.css
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      // This sets "Inter" as the default font for your project
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  
  // Loads any Tailwind plugins
  plugins: [tailwindcssAnimate],

} satisfies Config