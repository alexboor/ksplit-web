/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#7C55F0',
        'brand-blue':   '#7EB8F7',
        'brand-pink':   '#D060CF',
        'surface':      '#111118',
        'surface-alt':  '#0C0C13',
      },
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-phone': 'floatPhone 6s ease-in-out infinite',
        'glow-breath': 'glowBreath 7s ease-in-out infinite',
        'glow-breath-slow': 'glowBreath 9s ease-in-out infinite 3s',
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fadeIn 0.6s ease both',
      },
      keyframes: {
        floatPhone: {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%':      { transform: 'translateY(-20px) rotate(-3deg)' },
        },
        glowBreath: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
