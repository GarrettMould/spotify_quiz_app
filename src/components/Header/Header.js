import React from 'react'
import { Link } from 'react-router-dom';
import LoginPageDesktop from '../LoginPageDesktop/LoginPageDesktop';
import classes from "./Header.module.css"
import logo from '../../photos/logoFinal.png'

const Header = (props) => {
  return (
    <div className={classes.container}>
      <Link to="/">
        <div className={classes.siteTitle} onClick={props.resetQuiz}>
          <img  alt="logo" className={classes.logo}src={logo}></img>
        </div>
      </Link>
        
          <LoginPageDesktop 
              isMobile={props.isMobile}
              userID={props.userID}
              logout={props.logout}
              AUTH_ENDPOINT={props.AUTH_ENDPOINT}
              CLIENT_ID={props.CLIENT_ID}
              REDIRECT_URI={props.REDIRECT_URI}
              RESPONSE_TYPE={props.RESPONSE_TYPE}
              SCOPES_URL_PARAM={props.SCOPES_URL_PARAM}></LoginPageDesktop>
       
    </div>
    
  )
}

export default Header