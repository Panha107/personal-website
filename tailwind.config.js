/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{html,js,vue}",
    "./layouts/**/*.vue",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto", sans-serif'],
      },
    },
  },
  // ...
};
