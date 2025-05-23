import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaUnity } from "react-icons/fa";
import Lottie from "lottie-react";
import animation3 from "../assets/animation3.json";
import animation4 from "../assets/animation4.json";
import animation5 from "../assets/animation5.json";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const capabilities = [
    {
      title: "Unity Oyun Geliştirme",
      description:
        "Unity ile hem mobil hem masaüstü platformlar için 2D ve 3D oyunlar geliştirebiliyorum. Oyun içi mantık, sahne yönetimi, kullanıcı arayüzü (UI) gibi temel yapıları rahatlıkla kurabiliyorum. Photon Engine, Netcode for GameObjects ve Firebase Realtime Database gibi sistemleri kullanarak lobby, matchmaking, gerçek zamanlı veri paylaşımı gibi özellikleri entegre edebiliyorum. Unreal Engine 5 üzerinde de temel seviyede çalışmalar yaptım ve Blueprint sistemi ile basit mekanikler içeren 3D oyunlar geliştirebiliyorum.",
      icon: <FaUnity className="text-4xl text-blue-500" />,
      animation: animation3,
    },
    {
      title: "Backend Geliştirme",
      description:
        "Node.js ve Express.js kullanarak RESTful API’ler geliştirebiliyor, MongoDB ile ilişkisel olmayan veri modellerini Mongoose üzerinden etkili şekilde yapılandırabiliyorum. JWT ile güvenli kullanıcı kimlik doğrulama sistemleri kurma konusunda yetkinim. Ayrıca POSTMAN kullanarak API’lerin test ve dökümantasyon süreçlerini yönetebiliyor, geliştirdiğim backend servislerini frontend uygulamalarla sorunsuz şekilde entegre edebiliyorum.",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      animation: animation4,
    },
    {
      title: "Frontend Geliştirme",
      description:
        "React, Vite ve Tailwind CSS kullanarak modern, hızlı yüklenen ve tamamen mobil uyumlu (responsive) arayüzler geliştiriyorum. UI/UX tasarım prensiplerine önem vererek kullanıcı dostu, sade ya da gerektiğinde daha gösterişli ve etkileşimli web deneyimleri oluşturuyorum. Tasarımlarda animasyon ve etkileşimlere önem veriyorum. Framer Motion, Lottie gibi kütüphaneleri kullanarak kullanıcı deneyimini daha akıcı ve dikkat çekici hale getirebiliyorum.",
      icon: <FaReact className="text-4xl text-blue-600" />,
      animation: animation5,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-lightGray mb-4">
            Neler Geliştirebilirim ?
          </h2>
        </div>

        {/* Neler Yapabilirim */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-cardBg/50 p-4 sm:p-6 rounded-lg border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="mr-3 sm:mr-4">{capability.icon}</div>
                <h4 className="text-lightGray font-semibold text-lg sm:text-xl">
                  {capability.title}
                </h4>
              </div>
              <p className="text-lightGray/80 text-sm sm:text-base mb-4 sm:mb-6">
                {capability.description}
              </p>
              <div className="w-full h-36 sm:h-40 md:h-48">
                <Lottie
                  animationData={capability.animation}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
