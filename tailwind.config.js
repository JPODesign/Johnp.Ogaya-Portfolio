/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linen: 'var(--color-transition)',
        ivory: 'var(--color-text)',
        clay: 'var(--color-accent)',
        moss: 'var(--color-accent-soft)',
        ink: 'var(--color-text)',
        muted: 'var(--color-muted)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(2, 6, 23, 0.28)'
      }
    }
  },
  plugins: []
};
