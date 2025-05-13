import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  return (
    <nav
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 py-2" : "bg-transparent py-4"
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
                className="text-white hover:text-secondary transition-colors cursor-pointer"
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
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary/95 mt-4 rounded-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="text-white hover:text-secondary transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
