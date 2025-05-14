import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiUnity,
  SiCsharp,
  SiExpress,
  SiPython,
  SiHtml5,
  SiCss3,
  SiVsco,
  SiJetbrains,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";

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
      title: "Meyve birleştirme oyunu",
      description:
        "Unity oyun motoru ve C# diliyle geliştirdiğim, aynı türdeki meyveleri birleştirip puan kazandığımız bir oyun.",
      image: "/images/project1.jpg",
      github: "https://github.com/0Alduin0/FruitMerge-Game",
      live: "https://project1.com",
      technologies: ["Unity", "C#", "Singleplayer"],
    },
    {
      title: "BlackJack oyunu",
      description:
        "Karşınızdaki kurpiyere karşı oynadığınız, çektiğiniz kartla 21 puana daha çok yaklaşanın kazandığı bir oyun.",
      image: "/images/project2.jpg",
      github: "https://github.com/0Alduin0/BlackJack-Game",
      live: "https://project2.com",
      technologies: ["Unity", "C#", "Singleplayer"],
    },
    {
      title: "Fps shooter oyunu",
      description:
        "karşınızdaki herkesi öldürmeye çalıştığınız çok oyunculu bir oyun",
      image: "/images/project3.jpg",
      github: "https://github.com/0Alduin0/Shooter-Game",
      live: "https://project3.com",
      technologies: ["Unity", "C#", "PhotonNetwork", "Multiplayer"],
    },
  ];

  const technologies = [
    { name: "Unity", icon: <SiUnity className="text-4xl text-[#000000]" /> },
    { name: "C#", icon: <SiCsharp className="text-4xl text-[#68217A]" /> },
    { name: "Html", icon: <SiHtml5 className="text-4xl text-[#E34F26]" /> },
    { name: "Css", icon: <SiCss3 className="text-4xl text-[#1572B6]" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-4xl text-[#F7DF1E]" />,
    },
    { name: "React", icon: <SiReact className="text-4xl text-[#61DAFB]" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-4xl text-[#339933]" />,
    },
    {
      name: "ExpressJs",
      icon: <SiExpress className="text-4xl text-[#000000]" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-[#47A248]" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" />,
    },
    { name: "Python", icon: <SiPython className="text-4xl text-[#3776AB]" /> },
    { name: "VsCode", icon: <SiVsco className="text-4xl text-[#007ACC]" /> },
    {
      name: "JetBrains",
      icon: <SiJetbrains className="text-4xl text-[#000000]" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-4xl text-[#7952B3]" />,
    },
    { name: "Git", icon: <SiGit className="text-4xl text-[#F05032]" /> },
    { name: "Github", icon: <SiGithub className="text-4xl text-[#181717]" /> },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-lightGray mb-4">
            Projelerim ve yeteneklerim
          </h2>
          <p className="text-lightGray/80 max-w-2xl mx-auto">
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
                animate={
                  hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cardBg/50 p-6 rounded-lg text-center border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lightGray font-semibold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lightGray/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accentBlue/20 text-accentBlue rounded-full text-sm"
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
                      className="text-lightGray/80 hover:text-lightGray transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightGray/80 hover:text-lightGray transition-colors"
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
                animate={
                  hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cardBg/50 p-6 rounded-lg text-center border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up"
              >
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h4 className="text-lightGray font-semibold">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
