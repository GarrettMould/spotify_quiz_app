import React from 'react'
import classes from "./HowToPlayPage.module.css"
import Slider from 'react-slick';
import QuizUIKit from '../../elements/QuizUIKit/QuizUIKit';
import { SlickSlider } from '../../elements/SlickSlider/SlickSlider';
import ResultsUIKit from '../../elements/ResultsUIKit/ResultsUIKit';

const HowToPlay = (props) => {

  
  return (
    <>
    <div className={classes.container}>
        <div className={`${classes.textSectionContainer} ${classes.one}`}>
            <span className={classes.stepNumber}>Step 1</span>
            <h4 className={classes.stepName}>Choose a Quiz</h4>
            <p className={classes.stepDescription}>Pick a quiz from our wide variety of different artists. Quizify generates ten question quizzes based on an artists "This Is" Spotify playlist.</p>
        </div>
        <SlickSlider shuffle={props.shuffle}></SlickSlider>
    </div>
    <div className={classes.container}>
      <div className={classes.stepTwoSection}>      
          <QuizUIKit></QuizUIKit>
          <div className={classes.textSectionContainer}>
            <span className={`${classes.stepNumber} ${classes.two}`}>Step 2</span>
            <h4 className={`${classes.stepName} ${classes.two}`} >Name that Song</h4>
            <p className={`${classes.stepDescription} ${classes.two}`}>You will hear a ten-second snippet of ten different songs from the selected quiz. The faster you answer, the more points you earn. Tick tock.</p>
        </div>
        
      </div>   
    </div>
    <div className={classes.container}>
      <div className={classes.stepTwoSection}>      
          <div className={classes.textSectionContainer}>
            <span className={classes.stepNumber}>Step 3</span>
            <h4 className={classes.stepName} >View Your Results</h4>
            <p className={classes.stepDescription}>Quizify will calculate your quiz results and compare your answers to other users. You'll be able to see whether you are a true stan of your favorite artist.</p>
          </div>
          <ResultsUIKit></ResultsUIKit>
      </div>   
    </div>
</>
  )
}

export default HowToPlay