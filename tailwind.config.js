/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linen: 'var(--background-secondary)',
        ivory: 'var(--surface)',
        clay: 'var(--gold)',
        moss: 'var(--gold-light)',
        ink: 'var(--navy)',
        muted: 'var(--text-secondary)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 20px 60px var(--shadow)'
      }
    }
  },
  plugins: []
};
