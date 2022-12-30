/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        mount: {
          "0%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        mount: "mount ease",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
