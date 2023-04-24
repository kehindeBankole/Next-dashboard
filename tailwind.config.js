/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(240, 7%, 8%, 1)',
        gray: 'hsla(208, 11%, 38%, 1)',
        orange: 'hsla(19, 100%, 51%, 1)',
        'orange-light': 'hsla(19, 100%, 95%, 1)',
        'dark-gray': 'hsla(210, 11%, 22%, 1)',
      },
      borderColor: {
        primary: 'hsla(224, 27%, 95%, 1)',
      },
      fontFamily: {
        'dm-sans': '"DM Sans", sans-serif',
      },
    },
  },
  plugins: [],
};
