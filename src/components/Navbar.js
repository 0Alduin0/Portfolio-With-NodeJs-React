import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex space-x-8">
            <NavLink href="#" onClick={scrollToTop}>
              Ana Sayfa
            </NavLink>
            <NavLink href="#about">Hakkımda</NavLink>
            <NavLink href="#skills">Yetenekler</NavLink>
            <NavLink href="#projects">Projeler</NavLink>
            <NavLink href="#contact">İletişim</NavLink>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary hover:text-tertiary transition-colors"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink
                href="#"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Ana Sayfa
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
                Hakkımda
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>
                Yetenekler
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>
                Projeler
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                İletişim
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-white hover:text-secondary transition-colors"
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className="block px-3 py-2 text-white hover:text-secondary transition-colors"
  >
    {children}
  </motion.a>
);

export default Navbar;
