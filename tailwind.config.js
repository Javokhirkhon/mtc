/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xl: '1300px',
      '2xl': '1300px',
    },
    container: {
      center: true,
    },
    fontSize: {
      sm: ['0.813rem', '1.125rem'],
      base: ['0.938rem', '1.25rem'],
      xl: '1.25rem',
      '2xl': ['1.5rem', '2.625rem'],
      '3xl': ['2rem', '2.625rem'],
      '4xl': ['2.625rem', '3.25rem'],
      '5xl': ['3.25rem', '3.625rem'],
    },
    letterSpacing: {
      widest: '0.1875em',
    },
    fontFamily: {
      helvetica: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      spacing: {
        110: '110px',
        600: '600px',
        900: '900px',
      },
    },
  },
  plugins: [],
}
