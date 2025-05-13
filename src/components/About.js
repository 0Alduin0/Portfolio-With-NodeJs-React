import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGamepad, FaCode, FaLightbulb } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, {
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const skills = [
    {
      icon: <FaGamepad className="text-4xl" />,
      title: "Oyun Geliştirme",
      description:
        "Unity ile 2D ve 3D oyun geliştirme konusunda deneyimliyim. Oyun mekanikleri, level tasarımı ve optimizasyon konularında uzmanım.",
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Full Stack Geliştirme",
      description:
        "React, Node.js ve modern web teknolojileri ile tam yığın uygulama geliştirme konusunda deneyimliyim.",
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Yaratıcı Çözümler",
      description:
        "Karmaşık problemlere yaratıcı ve yenilikçi çözümler üretmeyi seviyorum. Her projede en iyi kullanıcı deneyimini sunmayı hedefliyorum.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Hakkımda</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Bilgisayar mühendisliği öğrencisi ve tutkulu bir oyun
            geliştiricisiyim. Unity ile oyun geliştirme ve modern web
            teknolojileri konusunda deneyimliyim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-primary/50 p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-colors"
            >
              <div className="text-secondary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
