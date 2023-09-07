/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'luckiest': ["Luckiest Guy"],
      'roboto': ['Roboto'],
    },
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          light: withOpacity('--color-text-light'),
          color: withOpacity('--color-text-color'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'bg-base': withOpacity('--color-bg-base'),
          'bg-shadow': withOpacity('--color-bg-shadow'),
          'bg-base-hover': withOpacity('--color-bg-base-hover'),
          'bg-color': withOpacity('--color-bg-color'),
        },
      },
    },
  },
  plugins: [],
}

