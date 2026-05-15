export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#0a0a0a',
        accent: '#ffffff',
        muted: '#f9f9f9',
        border: '#eeeeee',
        graphite: '#181818',
        slate: '#404040',
        charcoal: '#111111',
        glass: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
