/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './screen/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#404E56',
        error: '#FF6388',
        black: '#000000',
        green: '#ACFF76',
        'green-outline': '#64FF00',
        'gray-900': '#070B22',
        'gray-800': '#7F7F80',
        'gray-700': '#8C959A',
        'gray-600': '#4E5F69',
        'gray-500': '#C7C7C7',
        'gray-300': '#A4B2BA',
        'gray-200': '#D9D9D9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        '.basic_content_layout' : {
          'width': '100%',
          'display' : 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'justify-content': 'center',
          'max-width': '1024px',
          'padding-left': '50px',
          'padding-right': '50px',
        }
      });
    }
  ],
}
