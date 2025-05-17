import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: t('navbar.home'), to: "home" },
    { title: t('navbar.about'), to: "about" },
    { title: t('navbar.skills'), to: "skills" },
    { title: t('navbar.projects'), to: "projects" },
    { title: t('navbar.contact'), to: "contact" },
  ];

  const handleMenuClick = (to) => {
    setIsOpen(false);
    if (to === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(to);
      if (element) {
        const offset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-darkPurple/20 backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="text-lightGray hover:text-accentBlue transition-colors cursor-pointer"
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.title}
                </motion.span>
              </Link>
            ))}
            {/* Çeviri butonları iletişimin sağına */}
            <div className="flex items-center gap-2 ml-2">
              <button onClick={() => i18n.changeLanguage('tr')} className="px-2 py-1 rounded bg-blue-600 text-white text-xs">TR</button>
              <button onClick={() => i18n.changeLanguage('en')} className="px-2 py-1 rounded bg-gray-800 text-white text-xs">EN</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          {!isOpen && (
            <motion.button
              className="md:hidden text-lightGray focus:outline-none"
              onClick={() => setIsOpen("about")}
              whileTap={{ scale: 0.95 }}
            >
              <FaBars className="text-2xl" />
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-64 bg-cardBg/90 backdrop-blur-lg border-l border-cardBorder/50 z-50"
            >
              {/* Close (X) Button - larger clickable area */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-cardHover/40 focus:outline-none z-50"
                aria-label="Menüyü Kapat"
                tabIndex={0}
              >
                <FaTimes className="text-3xl text-lightGray pointer-events-none" />
              </button>
              <div className="flex flex-col space-y-4 p-4 mt-16">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={`#${link.to}`}
                    className="text-lightGray hover:text-accentBlue transition-colors px-4 py-2 rounded-lg hover:bg-cardHover/30"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(link.to);
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
              {/* Mobilde çeviri butonları en alta */}
              <div className="flex justify-center gap-2 mb-6 mt-8">
                <button onClick={() => i18n.changeLanguage('tr')} className="px-3 py-1 rounded bg-blue-600 text-white text-sm">TR</button>
                <button onClick={() => i18n.changeLanguage('en')} className="px-3 py-1 rounded bg-gray-800 text-white text-sm">EN</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
