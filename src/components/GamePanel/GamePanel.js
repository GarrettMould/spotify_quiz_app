import React from 'react'
import CountDownBar from '../../elements/CountdownBar/CountdownBar'
import classes from "./GamePanel.module.css"

const GamePanel = (props) => {

  const round = props.round + 1;
  return (
    <div className={classes.container}>
        <div className={classes.gameInfoContainer}>
            <div className={classes.roundContainer}>Round: <span className={classes.span}>{round}</span></div>
            <div className={classes.scoreContainer}>Score: <span className={classes.span}>{props.userScore}</span></div>
        </div>
        <CountDownBar></CountDownBar>
        
    </div>
  )
}

export default GamePanel