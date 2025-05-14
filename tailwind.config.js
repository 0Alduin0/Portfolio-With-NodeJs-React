/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ana arka plan rengi (App.js, tüm section'lar)
        darkPurple: "#291740",

        // Kartlar ve form alanları arka planı (About.js, Projects.js, Contact.js, Footer.js)
        darkBlue: "#0f172a",

        // Buton hover efekti (Hero.js)
        lightBlue: "#60a5fa",

        // Metin rengi (tüm componentler)
        lightGray: "#f8fafc",

        // Vurgu rengi - butonlar, ikonlar, hover efektleri (tüm componentler)
        accentBlue: "#3b82f6",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
