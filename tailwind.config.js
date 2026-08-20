/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0F1420',
        surface: '#161D2E',
        line: '#293349',
        paper: '#FFFFFF',
        muted: '#9BA7B7',
        signal: '#29C5F6',
        signalDark: '#0E7490',
        ink: '#10131C',
        canvas: '#F6F7FB',
        card: '#FFFFFF',
        edge: '#E3E7EF',
        slate: '#5B6472',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
