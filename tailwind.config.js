/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#C04000',
        secondary: '#F3F4F6',
        'text-dark': '#1F2937',
        'text-light': '#6B7280',
        'bg-white': '#FFFFFF',
        'accent-success': '#10B981',
        'accent-warning': '#F59E0B',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.25rem',
        'h2': '1.875rem',
        'h3': '1.5rem',
        'body': '1rem',
        'small': '0.875rem',
      },
      spacing: {
        '15': '3.75rem', // 60px for collapsed sidebar
        '18': '4.5rem',
      },
      width: {
        'sidebar': '250px',
        '15': '3.75rem', // 60px for collapsed sidebar
      },
      margin: {
        'sidebar': '250px',
        '15': '3.75rem', // 60px for collapsed sidebar
      },
      maxWidth: {
        'search': '720px',
      },
      boxShadow: {
        'light': '0 1px 3px rgba(0,0,0,0.1)',
        'medium': '0 4px 6px rgba(0,0,0,0.1)',
        'sidebar': '2px 0 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};