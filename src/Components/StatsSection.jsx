"use client";

import React from "react";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { FaCalendarAlt, FaGlobeAmericas, FaCheckCircle } from "react-icons/fa";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const AboutSection = () => {
  return (
    <section
      className="relative text-white py-24"
      style={{
        backgroundImage:
          'url("https://www.corhunter-garment.com/uploads/37095/img/aboutback.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Add relative positioning to this container for z-index to work */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-light">
                Wuhan Corhunter Garment Co., Ltd.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Established in 2007, the company is an experienced textile
                company specializing in the production of military uniforms,
                tactical equipment, technical work clothes and other
                accessories. We have produced camouflage uniforms for more than
                60 countries in the world. With 15 years of production and sales
                experience, independent design, development and quality control
                system. At Corhunter we take great pride in providing our
                customers with quality merchandise backed by a large inventory.
                In addition, we can provide customized services that customers
                need. So whether you're looking for an in-stock item or want to
                have your own personal touch, we've got you covered. Our aim is
                to provide our customers with quality products and favorable
                prices, And excellent customer service to meet customer
                expectations. If you have any questions about textile business,
                please feel free to contact us.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  number: "20+",
                  label: "Years Experience",
                  icon: "FaCalendarAlt",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  number: "60+",
                  label: "Countries Served",
                  icon: "FaGlobeAmericas",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  number: "100%",
                  label: "Quality Assurance",
                  icon: "FaCheckCircle",
                  color: "from-green-500 to-green-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`rounded-xl p-4 mb-4 bg-gradient-to-br ${stat.color} shadow-lg transform hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      {/* You'll need to import these icons from react-icons */}
                      {stat.icon === "FaCalendarAlt" && (
                        <FaCalendarAlt className="text-white text-2xl" />
                      )}
                      {stat.icon === "FaGlobeAmericas" && (
                        <FaGlobeAmericas className="text-white text-2xl" />
                      )}
                      {stat.icon === "FaCheckCircle" && (
                        <FaCheckCircle className="text-white text-2xl" />
                      )}
                      <div className="text-4xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Discover More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <LiteYouTubeEmbed
                id="hByW2hKaqKU"
                title="Corhunter Garment Company Video"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
