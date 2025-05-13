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
            Balıkesir üniversitesi bilgisayar mühendisliği öğrencisiyim. Tutkulu
            bir oyun geliştiricisi ve yeni teknolojilere açık bir yazılımcıyım.
            Unity oyun motoru ve C# programlama dili ile hem mobil hem masaüstü
            platformlarda 2D ve 3D oyunlar geliştirmekteyim. Ayrıca çeşitli
            modern teknolojileri kullanarak fullstack geliştirici olma yolunda
            yürümekteyim.
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
