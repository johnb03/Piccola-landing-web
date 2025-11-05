/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      // map your CSS variables to Tailwind color names (use lowercase keys)
      colors: {
        primary: {
          'light': 'var(--color-primary-Light)',
          'light-hover': 'var(--color-primary-Light-hover)',
          'light-active': 'var(--color-primary-Light-active)',
          'normal': 'var(--color-primary-Normal)',
          'normal-hover': 'var(--color-primary-Normal-hover)',
          'normal-active': 'var(--color-primary-Normal-active)',
          'dark': 'var(--color-primary-Dark)',
          'dark-hover': 'var(--color-primary-Dark-hover)',
          'dark-active': 'var(--color-primary-Dark-active)',
          'darker': 'var(--color-primary-Darker)'
        },
        secondary: {
          'light': 'var(--color-Secondary-Light)',
          'light-hover': 'var(--color-Secondary-Light-hover)',
          'light-active': 'var(--color-Secondary-Light-active)',
          'normal': 'var(--color-Secondary-Normal)',
          'normal-hover': 'var(--color-Secondary-Normal-hover)',
          'normal-active': 'var(--color-Secondary-Normal-active)',
          'dark': 'var(--color-SecondaryDark)',
          'dark-hover': 'var(--color-Secondary-Dark-hover)',
          'dark-active': 'var(--color-Secondary-Dark-active)',
          'darker': 'var(--color-Secondary-Darker)'
        },
        background: 'var(--color-background)',
        'text-white': 'var(--color-text-white)'
      }
    }
  },
  plugins: [],
};
