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
        primary: '#eb5e28',
        secondary: '#252422',
        tertiary: '#403d39',
        light: '#fffcf2',
      }
    },
  },
  plugins: [],
}
export default config
