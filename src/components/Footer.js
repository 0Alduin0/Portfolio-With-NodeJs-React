import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkBlue/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lightGray mb-4 md:mb-0">
            <p>© 2025 Enes Yürekli. Tüm hakları saklıdır.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/0Alduin0"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-1 text-lightGray hover:text-accentBlue transition-colors"
              
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/enes-yürekli-1483b2332/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-1 text-lightGray hover:text-accentBlue transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
