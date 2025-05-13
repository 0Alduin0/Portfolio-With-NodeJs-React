import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
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

  const projects = [
    {
      title: "2D Platformer Oyunu",
      description:
        "Unity ile geliştirilmiş, modern grafiklere sahip 2D platform oyunu. Karakter kontrolü, düşman AI ve level tasarımı içerir.",
      image: "/project1.jpg",
      technologies: ["Unity", "C#", "Photoshop"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
    },
    {
      title: "E-Ticaret Web Uygulaması",
      description:
        "React ve Node.js ile geliştirilmiş tam kapsamlı e-ticaret platformu. Kullanıcı yönetimi, ödeme sistemi ve admin paneli içerir.",
      image: "/project2.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
    },
    {
      title: "Mobil Fitness Uygulaması",
      description:
        "React Native ile geliştirilmiş fitness takip uygulaması. Egzersiz programları, beslenme takibi ve ilerleme grafikleri içerir.",
      image: "/project3.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projelerim</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Oyun geliştirme ve web teknolojileri alanında çalıştığım bazı
            projeler. Her projede en iyi kullanıcı deneyimini sunmak için
            çalışıyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
              className="bg-primary/50 rounded-lg overflow-hidden border border-secondary/20 hover:border-secondary/40 transition-colors"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
