/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Remaps the 'pink' utility scale to the site's brick/ochre palette.
      // Components still reference Tailwind's pink-* classes; this keeps
      // every one of them on-brand without editing each file individually.
      colors: {
        pink: {
          25: '#FBF3EC',
          50: '#F7E9DD',
          100: '#EFD3B8',
          200: '#E0B287',
          300: '#C99A5B',
          400: '#B97D3F',
          500: '#A8622F',
          600: '#94402A',
          700: '#8C2F1F',
          800: '#6B2317',
          900: '#4A1810',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}