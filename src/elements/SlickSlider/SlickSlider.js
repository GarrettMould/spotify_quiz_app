import React from 'react'
import { useState } from 'react';
import Slider from 'react-slick';
import { playlists } from '../../Playlists'
import classes from "./SlickSlider.module.css"


export const SlickSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    var playlistImages = []

    playlists.forEach((playlist) => { 
        playlistImages.push(playlist.img)
      })
    
    const sliderImages = playlistImages.map((image) => { 
        return (
            <div>
                <img src={image} alt="blah" className={classes.sliderImage}></img>
            </div>
        )
    })
  
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 9000,
  pauseOnHover: false,
  cssEase: 'linear',
      beforeChange: (current, next) => setCurrentSlide(next),
    };
  
    return (
      <div>
        <Slider className={classes.slider}{...settings}>
          {sliderImages}
        </Slider>
  
      </div>
    );
  };
  