import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ryujin: ['var(--font-ryujin-attack)'],
        gingsul: ['var(--font-gingsul)'],
        ryukosei: ['var(--font-ryukosei)'],
      },
      colors: {
        primary: '#414260',
        secondary: '#2d3748',
        'light-gray': '#f7fafc', // Add this line if you're using 'bg-light-gray' in your Navbar
      },
      animation: {
        'spin-slow': 'spin-ccw 20s linear infinite',
      },
      keyframes: {
        'spin-ccw': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
      },
      // ... rest of your theme configuration
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
