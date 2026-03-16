/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Bebas Neue', 'cursive'],
      },
      colors: {
        cyber: {
          bg: '#050505',
          card: '#0d0d0d',
          border: '#1a1a1a',
          cyan: '#00f5d4',
          emerald: '#00d68f',
          purple: '#7c3aed',
          red: '#ff3366',
          yellow: '#ffd60a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
        'glitch': 'glitch 1s step-start infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00f5d4, 0 0 20px #00f5d4' },
          '100%': { textShadow: '0 0 20px #00f5d4, 0 0 40px #00f5d4, 0 0 80px #00f5d4' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 0 0)' },
          '20%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-4px)' },
          '40%': { clipPath: 'inset(60% 0 20% 0)', transform: 'translate(4px)' },
          '60%': { clipPath: 'inset(40% 0 40% 0)', transform: 'translate(-2px)' },
          '80%': { clipPath: 'inset(10% 0 80% 0)', transform: 'translate(2px)' },
        },
      },
    },
  },
  plugins: [],
}
