import React from 'react'
import FullButton from '../../elements/FullButton/FullButton'
import classes from "./DisplayResults.module.css"
import { Spacer } from '../../elements/Spacer/Spacer'
import { Link } from 'react-router-dom'

export const DisplayResults = (props) => {

  const sum = props.averageAnswerTime.reduce((partialSum, a) => partialSum + a, 0);
  const avg = (sum / props.averageAnswerTime.length)
  var roundedAVG = avg.toFixed(2)

  //Get artist name from the playlist title name
  var artistName = props.thisIsName.split(' ').slice(2).join(' ');

  return (
    <>
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
                        <div className={classes.percentage}>{props.scoreCompPerc}%</div>
                    </div>
                    <div className={classes.noteAndIconsContainer}>
                        <div className={classes.noteContainer}>
                            <div className={classes.note}>Nicely done! You are in the top {props.scoreCompPerc} percent of {artistName} fans.</div>
                        </div>
                    </div>
                    </div>
                </div>
                
            <div className={classes.statsDisplayContainer}>
                <div className={classes.titleContainer}><div className={classes.title}>Quick Stats</div></div>
                <div className={classes.statsContainer}>
                    <div className={classes.statLine}> <span className={classes.span}>Score:</span>  {props.userScore}</div>
                    <div className={classes.statLine}> <span className={classes.span}>Missed Questions:</span>  {10 - props.correctTally}</div>
                    <div className={classes.statLine}> <span className={classes.span}>Time Per Question:</span>  {props.averageAnswerTime.length ? `${roundedAVG} seconds` : "10 seconds"} </div>
                </div>
            </div>
          </div>
          <div className={classes.rowButtons}>
           <Link style={{ width: "100%"}} to="/"><button onClick={props.resetQuiz} className={classes.btn}>Close</button></Link>
          </div>
          
          
          
        </div>
      </div>
    </div>
    </>
    
  )
}
