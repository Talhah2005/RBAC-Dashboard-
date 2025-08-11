/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(214, 10%, 85%)',
        input: 'hsl(214, 10%, 85%)',
        ring: 'hsl(215, 20%, 65%)',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(222, 47%, 11%)',
        primary: { DEFAULT: 'hsl(222, 89%, 55%)' },
      },
      borderRadius: { lg: '12px', md: '10px', sm: '8px' },
    },
  },
  plugins: [],
}
