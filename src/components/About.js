import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGamepad, FaCode, FaLightbulb } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/animation2.json";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
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
      title: t("about.skill1.title"),
      description: t("about.skill1.desc"),
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: t("about.skill2.title"),
      description: t("about.skill2.desc"),
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: t("about.skill3.title"),
      description: t("about.skill3.desc"),
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
                {t("about.title")}
              </h2>
              <p
                className="text-lightGray/80 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {t("about.desc")}
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
