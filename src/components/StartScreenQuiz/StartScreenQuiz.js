import React from 'react'
import classes from "./StartScreenQuiz.module.css"

export const StartScreenQuiz = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.quizPanelWrapper}>
        <button onClick={props.startQuiz}>Start Game</button>
      </div>
    </div>
  )
}
