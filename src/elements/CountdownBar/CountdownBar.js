import React from 'react'
import classes from "./CountdownBar.module.css"

const CountDownBar = () => {
  return (
    <div className={classes.countdownBarContainer}>
        <div key={Date.now()}className={classes.countdownBar}></div>
        <div key={Date.now()} id="countdownBall" className={classes.countdownBall}></div>
    </div>
  )
}

export default CountDownBar