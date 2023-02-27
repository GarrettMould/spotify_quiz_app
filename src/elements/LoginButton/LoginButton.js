import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from "./LoginButton.module.css"

const LoginButton = (props) => {

    const loginButton = 
          <a
            className={classes.link} href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}&scope=${props.SCOPES_URL_PARAM}`}
          >
            <Button  onClick={props.logout} className={classes.btn}>{props.isMobile ? "Login" : "Login to Spotify"}</Button>
          </a>
  
    const logoutButton =  <Link to="/"><Button  onClick={props.logout} className={classes.btn}>Logout</Button></Link>
  return (
    (props.userID ? logoutButton : loginButton)
  )
}

export default LoginButton