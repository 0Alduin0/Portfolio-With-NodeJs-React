/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ana arka plan rengi (App.js, tüm section'lar)
        darkPurple: "#291740",

        // Kartlar ve form alanları arka planı (About.js, Projects.js, Contact.js, Footer.js)
        darkBlue: "#1a1b4b",

        // Buton hover efekti (Hero.js)
        lightBlue: "#a78bfa",

        // Metin rengi (tüm componentler)
        lightGray: "#f8fafc",

        // Vurgu rengi - butonlar, ikonlar, hover efektleri (tüm componentler)
        accentBlue: "#8b5cf6",

        // Butonlar için
        buttonPrimary: "#7c3aed", // Ana buton rengi (mor)
        buttonHover: "#6d28d9", // Buton hover rengi (koyu mor)

        // Kartlar için
        cardBg: "#312e81", // Kart arka plan rengi (koyu mor)
        cardBorder: "#6366f1", // Kart kenarlık rengi (açık mor)

        // Kenarlıklar için
        borderLight: "#a78bfa", // Açık kenarlık rengi (açık mor)
        borderDark: "#4c1d95", // Koyu kenarlık rengi (koyu mor)
        borderAccent: "#7c3aed", // Vurgu kenarlık rengi (orta mor)
      },
      animation: {
        "gradient-x": "gradient-x 20s ease infinite",
        "gradient-y": "gradient-y 20s ease infinite",
        "gradient-xy": "gradient-xy 20s ease infinite",
        glow: "glow 3s ease-in-out infinite",
        "float-3d": "float-3d 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scale-up": "scale-up 0.4s ease-in-out forwards",
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
            "box-shadow":
              "0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.1)",
            transform: "translateY(0)",
          },
          "50%": {
            "box-shadow":
              "0 0 25px rgba(124, 58, 237, 0.4), 0 0 50px rgba(124, 58, 237, 0.2)",
            transform: "translateY(-3px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            "box-shadow":
              "0 0 15px rgba(124, 58, 237, 0.2), 0 0 30px rgba(124, 58, 237, 0.1)",
            transform: "scale(1)",
          },
          "50%": {
            "box-shadow":
              "0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.2)",
            transform: "scale(1.02)",
          },
        },
        "float-3d": {
          "0%, 100%": {
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)",
          },
          "25%": {
            transform:
              "perspective(1000px) rotateX(3deg) rotateY(3deg) translateZ(5px)",
          },
          "50%": {
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)",
          },
          "75%": {
            transform:
              "perspective(1000px) rotateX(-3deg) rotateY(-3deg) translateZ(5px)",
          },
        },
        "scale-up": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.03)",
          },
        },
      },
    },
  },
  plugins: [],
};
