/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    /* Sizes */
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12,88%, 95%)",
        DarkBlue: "hsl(219, 43%, 22%)",
        LightBlue: "hsl(206, 91%, 73%)",
        Gray: "hsl(0, 0%, 70%)",
        DarkGreen: "hsl(122, 43%, 22%)",
        LightGreen: "hsl(136, 73%, 68%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
