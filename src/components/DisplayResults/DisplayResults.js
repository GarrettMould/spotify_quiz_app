import React from 'react'
import FullButton from '../../elements/FullButton/FullButton'
import classes from "./DisplayResults.module.css"
import { TwitterLogo, FacebookLogo, Link } from 'phosphor-react'

export const DisplayResults = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.quizPanelWrapper}>
        <div className={classes.quizSectionContainer}>
          <div className={classes.quizInfoContainer}>
            <img src={props.thisIsImage} alt="playlist" className={classes.thisIsImage}></img>
            <div className={classes.infoTextContainer}>
              <div className={classes.thisIsName}>{props.thisIsName}</div>
            </div>
          </div>
          <div className={classes.rowResults}>
                <div className={classes.percentageDisplayContainer}>
                <div className={classes.contentWrapper}>
                    <div className={classes.percentageContainer}>
                        <div className={classes.percentage}>70.4</div>
                    </div>
                    <div className={classes.noteAndIconsContainer}>
                        <div className={classes.noteContainer}>
                            <div className={classes.note}>Congratulations, you are a true Stan! You are in the top 70.4 per cent of Drake fans.</div>
                        </div>
                    </div>
                    </div>
                </div>
                
            <div className={classes.statsDisplayContainer}>
                <div className={classes.titleContainer}><div className={classes.title}><span className={classes.span}>Quick</span> Stats</div></div>
                <div className={classes.statsContainer}>
                    <div className={classes.statLine}> <span className={classes.span}>Score:</span> 732</div>
                    <div className={classes.statLine}> <span className={classes.span}>Missed Questions:</span>3</div>
                    <div className={classes.statLine}> <span className={classes.span}>Time Per Question</span> 5.7 seconds</div>
                </div>
            </div>
          </div>
          <div className={classes.rowButtons}>
            <FullButton text="Close"></FullButton>
          </div>
          
          
          
        </div>
      </div>
    </div>
    
  )
}
