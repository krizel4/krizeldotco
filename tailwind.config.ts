import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#92C3A4',
        secondary: '#FFCE55',
        accent: {
          green: '#568265',
          yellow: '#FB6E52',
          cream: '#F2F6EB',
          lime: '#DBF58E',
        },
      },
      fontFamily: {
        sans: ['var(--font-neue-haas)', 'system-ui', 'sans-serif'],
        display: ['var(--font-scotch)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config

