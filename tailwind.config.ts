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
        primary: '#FB6E52',
        secondary: '#568265',
        accent: {
          green: '#92C3A4',
          yellow: '#FFCE55',
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

