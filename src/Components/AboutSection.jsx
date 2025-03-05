import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function AboutSection() {
  // For scroll animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const overlayVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.4 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.3 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#ea580c",
      transition: { type: "spring", stiffness: 400 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="py-32 px-8 md:px-24 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap -m-4"
      >
        <div className="w-full lg:w-5/12 p-4">
          <div className="flex flex-col items-start justify-end h-full">
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-xs md:max-w-md text-gray-900"
            >
              Data based <span className="text-indigo-600">consultation.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <p className="text-lg tracking-tight max-w-md text-gray-700">
                Established in 2007, we are an experienced textile company
                specializing in the production of military uniforms, tactical
                equipment, technical work clothes and other accessories.
              </p>

              <p className="text-lg tracking-tight max-w-md text-gray-700">
                We have produced camouflage uniforms for more than 60 countries
                worldwide. With 15 years of production and sales experience,
                independent design, development and quality control system.
              </p>

              <p className="text-lg tracking-tight max-w-md text-gray-700">
                At Corhunter we take great pride in providing our customers with
                quality merchandise backed by a large inventory. In addition, we
                can provide customized services that customers need.
              </p>
            </motion.div>

            <Link to="/aboutus">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-gray-900 h-14 rounded-full px-6 py-3 inline-flex items-center justify-center gap-3 tracking-tight hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="text-white text-sm font-semibold tracking-tight">
                  Read More About Us
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M14 6.66669H7.33333C4.38781 6.66669 2 9.0545 2 12V13.3334M14 6.66669L10 10.6667M14 6.66669L10 2.66669"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Image + Overlay Container */}
        <div className="w-full lg:w-7/12 p-4 relative">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            className="absolute top-4 right-4 bg-white text-black px-10 py-10 rounded-bl-3xl shadow-xl z-10"
          >
            <h3 className="font-bold text-black text-6xl mb-3 leading-tight">
              23%
            </h3>
            <p className="text-gray-700 tracking-tight">Annual Growth</p>
          </motion.div>

          {/* Stats Overlay */}
          <motion.div
            variants={overlayVariants}
            custom={1}
            className="absolute bottom-4 left-4 bg-indigo-600 text-white px-8 py-6 rounded-tr-3xl shadow-xl z-10"
          >
            <h3 className="font-bold text-white text-4xl mb-2 leading-tight">
              60+
            </h3>
            <p className="text-indigo-100 tracking-tight">Countries Served</p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl object-cover object-right-top w-full transition-transform hover:scale-105 duration-700"
              style={{ height: 752 }}
              src="/Media/sewing-machine-7728317_1280.jpg"
              alt="Sewing Machine"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
