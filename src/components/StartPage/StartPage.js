import classes from './StartPage.module.css'
import LoginButton from '../../elements/LoginButton/LoginButton'
import React from 'react'

const StartPage = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.mainBlockContainer}>
            <div className={classes.mainLineOne}>Spotify Quizzes.</div>
            <div className={classes.mainLineTwo}>How well do you know your favorite artists?</div>
            {props.isMobile ? <LoginButton></LoginButton> : null}
            <div className={classes.findQuizLink}>{props.isMobile ? "How to Play" : "Find a Quiz" }</div>
        </div>
    </div>
  )
}

export default StartPage