import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaUnity, FaCss3, FaHtml5, FaAdn, FaWeebly } from "react-icons/fa";
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
  }, [isInView]);

  const capabilities = [
    {
      title: "Unity Oyun Geliştirme",
      description:
        "Unity oyun motoru ile hem mobil hem masaüstü platformlarda 2D ve 3D oyun geliştirebilir, Photon ve netcode yapılarını kullanark çok oyunculu oyunlar yazabilirim",
      icon: <FaUnity className="text-4xl text-blue-500" />,
      animation: animation3,
    },
    {
      title: "Backend Geliştirme",
      description:
        "Node.js ve Express.js ile RESTful API'ler oluşturabilir MongoDb de veri modelleyebilir JWT ile kullanıcı doğrulayabilir ve middleware yapıları kurabilirim.",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      animation: animation4,
    },
    {
      title: "Frontend Geliştirme",
      description:
        "React, Vite ve Tailwind CSS ile hızlı, modern ve mobil uyumlu arayüzler geliştiriyorum. UI/UX tasarıma önem veriyor, hızlı, responsive ve performans odaklı frontend projeler geliştirebilirim",
      icon: <FaReact className="text-4xl text-blue-600" />,
      animation: animation5,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-lightGray mb-4">
            Uzmanlık alanlarım
          </h2>
        </motion.div>

        {/* Neler Yapabilirim */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cardBg/50 p-6 rounded-lg border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{capability.icon}</div>
                <h4 className="text-lightGray font-semibold text-xl">
                  {capability.title}
                </h4>
              </div>
              <p className="text-lightGray/80 mb-6">{capability.description}</p>
              <div className="w-full h-48">
                <Lottie
                  animationData={capability.animation}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
