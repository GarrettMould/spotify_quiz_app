import React from 'react'
import classes from './InstructionsBox.module.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const InstructionsBox = () => {
  return (
    <div className={classes.container}>
        
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <div className={classes.allSlidesContainer}>
              <SwiperSlide className={classes.slide}><div className={classes.slideContainer}>Slide 1</div></SwiperSlide>
              <SwiperSlide className={classes.slide}><div className={classes.slideContainer}>Slide 2</div></SwiperSlide>
              <SwiperSlide className={classes.slide}><div className={classes.slideContainer}>Slide 3</div></SwiperSlide>
              <SwiperSlide className={classes.slide}><div className={classes.slideContainer}><button>Start</button></div></SwiperSlide>
            </div>
            </Swiper>
        
    </div>
    
  )
}

<div>
    
</div>

export default InstructionsBox