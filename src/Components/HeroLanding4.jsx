import {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../Components/HeroLanding4Style.css';


function HeroLanding4() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
  
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.corhunter-garment.com/uploads/37095/banner/20240621025957a30e2.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.corhunter-garment.com/uploads/37095/banner/202406210306439f927.jpg" alt="Slide 6" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.corhunter-garment.com/uploads/37095/banner/202406210305349c809.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
{/*         <SwiperSlide>
          <img src="/Media/excavadosEnergy7.jpeg" alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Media/excavadosInfrastructure10.jpeg" alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Media/excavadosAgriculture5.jpeg" alt="Slide 5" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Media/excavadosMining1.jpeg" alt="Slide 7" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Media/excavadosAir1.jpeg" alt="Slide 8" className="w-full h-full object-cover" />
        </SwiperSlide> */}
        {/* Add more slides */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default HeroLanding4
