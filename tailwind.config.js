/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0b0d',
        surface: '#0f1115',
        elevated: '#14171c',
        line: '#1d2127',
        'line-strong': '#2b3139',
        txt: '#e9ebee',
        muted: '#a2a8b2',
        faint: '#7d848e',
        accent: '#5fd3bd',
        'accent-dim': '#3f9e8d',
      },
      fontFamily: {
        // Primary families
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        // Legacy aliases kept so the /admin CMS stays visually coherent
        display: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
      },
      borderRadius: {
        card: '12px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
