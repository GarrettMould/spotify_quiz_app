import React from 'react'
import classes from "./HowToPlayPage.module.css"
import Slider from 'react-slick';
import MobileUIKit from '../../elements/MobileUIKit/MobileUIKit';
import { SlickSlider } from '../../elements/SlickSlider/SlickSlider';
const HowToPlay = () => {

  
  return (
    <>
    <div className={classes.container}>
        <div className={classes.textSectionContainer}>
            <span className={classes.stepNumber}>Step 1</span>
            <h4 className={classes.stepName}>Choose a Quiz</h4>
            <p className={classes.stepDescription}>Pick a quiz from our wide variety of different artists. Quizify generates ten question quizzes based on an artists "This Is" Spotify playlist.</p>
        </div>
        <SlickSlider></SlickSlider>
    </div>
    <div className={classes.container}>
      <div className={classes.stepTwoSection}>
        <div className={classes.textSectionContainer}>
            <span className={classes.stepNumber}>Step 2</span>
            <h4 className={classes.stepName}>Name that Song</h4>
            <p className={classes.stepDescription}>You will hear a ten-second snippet of ten different songs from the selected quiz. The faster you answer, the more points you earn. Tick tock.</p>
        </div>
        
          <MobileUIKit></MobileUIKit>
        
      </div>   
</div>
</>
  )
}

export default HowToPlay