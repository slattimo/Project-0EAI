import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    "./src/renderer/**/*.{js,ts,jsx,tsx,html}",
    "./src/renderer/index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        // Buttons & Icons: #f16363
        // Hover Background: #fdaaaa
        // Background: #fbf9f9

        primary: "#f16363",
        secondary: "#fdaaaa",
        dark: {
          // Background: #1a1a1a
          // SideBar & Card Background: #242424

          bg: "#1a1a1a",
          bgmain: "#1a1818",
          bgsidebar: "#242424",
          card: "#242424",
          text: "#f7fafc",
        },
        light: {
          // Main Area Background: #fcf7f7
          // SideBar & Card Background: #fbf9f9

          bg: "#fbf9f9",
          bgmain: "#fff0f0",
          bgsidebar: "#fbf9f9",
          card: "#fbf9f9",
          text: "#1a1a1a",
        },
      },
      borderRadius: {
        xl: "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
