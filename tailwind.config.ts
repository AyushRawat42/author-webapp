import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pureBlack: '#050505',
        charcoal: '#111111',
        silver: '#C0C0C0',
        crimson: '#B5121B',
        glowRed: '#DC2626',
        antiqueGold: '#B08D57',
        gunmetal: '#777777',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'Cinzel', 'serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
