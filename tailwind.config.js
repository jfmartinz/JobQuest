/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html,', './src/**/*.{vue, js, ts}'],
  theme: {
    extend: {
      colors: {
        'brand-gray-1': '#DADCE0',
        'brand-gray-2': '#f8f9fa',
        'brand-gray-3': '#80868b',
        'brand-blue-1': '#1967D2',
        'brand-blue-2': '#4285f4',
        'brand-green-1': '#137333'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        blue: '1px 1px 2px #4285f4'
      }
    }
  }
};
