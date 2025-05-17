import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGamepad, FaCode, FaLightbulb } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/animation2.json";

const About = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, {
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const skills = [
    {
      icon: <FaGamepad className="text-4xl" />,
      title: "Oyun Geliştirme",
      description:
        "Unity ile 2D ve 3D oyun geliştirme konusunda deneyimliyim. Oyun mekanikleri, level tasarımı ve optimizasyon konularında kendimi geliştirmekteyim.",
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Full Stack Geliştirme",
      description:
        "React, Node.js ve modern web teknolojileri ile fullstack uygulama geliştirme konusunda bilgiliyim.",
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Yaratıcı Çözümler",
      description:
        "Karmaşık problemlere yaratıcı ve yenilikçi çözümler üretmeyi seviyorum. Her projede en iyi kullanıcı deneyimini sunmayı hedefliyorum.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Sol taraf - Metin içeriği */}
          <div data-aos="fade-right" className="flex-1">
            <div className="text-center mb-16">
              <h2
                className="text-4xl font-bold text-lightGray mb-4"
                data-aos="fade-up-left"
              >
                Hakkımda
              </h2>
              <p
                className="text-lightGray/80 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Balıkesir üniversitesi bilgisayar mühendisliği öğrencisiyim.
                Tutkulu bir oyun geliştiricisi ve yeni teknolojilere açık bir
                yazılımcıyım. Unity oyun motoru ve C# programlama dili ile hem
                mobil hem masaüstü platformlarda 2D ve 3D oyunlar geliştirmekteyim.
                Ayrıca çeşitli modern teknolojileri kullanarak fullstack geliştirici
                olma yolunda yürümekteyim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="bg-cardBg p-6 rounded-lg border border-cardBorder hover:border-borderAccent transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up hover:animate-border-glow"
                >
                  <div className="text-accentBlue mb-4">{skill.icon}</div>
                  <h3 className="text-lightGray font-semibold text-xl mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-lightGray/80">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ taraf - Lottie Animasyonu */}
          <div data-aos="fade-left" className="flex-1 w-full max-w-md">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
