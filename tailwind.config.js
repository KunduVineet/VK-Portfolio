/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        darkGray: "#242430", // Dark gray color for backgrounds
        black: "#24242f", // Slightly lighter black
        blackish: "#191923", // For contrasting dark UI sections
        colorhead: "#ffc107", // Custom yellow for headings or highlights
      },
      // Custom Background Images
      backgroundImage: {
        parallax: "url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIAz.img')", // Example parallax image
      },
      // Z-Index Layers
      zIndex: {
        "-10": "-10", // Negative stacking order
      },
      // Custom Animations
      animation: {
        "slide-in": "slideIn 1s ease-out", // Slide-in effect
        wobble: "wobble 1s ease-in-out", // Wobble effect
        "flip-in": "flipIn 1s ease-out", // Flip-in animation
        "bounce-slow": "bounce-slow 1s ease-in-out infinite", // Slow bounce effect
        "fade-in-scale": "fadeInScale 1s ease-out", // Smooth fade-in with scaling effect
      },
      // Keyframes for Custom Animations
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        wobble: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        flipIn: {
          "0%": { transform: "rotateY(-180deg)", opacity: 0 },
          "100%": { transform: "rotateY(0deg)", opacity: 1 },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(8)" },
          "50%": { transform: "translateY(-5px)" },
        },
        fadeInScale: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
