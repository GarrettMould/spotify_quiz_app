import React from 'react'
import classes from "./HowToPlayPage.module.css"
import Slider from 'react-slick';

import { SlickSlider } from '../../elements/SlickSlider/SlickSlider';
const HowToPlay = () => {

  
  return (
    <div className={classes.container}>
        <div className={classes.textSectionContainer}>
            <span className={classes.stepNumber}>Step 1</span>
            <h4 className={classes.stepName}>Choose a Quiz</h4>
            <p className={classes.stepDescription}>Pick a quiz from our wide variety of different artists. Quizify generates ten question quizzes based on an artists "This Is" Spotify playlist.</p>
        </div>
        <SlickSlider></SlickSlider>
        

    </div>
  )
}

export default HowToPlay