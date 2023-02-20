import React from 'react'
import classes from "./QuizUIKit.module.css"
import daft_punk from "../../photos/daft_punk.jpg"

const QuizUIKit = () => {
  return (
    <div className={classes.wrapper}>
    <div className={classes.quizPanelWrapper}>
      <div className={classes.quizSectionContainer}>
        <div className={classes.quizInfoContainer}>
          <img src={daft_punk} alt="playlist" className={classes.thisIsImage}></img>
          <div className={classes.infoTextContainer}>
            <div className={classes.thisIsName}>Daft Punk</div>
          </div>
        </div>
        
        <div className={classes.containerGamePanel}>
            <div className={classes.gameInfoContainer}>
                <div className={classes.roundContainer}>Round: <span className={classes.span}>5</span></div>
            
                <div className={classes.scoreContainer}>Score: <span className={classes.span}>212</span></div>
            </div>
        </div>

        <div className={classes.answers}>
            <div className={classes.answerContainer}>
                <button disabled="true" 
                    className={`${classes.btnAnswerOption}` }                
                ><div className={classes.imgContainer}><img src={daft_punk} alt="album" className={classes.img}></img></div><div className={classes.answerText}><div className={classes.track}>Lose Yourself to Danxe</div></div></button>
            </div> 
            <div className={classes.answerContainer}>
                <button disabled="true" 
                    className={`${classes.btnAnswerOption}` }                
                ><div className={classes.imgContainer}><img src={daft_punk} alt="album" className={classes.img}></img></div><div className={classes.answerText}><div className={classes.track}>Lose Yourself to Danxe</div></div></button>
            </div> 
            <div className={classes.answerContainer}>
                <button disabled="true"
                    className={`${classes.btnAnswerOption}` }                
                ><div className={classes.imgContainer}><img src={daft_punk} alt="album" className={classes.img}></img></div><div className={classes.answerText}><div className={classes.track}>Lose Yourself to Danxe</div></div></button>
            </div> 
            <div className={classes.answerContainer}>
                <button disabled="true"
                    className={`${classes.btnAnswerOption}` }                
                ><div className={classes.imgContainer}><img src={daft_punk} alt="album" className={classes.img}></img></div><div className={classes.answerText}><div className={classes.track}>Lose Yourself to Danxe</div></div></button>
            </div> 
        </div> 
            
      </div>
    </div>
  </div>
  )
}

export default QuizUIKit