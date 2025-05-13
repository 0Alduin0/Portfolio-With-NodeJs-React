import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaUnity, FaCss3, FaHtml5, FaAdn, FaWeebly } from "react-icons/fa";

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
    },
    {
      title: "Backend Geliştirme",
      description:
        "Node.js ve Express.js ile RESTful API'ler oluşturabilir MongoDb de veri modelleyebilir JWT ile kullanıcı doğrulayabilir ve middleware yapıları kurabilirim.",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
    },
    {
      title: "Frontend Geliştirme",
      description:
        "React, Vite ve Tailwind CSS ile hızlı, modern ve mobil uyumlu arayüzler geliştiriyorum. UI/UX tasarıma önem veriyor, hızlı, responsive ve performans odaklı frontend projeler geliştirebilirim",
      icon: <FaReact className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
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
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{capability.icon}</div>
                <h4 className="text-white font-semibold text-xl">
                  {capability.title}
                </h4>
              </div>
              <p className="text-gray-400">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
