/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure all files are included
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens (e.g., mobile devices)
        'md': '768px',   // Medium screens (e.g., tablets)
        'lg': '1024px',  // Large screens (e.g., laptops)
        'xl': '1280px',  // Extra-large screens (e.g., desktops)
        '2xl': '1536px'  // 2X Extra-large screens (e.g., large desktops)
      }
    },
    fontFamily: {
      customFont: ['YourCustomFont', 'sans-serif'],
    },
    colors: {
      green: {
        50: 'hsl(120, 50%, 95%)',
        100: 'hsl(120, 50%, 90%)',
        200: 'hsl(120, 50%, 75%)',
        300: 'hsl(120, 50%, 60%)',
        400: 'hsl(120, 50%, 50%)',
        500: 'hsl(120, 60%, 40%)',
        600: 'hsl(120, 60%, 30%)',
        700: 'hsl(120, 60%, 20%)',
        800: 'hsl(120, 60%, 10%)',
        900: 'hsl(120, 60%, 5%)',
      },
      gray: {
        50: 'hsl(0, 0%, 98%)',
        100: 'hsl(0, 0%, 93%)',
        200: 'hsl(0, 0%, 80%)',
        300: 'hsl(0, 0%, 65%)',
        400: 'hsl(0, 0%, 50%)',
        500: 'hsl(0, 0%, 40%)',
        600: 'hsl(0, 0%, 30%)',
        700: 'hsl(0, 0%, 20%)',
        800: 'hsl(0, 0%, 10%)',
        900: 'hsl(0, 0%, 5%)',
      },
      blue: {
        50: 'hsl(200, 100%, 95%)',
        100: 'hsl(200, 100%, 85%)',
        200: 'hsl(200, 100%, 70%)',
        300: 'hsl(200, 100%, 55%)',
        400: 'hsl(200, 100%, 45%)',
        500: 'hsl(200, 100%, 35%)',
        600: 'hsl(200, 100%, 25%)',
        700: 'hsl(200, 100%, 15%)',
        800: 'hsl(200, 100%, 10%)',
        900: 'hsl(200, 100%, 5%)',
      },
      yellow: {
        50: 'hsl(50, 100%, 95%)',
        100: 'hsl(50, 100%, 85%)',
        200: 'hsl(50, 100%, 70%)',
        300: 'hsl(50, 100%, 55%)',
        400: 'hsl(50, 100%, 45%)',
        500: 'hsl(50, 100%, 35%)',
        600: 'hsl(50, 100%, 25%)',
        700: 'hsl(50, 100%, 15%)',
        800: 'hsl(50, 100%, 10%)',
        900: 'hsl(50, 100%, 5%)',
      },
      red: {
        50: 'hsl(0, 100%, 95%)',
        100: 'hsl(0, 100%, 85%)',
        200: 'hsl(0, 100%, 70%)',
        300: 'hsl(0, 100%, 55%)',
        400: 'hsl(0, 100%, 45%)',
        500: 'hsl(0, 100%, 35%)',
        600: 'hsl(0, 100%, 25%)',
        700: 'hsl(0, 100%, 15%)',
        800: 'hsl(0, 100%, 10%)',
        900: 'hsl(0, 100%, 5%)',
      },
      orange: {
        50: 'hsl(30, 100%, 95%)',
        100: 'hsl(30, 100%, 85%)',
        200: 'hsl(30, 100%, 70%)',
        300: 'hsl(30, 100%, 55%)',
        400: 'hsl(30, 100%, 45%)',
        500: 'hsl(30, 100%, 35%)',
        600: 'hsl(30, 100%, 25%)',
        700: 'hsl(30, 100%, 15%)',
        800: 'hsl(30, 100%, 10%)',
        900: 'hsl(30, 100%, 5%)',
      },
      purple: {
        50: 'hsl(270, 60%, 95%)',
        100: 'hsl(270, 60%, 85%)',
        200: 'hsl(270, 60%, 70%)',
        300: 'hsl(270, 60%, 55%)',
        400: 'hsl(270, 60%, 45%)',
        500: 'hsl(270, 60%, 35%)',
        600: 'hsl(270, 60%, 25%)',
        700: 'hsl(270, 60%, 15%)',
        800: 'hsl(270, 60%, 10%)',
        900: 'hsl(270, 60%, 5%)',
      },
      pink: {
        50: 'hsl(330, 100%, 95%)',
        100: 'hsl(330, 100%, 85%)',
        200: 'hsl(330, 100%, 70%)',
        300: 'hsl(330, 100%, 55%)',
        400: 'hsl(330, 100%, 45%)',
        500: 'hsl(330, 100%, 35%)',
        600: 'hsl(330, 100%, 25%)',
        700: 'hsl(330, 100%, 15%)',
        800: 'hsl(330, 100%, 10%)',
        900: 'hsl(330, 100%, 5%)',
      },
      white: "#fff",
      black: "#000",
      transparent: 'transparent',
    },
    backgroundImage: {
      'cool-blue': 'linear-gradient(135deg, #1E3A8A, #2563EB, #38BDF8)',
    },

  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px white",
          "color": "transparent",
        },
        ".text-stroke-sm": {
          "-webkit-text-stroke": "1px white",
          "color": "transparent",
        },
        ".text-stroke-lg": {
          "-webkit-text-stroke": "3px white",
          "color": "transparent",
        },
      });
    },
  ],
}

