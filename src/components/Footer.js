import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-white mb-4 md:mb-0">
            <FaGamepad className="text-secondary text-xl" />
            <span>© {new Date().getFullYear()} Muhammet Enes Yürekli</span>
          </div>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/0Alduin0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-secondary transition-colors"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/enes-yürekli-1483b2332/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-secondary transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
