import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Merhaba, Ben{" "}
              <span className="text-secondary">Muhammet Enes Yürekli</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-tertiary mb-8">
              Oyun Geliştirici & Full Stack Developer
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Unity ile oyun geliştirme ve modern web teknolojileri konusunda
              tutkulu bir geliştiriciyim. Yaratıcı çözümler ve etkileyici
              kullanıcı deneyimleri üretmeyi seviyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-tertiary transition-colors flex items-center justify-center gap-2"
              >
                <FaGamepad className="text-xl" />
                Projelerimi Gör
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/10 transition-colors"
              >
                İletişime Geç
              </motion.a>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <motion.a
                href="https://github.com/0Alduin0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-secondary transition-colors"
              >
                <FaGithub className="text-3xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/enes-yürekli-1483b2332/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-secondary transition-colors"
              >
                <FaLinkedin className="text-3xl" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Muhammet Enes Yürekli"
                className="relative w-full h-full object-cover rounded-full border-4 border-secondary"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
