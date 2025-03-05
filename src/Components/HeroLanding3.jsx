import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSlide = [
  {
    img: "/Media/TestImage.jpg",
    subtitle: "Military Excellence",
    title: "Tactical Gear",
    description: "Equip your forces with the best in class tactical equipment",
  },
  {
    img: "/Media/TestImage4.jpg",
    subtitle: "Advanced Technology",
    title: "Combat Ready",
    description: "State-of-the-art combat gear for modern warfare",
  },
  {
    img: "/Media/TestImage5.jpg",
    subtitle: "Precision Engineering",
    title: "Elite Forces",
    description: "Specially designed equipment for elite military units",
  },
];

const HeroLanding3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full bg-gray-100">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        loop
        className="h-[calc(70vh-80px)] min-h-[500px]"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onInit={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {HeroSlide.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <motion.img
              src={slide.img}
              alt={slide.title}
              className="absolute right-0 top-0 h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
            />
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-6 sm:px-6 lg:px-12">
                <div className="max-w-3xl">
                  <motion.h2
                    className="text-xl sm:text-2xl text-white font-semibold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg sm:text-xl text-gray-200 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <Link
                      to="/products"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                    >
                      Explore Products
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroLanding3;
