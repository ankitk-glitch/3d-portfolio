/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bim: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38aaf6',
          500: '#0e8de9',
          600: '#026fc7',
          700: '#0358a1',
          800: '#074b84',
          900: '#0b3f6f',
          950: '#07284a',
        },
        slate: {
          850: '#151f33',
          900: '#0f172a',
          950: '#080d1a',
        },
        thermal: {
          cold: '#3b82f6',
          cool: '#06b6d4',
          optimal: '#10b981',
          warm: '#f59e0b',
          hot: '#ef4444',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(14, 141, 233, 0.35)',
      }
    },
  },
  plugins: [],
}
