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
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        glow: "glow 2s ease-in-out infinite",
        "float-3d": "float-3d 6s ease-in-out infinite",
        "scale-up": "scale-up 0.3s ease-in-out forwards",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        glow: {
          "0%, 100%": {
            "box-shadow": "0 0 20px rgba(59, 130, 246, 0.5)",
            transform: "translateY(0)",
          },
          "50%": {
            "box-shadow": "0 0 30px rgba(59, 130, 246, 0.8)",
            transform: "translateY(-5px)",
          },
        },
        "float-3d": {
          "0%, 100%": {
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)",
          },
          "25%": {
            transform:
              "perspective(1000px) rotateX(5deg) rotateY(5deg) translateZ(10px)",
          },
          "50%": {
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)",
          },
          "75%": {
            transform:
              "perspective(1000px) rotateX(-5deg) rotateY(-5deg) translateZ(10px)",
          },
        },
        "scale-up": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};
