import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const projects = [
    {
      title: "E-Ticaret Platformu",
      description: "React ve Node.js kullanarak geliştirdiğim tam kapsamlı e-ticaret platformu",
      image: "/images/project1.jpg",
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Sosyal Medya Uygulaması",
      description: "Gerçek zamanlı mesajlaşma ve paylaşım özellikleri olan sosyal medya uygulaması",
      image: "/images/project2.jpg",
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      technologies: ["React", "Socket.io", "MongoDB", "Express"],
    },
    {
      title: "Task Yönetim Uygulaması",
      description: "Takımlar için geliştirdiğim task yönetim ve takip uygulaması",
      image: "/images/project3.jpg",
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
  ];

  const technologies = [
    { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-500" /> },
    { name: "React", icon: <SiReact className="text-4xl text-blue-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-4xl text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-600" /> },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projelerim</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Geliştirdiğim projeler ve kullandığım teknolojiler
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "projects"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            Projelerim
          </button>
          <button
            onClick={() => setActiveTab("technologies")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "technologies"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            Teknolojiler
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="text-2xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === "technologies" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h4 className="text-white font-semibold">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
