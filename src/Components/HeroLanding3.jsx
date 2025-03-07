import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroLanding3 = () => {
  const HeroSlide = [
    {
      img: "/Media/TestImage.jpg", // Adjusted path
      subtitle: "Beats Solo",
      title: "Wireless",
      /* title2: 'HalfShoe', */
    },
    {
      img: "/Media/TestImage4.jpg",
      subtitle: "Beats Solo",
      title: "Wireless",
      /* title2: 'Handsome', */
    },
    {
      img: "/Media/TestImage5.jpg",
      subtitle: "Beats Solo",
      title: "Branded",
      /* title2: 'HeadPhone', */
    },
  ];

  // Updated slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time for a hero section
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="mx-auto px-5 lg:px-10 my-6 max-w-full w-full">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...sliderSettings}>
            {HeroSlide.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2 px-5">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {item.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {item.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-black sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {item.title2}
                    </h1>
                    <div>
                      <button className="cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 text-white bg-[#fb8602]">
                        View All Products
                      </button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <img
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto  relative z-40"
                      src={item.img}
                      alt={`${item.title2} image`}
                    />{" "}
                    {/* I've removed this dropshadow from the classname place it back as and when it's relevant. drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroLanding3;

// Tailwind CSS (unchanged)
