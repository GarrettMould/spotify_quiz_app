import classes from './StartPage.module.css'
import LoginButton from '../../elements/LoginButton/LoginButton'
import { StartPageBackdrop } from '../../elements/MainPageBackdrop/StartPageBackdrop'
import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.mainBlockContainer}>
            <div className={classes.mainLineOne}>Spotify Quizzes.</div>
            <div className={classes.mainLineTwo}>How well do you know your favorite artists?</div>
            {props.isMobile ? 
            <LoginButton 
            isMobile={props.isMobile}
            userID={props.userID}
            logout={props.logout}
            AUTH_ENDPOINT={props.AUTH_ENDPOINT}
            CLIENT_ID={props.CLIENT_ID}
            REDIRECT_URI={props.REDIRECT_URI}
            RESPONSE_TYPE={props.RESPONSE_TYPE}
            SCOPES_URL_PARAM={props.SCOPES_URL_PARAM}></LoginButton> : null}
        </div>
        
    </div>
  )
}

export default StartPage