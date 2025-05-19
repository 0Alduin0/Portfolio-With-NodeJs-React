import React, { useRef, useEffect, useState } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

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
    AOS.init({ duration: 800, once: false });
  }, []);

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
    <section
      data-aos="fade-left"
      id="contact"
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-lightGray mb-4">
            İletişime Geç
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* İletişim Bilgileri ve Sosyal Medya */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-cardBg/50 p-4 sm:p-6 rounded-lg border border-cardBorder hover:border-borderAccent transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaEnvelope className="text-2xl sm:text-3xl text-accentBlue" />
                  <div>
                    <h3 className="text-lightGray font-semibold text-sm sm:text-base">
                      Email
                    </h3>
                    <a
                      href="mailto:muhammedenesyurekli@gmail.com"
                      className="text-lightGray/80 hover:text-accentBlue transition-colors text-sm sm:text-base break-all"
                    >
                      muhammedenesyurekli@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="text-2xl sm:text-3xl text-accentBlue" />
                  <div>
                    <h3 className="text-lightGray font-semibold text-sm sm:text-base">
                      Telefon
                    </h3>
                    <a
                      href="tel:+905386730994"
                      className="text-lightGray/80 hover:text-accentBlue transition-colors text-sm sm:text-base"
                    >
                      +90 538 673 09 94
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-2xl sm:text-3xl text-accentBlue" />
                  <div>
                    <h3 className="text-lightGray font-semibold text-sm sm:text-base">
                      Konum
                    </h3>
                    <a
                      href="https://maps.google.com/?q=Balıkesir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightGray/80 hover:text-accentBlue transition-colors text-sm sm:text-base"
                    >
                      Balıkesir, Türkiye
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="bg-cardBg/50 p-4 sm:p-6 rounded-lg border border-cardBorder hover:border-borderAccent transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up">
              <h3 className="text-lightGray font-semibold text-lg sm:text-xl mb-4 sm:mb-6">
                Sosyal Medya
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 text-lightGray/80 hover:text-accentBlue transition-colors text-sm sm:text-base"
                  >
                    {social.icon}
                    <span>{social.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-cardBg/50 p-4 sm:p-6 rounded-lg border border-cardBorder hover:border-borderAccent transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lightGray mb-2 text-sm sm:text-base"
                >
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-cardBg/50 border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up text-lightGray placeholder-lightGray/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none"
                  placeholder="İsminizi girin"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lightGray mb-2 text-sm sm:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cardBg/50 border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up text-lightGray placeholder-lightGray/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none"
                  placeholder="Email adresinizi girin"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lightGray mb-2 text-sm sm:text-base"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-cardBg/50 border border-cardBorder/50 hover:border-borderAccent/70 transition-all duration-300 animate-float-3d hover:animate-pulse-glow hover:animate-scale-up text-lightGray placeholder-lightGray/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-accentBlue focus:ring-1 focus:ring-accentBlue outline-none resize-none"
                  placeholder="Mesajınızı girin"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-accentBlue/50 text-darkPurple hover:bg-accentBlue/90 transition-colors py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Gönderiliyor..." : "Gönder"}
              </button>
              {success && (
                <p className="text-green-500 text-center text-sm sm:text-base">
                  Mesajınız başarıyla gönderildi!
                </p>
              )}
              {error && (
                <p className="text-red-500 text-center text-sm sm:text-base">
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
