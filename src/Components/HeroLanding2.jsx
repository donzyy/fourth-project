import React, { useState, useRef, useEffect } from "react";

function HeroLanding2() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Take care of your performance every day.",
      text: "Build a well-presented brand that everyone will love. Take care to develop resources continually and integrate them with previous projects."
    },
    {
      title: "The Daily Grind: Cultivating Peak Performance.",
      text: "Empower yourself with consistent self-care and growth practices to sustain optimal performance levels every day."
    }
  ];
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <img className="absolute bottom-0 right-0" src="/Media/tailor-651091_1280.jpg" alt="Shoe" />
        <div className="relative container px-4 mx-auto pt-24 pb-20">
          <div className="max-w-sm sm:max-w-md lg:max-w-xl">
            <div className="overflow-hidden">
              <div
                ref={slideContainerRef}
                className="mb-8 flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="flex-shrink-0 w-full p-5">
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-heading text-white font-semibold mb-8">
                      {slide.title}
                    </h1>
                    <p className="max-w-sm lg:max-w-md mb-8 text-rhino-300 text-sm lg:text-base text-white">
                      {slide.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroLanding2;
