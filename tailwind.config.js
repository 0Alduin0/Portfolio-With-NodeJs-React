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

        // Yeni renkler
        // Butonlar için
        buttonPrimary: "#7c3aed", // Ana buton rengi (mor)
        buttonHover: "#6d28d9", // Buton hover rengi (koyu mor)
        buttonSecondary: "#4c1d95", // İkincil buton rengi (çok koyu mor)

        // Kartlar için
        cardBg: "#312e81", // Kart arka plan rengi (koyu mor)
        cardHover: "#4338ca", // Kart hover rengi (orta mor)
        cardBorder: "#6366f1", // Kart kenarlık rengi (açık mor)

        // Kenarlıklar için
        borderLight: "#a78bfa", // Açık kenarlık rengi (açık mor)
        borderDark: "#4c1d95", // Koyu kenarlık rengi (koyu mor)
        borderAccent: "#7c3aed", // Vurgu kenarlık rengi (orta mor)
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        glow: "glow 2s ease-in-out infinite",
        "float-3d": "float-3d 6s ease-in-out infinite",
        "scale-up": "scale-up 0.3s ease-in-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
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
              "0 0 25px rgba(124, 58, 237, 0.6), 0 0 50px rgba(124, 58, 237, 0.3)",
            transform: "translateY(0)",
          },
          "50%": {
            "box-shadow":
              "0 0 35px rgba(124, 58, 237, 0.8), 0 0 70px rgba(124, 58, 237, 0.5)",
            transform: "translateY(-5px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            "box-shadow":
              "0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2)",
            transform: "scale(1)",
          },
          "50%": {
            "box-shadow":
              "0 0 30px rgba(124, 58, 237, 0.6), 0 0 60px rgba(124, 58, 237, 0.4)",
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
