import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaUnity,
  FaGamepad,
  FaCode,
  FaDatabase,
  FaServer,
  FaMobile,
} from "react-icons/fa";

const Skills = () => {
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
      icon: <FaUnity className="text-4xl" />,
      title: "Unity Game Development",
      description: "Unity ile 2D ve 3D oyun geliştirme, C# programlama",
    },
    {
      icon: <FaGamepad className="text-4xl" />,
      title: "Game Design",
      description: "Oyun mekanikleri tasarımı, level design, UI/UX",
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML5, CSS3, Tailwind CSS",
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: "Backend Development",
      description: "Node.js, Express.js, RESTful API tasarımı",
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Database Management",
      description: "MongoDB, SQL, Firebase",
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Mobile Development",
      description: "React Native, Unity Mobile",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Yeteneklerim</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Oyun geliştirme ve web teknolojileri konusunda kapsamlı yeteneklere
            sahibim. Her projede en iyi kullanıcı deneyimini sunmak için
            çalışıyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Skills;
