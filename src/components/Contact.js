import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub className="text-3xl" />,
      title: "GitHub",
      link: "https://github.com/0Alduin0",
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/enes-yürekli-0b0b0b0b0/",
    },
    {
      icon: <FaTwitter className="text-3xl" />,
      title: "Twitter",
      link: "https://twitter.com/yourusername",
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      title: "Instagram",
      link: "https://instagram.com/yourusername",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-lightGray mb-4">İletişim</h2>
          <p className="text-lightGray/80 max-w-2xl mx-auto">
            Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* İletişim Bilgileri ve Sosyal Medya */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-darkBlue/30 rounded-lg p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-3xl text-accentBlue" />
                  <div>
                    <h3 className="text-lightGray font-semibold">Email</h3>
                    <a
                      href="mailto:enes.yurekli@ogr.balikesir.edu.tr"
                      className="text-lightGray/80 hover:text-accentBlue transition-colors"
                    >
                      enes.yurekli@ogr.balikesir.edu.tr
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-3xl text-accentBlue" />
                  <div>
                    <h3 className="text-lightGray font-semibold">Telefon</h3>
                    <a
                      href="tel:+905555555555"
                      className="text-lightGray/80 hover:text-accentBlue transition-colors"
                    >
                      +90 555 555 55 55
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-3xl text-accentBlue" />
                  <div>
                    <h3 className="text-lightGray font-semibold">Konum</h3>
                    <a
                      href="https://maps.google.com/?q=Balıkesir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightGray/80 hover:text-accentBlue transition-colors"
                    >
                      Balıkesir, Türkiye
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sosyal Medya */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-darkBlue/30 rounded-lg p-8"
            >
              <h3 className="text-lightGray font-semibold text-xl mb-6">
                Sosyal Medya
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-lightGray/80 hover:text-accentBlue transition-colors"
                  >
                    {social.icon}
                    <span>{social.title}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-darkBlue/30 rounded-lg p-8"
          >
            <h3 className="text-lightGray font-semibold text-xl mb-6">
              Benimle iletişime geçmek için lütfen formu doldurun
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lightGray mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-darkBlue/50 border border-accentBlue/20 text-lightGray placeholder-lightGray/50 rounded-lg px-4 py-3 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none"
                  placeholder="İsminizi girin"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lightGray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-darkBlue/50 border border-accentBlue/20 text-lightGray placeholder-lightGray/50 rounded-lg px-4 py-3 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none"
                  placeholder="Email adresinizi girin"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lightGray mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-darkBlue/50 border border-accentBlue/20 text-lightGray placeholder-lightGray/50 rounded-lg px-4 py-3 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none"
                  placeholder="Konuyu girin"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lightGray mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-darkBlue/50 border border-accentBlue/20 text-lightGray placeholder-lightGray/50 rounded-lg px-4 py-3 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none resize-none"
                  placeholder="Mesajınızı girin"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accentBlue text-darkPurple hover:bg-accentBlue/90 transition-colors py-3 rounded-lg font-semibold"
              >
                Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
