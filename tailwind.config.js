/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Established design system: white / near-black / antique gold.
        cream: '#FFFFFF',      // main light background (pure white)
        black: '#0A0A0A',      // nav bar + dark panels
        ink: '#1A1A1A',        // ink text
        offwhite: '#F4EFE6',   // text on dark
        // antique gold family (replaces the old champagne)
        gold: { DEFAULT: '#C6A15B', light: '#D4B87A', dark: '#B8935A' },
        champagne: { DEFAULT: '#D4B87A', accent: '#C6A15B' }, // aliases kept for existing classes
        navy: '#0A0A0A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Parisienne"', 'cursive'],
        sans: ['"Jost"', 'Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: { soft: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
}
