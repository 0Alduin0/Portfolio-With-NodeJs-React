import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
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
    { title: "Ana Sayfa", to: "home" },
    { title: "Hakkımda", to: "about" },
    { title: "Yetenekler", to: "skills" },
    { title: "Projeler", to: "projects" },
    { title: "İletişim", to: "contact" },
  ];

  const handleMenuClick = (to) => {
    setIsOpen(false);
    if (to === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-darkPurple/20 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-lightGray focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-64 bg-cardBg/50 backdrop-blur-lg border-l border-cardBorder/50 z-50"
            >
              <div className="flex flex-col space-y-4 p-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={`#${link.to}`}
                    className="text-lightGray hover:text-accentBlue transition-colors px-4 py-2 rounded-lg hover:bg-cardHover/30"
                    onClick={() => handleMenuClick(link.to)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
