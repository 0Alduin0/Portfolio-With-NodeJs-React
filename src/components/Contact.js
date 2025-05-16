import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter ,FaFacebook } from "react-icons/fa6";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    // EmailJS yapılandırmasını kontrol et
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    console.log("EmailJS Config:", {
      publicKey: publicKey ? "***" : "missing",
      serviceId: serviceId || "missing",
      templateId: templateId || "missing",
    });

    if (!publicKey || !serviceId || !templateId) {
      console.error("EmailJS configuration is missing");
      setError(true);
      setLoading(false);
      return;
    }

    try {
      // EmailJS'i başlat
      emailjs.init(publicKey);

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      };

      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log("EmailJS Result:", result);

      if (result.status === 200) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("EmailJS Error: Unexpected response", result);
        setError(true);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
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
      link: "https://www.linkedin.com/in/enes-yürekli-1483b2332/",
    },
    {
      icon: <FaSquareXTwitter className="text-3xl" />,
      title: "X",
      link: "https://x.com/?lang=tr",
    },
    {
      icon: <FaFacebook className="text-3xl" />,
      title: "Facebook",
      link: "https://www.facebook.com/?locale=tr_TR",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-lightGray mb-4">İletişim</h2>
          <p className="text-lightGray/80 max-w-2xl mx-auto">
            Benimle iletişime geçmek için aşağıdaki formu kullanabilir veya
            iletişim bilgilerimden bana ulaşabilirsiniz.
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
              className="bg-cardBg p-6 rounded-lg border border-cardBorder hover:border-borderAccent transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-3xl text-accentBlue" />
                  <div>
                    <h3 className="text-lightGray font-semibold">Email</h3>
                    <a
                      href="mailto:muhammedenesyurekli@gmail.com"
                      className="text-lightGray/80 hover:text-accentBlue transition-colors"
                    >
                      muhammedenesyurekli@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-3xl text-accentBlue" />
                  <div>
                    <h3 className="text-lightGray font-semibold">Telefon</h3>
                    <a
                      href="tel:+905386730994"
                      className="text-lightGray/80 hover:text-accentBlue transition-colors"
                    >
                      +90 538 673 09 94
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
              className="bg-cardBg p-6 rounded-lg border border-cardBorder hover:border-borderAccent transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up"
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
            className="bg-cardBg p-6 rounded-lg border border-cardBorder hover:border-borderAccent transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up"
          >
            <h3 className="text-lightGray font-semibold text-xl mb-6">
              Benimle iletişime geçmek için lütfen formu doldurun
            </h3>
            <form ref={formRef}
             onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lightGray mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-cardBg/50 border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up text-lightGray placeholder-lightGray/50 rounded-lg px-4 py-3 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none"
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
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cardBg/50 border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up text-lightGray placeholder-lightGray/50 rounded-lg px-4 py-3 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none"
                  placeholder="Email adresinizi girin"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lightGray mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-cardBg/50 border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up text-lightGray placeholder-lightGray/50 rounded-lg px-4 py-3 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none resize-none"
                  placeholder="Mesajınızı girin"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-accentBlue text-darkPurple hover:bg-accentBlue/90 transition-colors py-3 rounded-lg font-semibold ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Gönderiliyor..." : "Gönder"}
              </button>
              {success && (
                <p className="text-green-500 text-center">
                  Mesajınız başarıyla gönderildi!
                </p>
              )}
              {error && (
                <p className="text-red-500 text-center">
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </p>
              )}
            </form>
          </motion.div>
        </div>
    </section>
  );
};

export default Contact;
