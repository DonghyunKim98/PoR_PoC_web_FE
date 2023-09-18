/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

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
        'landing-primary': '#8BD0FF',
        'landing-secondary': '#77A1D0',
        'landing-tertiary': '#3657B8',
        'landing-gray-100': '#F3F3F3',
        'landing-gray-700': '#888888',
        'landing-gray-800': '#6C6C6C',
        'landing-gray-1000': '#111111', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        h1: {
          css: {
            'font-size': '48px',
            'font-style': 'normal',
            'font-weight': 900,
            'letter-spacing': '-1px',
            'line-height': '55px',
          }
        },
        h2: {
          css: {
            'font-size': '38px',
            'font-style': 'normal',
            'font-weight': 900,
            'letter-spacing': '-0.1px',
            'line-height': '49px',
          }
        },
        h3: {
          css: {
            'font-size': '27px',
            'font-style': 'normal',
            'font-weight': 300,
            'line-height': '38px',
            'letter-spacing': '0.1px',
          },
        },
        h4: {
          css: {
            'font-size': '27px',
            'font-style': 'normal',
            'font-weight': 900,
            'line-height': '38px',
            'letter-spacing': '-0.1px',
          },
        },
        title1: {
          css: {
            'font-size': '22px',
            'font-style': 'normal',
            'font-weight': 600,
            'line-height': '18px',
            'letter-spacing': '-0.1px',
          },
        },

        title2: {
          css: {
            'font-size': '18px',
            'font-style': 'normal',
            'font-weight': 400,
            'line-height': '28px',
          }
        },
        title3: {
          css: {
            'font-size': '16px',
            'font-style': 'normal',
            'font-weight': 700,
            'line-height': '22px',
            'letter-spacing': '0.1px',
          },
        },
        body1: {
          css: {
            'font-size': '16px',
            'font-style': 'normal',
            'font-weight': 300,
            'line-height': '24px',
            'letter-spacing': '0.1px',
          },
        },
        body2: {
          css: {
            'font-size': '10px',
            'font-style': 'normal',
            'font-weight': 400,
            'line-height': '14px',
            'letter-spacing': '0.1px',
          },
        },
        banner1: {
          css: {
            'font-size': '14px',
            'font-style': 'normal',
            'font-weight': 500,
            'line-height': 'normal',
            'letter-spacing': '0.1px',
          }
        },
        banner2: {
          css: {
            'font-size': '7px',
            'font-style': 'normal',
            'font-weight': 500,
            'line-height': 'normal',
            'letter-spacing': '0.1px',
          }
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        '.landing_screen_gradient': {
            background: 'linear-gradient(90deg, #8BD0FF 32.59%, #3657B8 68%)',
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
        },
        '.cta_button': {
          display: 'inline-flex',
          padding: '12px 24px',
          'flex-direction': 'column',
          'align-items': 'center',
          'gap': '10px',
          'border-radius': '5px',
          'background': 'linear-gradient(91deg, #77a1d0 0.72%, #77a1d0 49.33%, #324c95 100%)',
          color: '#fff',
          'text-align': 'center',
          'font-size': '16px',
          'font-style': 'normal',
          'font-weight': '700',
          'line-height': '24px',
          'letter-spacing':' 0.1px'
        },
        'fourth_section_content': {
          'color': '#fff',
          'text-align': 'center',
          'font-size': '27px',
          'font-style': 'normal',
          'font-weight': '500',
          'line-height': '38px',
          'letter-spacing': '0.1px'
        }
      });
    }
  ],
}
