/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vivid: {
          DEFAULT: '#0080FF',
          dark: '#0066CC',
          light: '#3399FF',
          glow: 'rgba(0, 128, 255, 0.25)',
        },
        accentYellow: '#FACC15',
        contentBg: '#F8F9FA',
        cardBg: '#FFFFFF',
        darkGray: '#1F2937',
        subText: '#6B7280',
        lineBorder: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Pretendard Black', 'Impact', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '16/9': '16 / 9',
      },
      boxShadow: {
        'clean': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'blue-glow': '0 10px 25px -5px rgba(0, 128, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
