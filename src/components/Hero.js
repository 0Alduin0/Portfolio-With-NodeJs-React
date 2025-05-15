import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaFileDownload } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { Link } from "react-scroll";

const Hero = () => {
  const roles = ["Unity Developer", "Full Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleDownloadCV = () => {
    window.open("/Enes_Yürekli_CV.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Sol taraf - İsim ve Roller */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6">
              Enes Yürekli
            </h1>
            <div className="h-12 sm:h-16 mb-6 sm:mb-8">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl text-light font-semibold"
              >
                {roles[currentRoleIndex]}
              </motion.div>
            </div>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accentBlue text-darkPurple px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-lightBlue transition-colors flex items-center justify-center gap-2 w-full sm:w-auto hover:animate-pulse-glow"
                >
                  <FaGamepad className="text-lg sm:text-xl" />
                  Projelerim
                </motion.button>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-accentBlue text-accentBlue px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-accentBlue/10 transition-colors w-full sm:w-auto hover:animate-pulse-glow"
                >
                  İletişim
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="bg-transparent border-2 border-accentBlue text-accentBlue px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-accentBlue/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 hover:animate-pulse-glow"
              >
                <FaFileDownload className="text-lg sm:text-xl" />
                CV İndir
              </motion.button>
            </div>
          </motion.div>

          {/* Sağ taraf - Lottie Animasyonu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
