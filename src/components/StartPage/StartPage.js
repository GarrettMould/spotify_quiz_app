import classes from './StartPage.module.css'
import LoginButton from '../../elements/LoginButton/LoginButton'
import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.mainBlockContainer}>
            <div className={classes.mainLineOne}>Spotify Quizzes.</div>
            <div className={classes.mainLineTwo}>How well do you know your favorite artists?</div>
            {props.isMobile ? <LoginButton></LoginButton> : null}
            {props.isMobile? <Link to="/HowToPlay"><div className={classes.findQuizLink}>How to Play</div></Link> : <div className={classes.findQuizLink}>How to Play</div>}
        </div>
    </div>
  )
}

export default StartPage