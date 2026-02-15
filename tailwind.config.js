/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
        display: ['Noto Serif JP', 'serif'],
      },
      colors: {
        brand: {
          50: '#f8fafc',  // Slate-50: Clean white background base
          100: '#f1f5f9', // Slate-100: Very light gray
          200: '#e2e8f0', // Slate-200: Light gray for borders
          300: '#cbd5e1', // Slate-300: Gray for disabled elements
          400: '#94a3b8', // Slate-400: Muted text
          500: '#64748b', // Slate-500: Secondary text
          600: '#475569', // Slate-600: Primary text
          700: '#334155', // Slate-700: Darker text
          800: '#1e293b', // Slate-800: Headings
          900: '#0f172a', // Slate-900: Black text
          // Accent Colors (Water/Science)
          'water': {
             50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            500: '#0ea5e9', // Orbis Blue
            600: '#0284c7',
          }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
