import React from 'react'
import classes from "./StartPageBackdrop.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frank from "../../photos/frank_ocean_nobg.png"
import Tyler from "../../photos/tyler_the_creator_nobg.png"
import Kurt from "../../photos/kurt_cobain_nobg.png"

export const StartPageBackdrop = () => {

  const sliderLists = [ 
    { 
      title: "Top R&B Artists", 
      id: "blank", 
      description: "Frank Ocean, The Weeknd, Brent Faiyaz, SZA, and more", 
      img: Frank, 
    }, 
    {
      title: "Top Hip Hop Artists", 
      id: "blank", 
      description: "Future, Lil Baby, Kendrick Lamar, Kodak Black, and more", 
      img: Tyler, 
    }, 
    {
      title: "Top Rock Artists",
      id: "blank", 
      description: "Nirvana, The Black Keys, Led Zepplin, The Beatles, and more", 
      img: Kurt, 
    }
  ]

  const mappedSliderLists = sliderLists.map((list, i) => { 
    console.log(i)
    return (
      <div>
        <div className={ i === 0 ? `${classes.backgroundGreen}` : i === 1 ? `${classes.backgroundPurple}` : `${classes.backgroundRainbow}` }>
          <div className={classes.leftBlockContainer}>
                    <div className={classes.rowOne}>{list.title}</div>
                    <div className={classes.rowTwo}>{list.description}</div>
                    <div className={classes.viewAllLink} id={list.id}>View All</div>
          </div>
          <div className={classes.ball}>
            <img src={list.img} alt="frank" className={classes.img}></img>
          </div>
        </div>
      </div>
    )
  })

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.container}>
    <Slider {...settings}>
          {mappedSliderLists}
        </Slider>
        </div>
    
  )
}
