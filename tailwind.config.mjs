/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: { 950: '#123D2D', 900: '#1F573F', 800: '#2F7D5B', 100: '#DDEFE5', 50: '#EFF8F2' },
        gold: { 300: '#ffda65', 400: '#ffc83d', 500: '#efb52a' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 45px rgba(18, 61, 45, .14)',
      },
    },
  },
  plugins: [],
};
