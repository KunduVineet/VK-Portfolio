/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#242430', // Custom color name
        black: '#24242f',
        blackish: '#191923',
        colorhead: '#ffc107', // Custom yellow color for heading
      },
      backgroundImage: {
        'parallax': "url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIAz.img')", // Example parallax background
      },
      zIndex: {
        '-10': '-10', // For layer control
      },
      // Custom Animation
      animation: {
        'slide-in': 'slideIn 1s ease-out', // Custom sliding animation
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
