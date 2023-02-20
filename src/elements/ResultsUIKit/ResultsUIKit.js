import React from 'react'
import classes from "./ResultsUIKit.module.css"
import daft_punk from '../../photos/daft_punk.jpg'

const ResultsUIKit = () => {
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
          <div className={classes.rowResults}>
                <div className={classes.percentageDisplayContainer}>
                <div className={classes.contentWrapper}>
                    <div className={classes.percentageContainer}>
                        <div className={classes.percentage}>72%</div>
                    </div>
                    <div className={classes.noteAndIconsContainer}>
                        <div className={classes.noteContainer}>
                            <div className={classes.note}>Nicely done! You are in the top 72 percent of Daft Punk fans.</div>
                        </div>
                    </div>
                    </div>
                </div>
                
            <div className={classes.statsDisplayContainer}>
                <div className={classes.titleContainer}><div className={classes.title}>Quick Stats</div></div>
                <div className={classes.statsContainer}>
                    <div className={classes.statLine}> <span className={classes.span}>Score:</span>  471</div>
                    <div className={classes.statLine}> <span className={classes.span}>Missed Questions:</span>  2</div>
                    <div className={classes.statLine}> <span className={classes.span}>Time Per Question:</span>  4.2 seconds </div>
                </div>
            </div>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  )
}

export default ResultsUIKit