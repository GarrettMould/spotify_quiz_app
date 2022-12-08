import React from 'react'
import classes from "./DisplayQuizResults.module.css"
import { X } from 'phosphor-react'
import FullButton from '../../elements/FullButton/FullButton'

const DisplayQuizResults = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.displayScoreContainer}>
        <div className={classes.displayScoreRowOneContainer}>
          <div className={classes.iconContainer}><X size={30} color="#ffffff"  /></div>
        </div>
        <div className={classes.displayScoreRowTwoContainer}>
          <div className={classes.medalBackground}><div className={classes.medal}></div></div>
          <div className={classes.scoreContainer}><div className={classes.score}>{props.userScore}</div></div>
        </div>
        <div className={classes.displayScoreRowThreeContainer}><FullButton text="Share Results"></FullButton></div>
      </div>
    </div>
  )
}

export default DisplayQuizResults