import classes from "./LoginPromptPopUp.module.css"
import React from 'react'
import { SpotifyLogo } from "phosphor-react"

const LoginPromptPopUp = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.contentWrapper}>
            <div className={classes.iconContainer}><SpotifyLogo color="#ffffff" size={50}></SpotifyLogo></div>
            <div className={classes.messageContainer}>
                <div className={classes.message}>RapQuiz is a Spotify web app which requires access to your Spotify account. Sign in to access thousands of quizzes.</div>
            </div>
            <a
            href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}&scope=${props.SCOPES_URL_PARAM}`}
          >
            <button onClick={props.logout} className={classes.btn}>Login to Spotify</button>
          </a>
        </div>
    </div>
  )
}

export default LoginPromptPopUp