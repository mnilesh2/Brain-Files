import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import img1 from './Screenshot_2024-02-12-23-12-25-55_439a3fec0400f8974d35eed09a31f914.jpg';
import img2 from './Screenshot_2024-02-12-23-11-00-69_439a3fec0400f8974d35eed09a31f914.jpg';
import img3 from './Screenshot_2024-02-12-23-13-03-12_439a3fec0400f8974d35eed09a31f914.jpg';
import './Slider.css';

function Slider() {
    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay:3000 }}
        >
          <SwiperSlide>
            <div className='sliderdiv'>
                <img className='sliderimg' src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='sliderdiv'>
                <img className='sliderimg' src={img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='sliderdiv'>
                <img className='sliderimg' src={img3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      );
}

export default Slider;
