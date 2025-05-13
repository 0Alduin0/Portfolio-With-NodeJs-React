import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGamepad, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, {
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
  };

  return (
    <section id="contact" className="py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">İletişim</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Benimle iletişime geçmek için aşağıdaki formu kullanabilir veya
            doğrudan e-posta gönderebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={
              hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-primary/50 p-8 rounded-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              İletişim Bilgileri
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-secondary text-xl" />
                <span className="text-gray-300">email@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-secondary text-xl" />
                <span className="text-gray-300">+90 555 123 4567</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-secondary text-xl" />
                <span className="text-gray-300">İstanbul, Türkiye</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                Oyun Geliştirme İşbirliği
              </h4>
              <p className="text-gray-300">
                Unity ile oyun geliştirme projeleriniz için işbirliği
                yapabiliriz. Aşağıdaki formu doldurarak veya iletişim
                bilgilerimden bana ulaşabilirsiniz.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-primary/50 p-8 rounded-lg border border-secondary/20"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white mb-2 font-medium"
                >
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/30 border border-secondary/20 rounded-lg text-white focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2 font-medium"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/30 border border-secondary/20 rounded-lg text-white focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2 font-medium"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-primary/30 border border-secondary/20 rounded-lg text-white focus:outline-none focus:border-secondary"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-tertiary transition-colors flex items-center justify-center gap-2"
              >
                <FaGamepad className="text-xl" />
                Gönder
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
