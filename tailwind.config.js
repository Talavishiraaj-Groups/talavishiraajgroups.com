module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2F3E3E', // Deep Charcoal Teal
        secondary: '#1D2A2A', // Very Dark Slate
        accent: '#465554', // Muted Teal-Green Accent
        'primary-light': '#435656', // Lightened primary for hover
        'secondary-light': '#2C3C3C', // Lightened secondary for hover
        'accent-light': '#5B6B6A', // Lightened accent for hover
      },
    },
  },
  plugins: [],
}
