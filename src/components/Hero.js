import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaGithub, FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { Link } from "react-scroll";

const Hero = () => {
  const roles = ["Unity Developer", "Full Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Sol taraf - İsim ve Roller */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Enes Yürekli
            </h1>
            <div className="h-16 mb-8">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-blue-500 font-semibold"
              >
                {roles[currentRoleIndex]}
              </motion.div>
            </div>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FaGamepad className="text-xl" />
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
                  className="bg-transparent border-2 border-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600/10 transition-colors w-full sm:w-auto"
                >
                  İletişim
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Sağ taraf - Lottie Animasyonu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg"
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
