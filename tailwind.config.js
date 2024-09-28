/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [],
  theme: {
    extend: {
      colors:{
        'bg-yellow':'#FFFAF1',
        'c-blue':'#2496F0',
        'c-orange':'#FED430',
        'c-red':'#FF837E'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif','Noto-Serif-TC'],
        'Noto-Serif-TC': ['Noto Serif TC', 'serif'],
      },
       fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      rotate: {
        '30': '30deg',
      }
    },
  },
  plugins: [],
}