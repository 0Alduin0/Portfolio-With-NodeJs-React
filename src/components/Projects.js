import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCertificate,
} from "react-icons/fa";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "autoprefixer";
import Aos from "aos";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const projects = [
    {
      title: "Meyve birleştirme oyunu",
      description:
        "Unity oyun motoru ve C# diliyle geliştirdiğim, aynı türdeki meyveleri birleştirip puan kazandığımız bir oyun.",
      images: [
        require("../assets/images/screenshots1.jpg"),
        require("../assets/images/screenshots2.jpg"),
        require("../assets/images/screenshots3.jpg"),
      ],
      github: "https://github.com/0Alduin0/FruitMerge-Game",
      live: "https://project1.com",
      technologies: ["Unity", "C#", "Singleplayer"],
    },
    {
      title: "BlackJack oyunu",
      description:
        "Karşınızdaki kurpiyere karşı oynadığınız, çektiğiniz kartla 21 puana daha çok yaklaşanın kazandığı bir oyun.",
      images: [
        require("../assets/images/screenshots4.jpg"),
        require("../assets/images/screenshots5.jpg"),
        require("../assets/images/screenshots6.jpg"),
        require("../assets/images/screenshots7.jpg"),
      ],
      github: "https://github.com/0Alduin0/BlackJack-Game",
      live: "https://project2.com",
      technologies: ["Unity", "C#", "Singleplayer"],
    },
    {
      title: "Fps shooter oyunu",
      description:
        "karşınızdaki herkesi öldürmeye çalıştığınız çok oyunculu bir oyun",
      images: [
        require("../assets/images/screenshots8.jpg"),
        require("../assets/images/screenshots9.jpg"),
        require("../assets/images/screenshots10.jpg"),
        require("../assets/images/screenshots11.jpg"),
      ],
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

  const certificates = [
    {
      id: 1,
      title: "Unity Essentials",
      issuer: "Unity",
      date: "2025",
      image: require("../assets/images/unity-essentials-pathway.png"),
      link: "https://www.credly.com/badges/68c339d6-b0fc-4ea9-9955-e16cc21e3aae",
    },

    // Diğer sertifikalarınızı buraya ekleyebilirsiniz
  ];

  const handlePrevImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        prev[projectIndex] > 0
          ? prev[projectIndex] - 1
          : projects[projectIndex].images.length - 1,
    }));
    setPage([page - 1, -1]);
  };

  const handleNextImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        prev[projectIndex] < projects[projectIndex].images.length - 1
          ? prev[projectIndex] + 1
          : 0,
    }));
    setPage([page + 1, 1]);
  };

  const handleDragEnd = (event, info, projectIndex) => {
    const threshold = 50; // minimum kaydırma mesafesi
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Sağa kaydırma - önceki resim
        handlePrevImage(projectIndex);
      } else {
        // Sola kaydırma - sonraki resim
        handleNextImage(projectIndex);
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-lightGray mb-4">
            Projelerim ve yeteneklerim
          </h2>
          <p className="text-lightGray/80 max-w-2xl mx-auto">
            Geliştirdiğim projeler ve kullanabildiğim teknolojiler
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base whitespace-nowrap ${
              activeTab === "projects"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            Projelerim
          </button>
          <button
            onClick={() => setActiveTab("technologies")}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base whitespace-nowrap ${
              activeTab === "technologies"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            Teknolojiler
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base whitespace-nowrap ${
              activeTab === "certificates"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            Sertifikalarım
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-cardBg/50 p-3 sm:p-4 md:p-6 rounded-lg text-center border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-scale-up"
              >
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 group overflow-hidden">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={currentImageIndex[index] || 0}
                      src={project.images[currentImageIndex[index] || 0]}
                      alt={project.title}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      className="w-full h-full object-contain rounded-lg absolute inset-0 cursor-grab active:cursor-grabbing"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.7}
                      onDragEnd={(e, info) => handleDragEnd(e, info, index)}
                      whileTap={{ cursor: "grabbing" }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePrevImage(index)}
                      className="bg-darkBlue/80 p-2 rounded-full text-lightGray hover:bg-accentBlue/80 transition-colors z-10"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={() => handleNextImage(index)}
                      className="bg-darkBlue/80 p-2 rounded-full text-lightGray hover:bg-accentBlue/80 transition-colors z-10"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-10">
                    {project.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full ${
                          (currentImageIndex[index] || 0) === imgIndex
                            ? "bg-accentBlue"
                            : "bg-lightGray/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-lightGray font-semibold text-base sm:text-lg md:text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lightGray/80 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-accentBlue/20 text-accentBlue rounded-full text-xs"
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
                      <FaGithub className="text-lg sm:text-xl md:text-2xl" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightGray/80 hover:text-lightGray transition-colors"
                    >
                      <FaExternalLinkAlt className="text-lg sm:text-xl md:text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === "technologies" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-cardBg/50 p-3 sm:p-4 md:p-6 rounded-lg text-center border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up"
              >
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                  {tech.icon}
                </div>
                <h4 className="text-lightGray font-semibold text-xs sm:text-sm md:text-base">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                data-aos="fade-up"
                data-aos-delay={index * 1000}
                className="bg-cardBg/50 p-3 sm:p-4 md:p-6 rounded-lg text-center border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-scale-up"
              >
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 mb-3 sm:mb-4">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-lightGray font-semibold text-base sm:text-lg md:text-xl mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-lightGray/80 text-xs sm:text-sm md:text-base mb-2">
                    {certificate.issuer}
                  </p>
                  <p className="text-lightGray/60 text-xs sm:text-sm mb-3 sm:mb-4">
                    {certificate.date}
                  </p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-accentBlue hover:text-accentBlue/80 transition-colors text-sm sm:text-base"
                  >
                    <FaCertificate className="text-lg sm:text-xl" />
                    <span>Sertifikayı Görüntüle</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
