import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#12121a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 8px 30px rgba(99, 102, 241, 0.22)'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 10% 10%, rgba(99,102,241,0.24), transparent 35%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.18), transparent 30%)'
      }
    }
  },
  plugins: []
};

export default config;
