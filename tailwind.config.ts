import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],  
  theme: {
    extend: {
      colors: {
        gradientStart: '#FF7EB3',
        gradientEnd: '#77D9D5',
        gradientTestStart: '#3B82F6',
        gradientTestEnd: '#8B5CF6',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 5s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};

export default config;