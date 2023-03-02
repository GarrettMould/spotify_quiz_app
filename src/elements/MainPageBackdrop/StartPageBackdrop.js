import React from 'react'
import classes from "./StartPageBackdrop.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frank from "../../photos/frank_ocean_nobg.png"

export const StartPageBackdrop = () => {

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
          <div>
                <div className={classes.background}>
              <div className={classes.leftBlockContainer}>
                  <div className={classes.rowOne}>Top R&B Artists</div>
                  <div className={classes.rowTwo}>Frank Ocean, The Weeknd, Brent Faiyaz, SZA, and more</div>
                  <div className={classes.viewAllLink}>View All</div>
              </div>
              <div className={classes.ball}><img src={Frank} alt="frank" className={classes.img}></img></div></div>
          </div>
          <div>
                <div className={classes.background}>
              <div className={classes.leftBlockContainer}>
                  <div className={classes.rowOne}>Top R&B Artists</div>
                  <div className={classes.rowTwo}>Frank Ocean, The Weeknd, Brent Faiyaz, SZA, and more</div>
                  <div className={classes.viewAllLink}>View All</div>
              </div>
              <div className={classes.ball}><img src={Frank} alt="frank" className={classes.img}></img></div></div>
          </div>
          <div>
                <div className={classes.background}>
              <div className={classes.leftBlockContainer}>
                  <div className={classes.rowOne}>Top R&B Artists</div>
                  <div className={classes.rowTwo}>Frank Ocean, The Weeknd, Brent Faiyaz, SZA, and more</div>
                  <div className={classes.viewAllLink}>View All</div>
              </div>
              <div className={classes.ball}><img src={Frank} alt="frank" className={classes.img}></img></div></div>
          </div>
          
        </Slider>
    
  )
}
