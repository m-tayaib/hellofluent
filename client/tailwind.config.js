module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        logo: 'var(--color-logo)',
        bgPrimary: 'var(--color-bgPrimary)',
        bgSecondary: 'var(--color-bgSecondary)',
      },
    },
  },
  plugins: [],
} 