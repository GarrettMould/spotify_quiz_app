import React from 'react'
import { Navbar, Button } from "react-bootstrap";
import LoginPageDesktop from '../LoginPageDesktop/LoginPageDesktop';
import classes from "./Header.module.css"

const Header = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.siteTitle}>
          <span className={classes.greenText}>Rap</span> Quiz
        </div>
        <div className={classes.navBar}>
          <LoginPageDesktop AUTH_ENDPOINT={props.AUTH_ENDPOINT}
              CLIENT_ID={props.CLIENT_ID}
              REDIRECT_URI={props.REDIRECT_URI}
              RESPONSE_TYPE={props.RESPONSE_TYPE}
              SCOPES_URL_PARAM={props.SCOPES_URL_PARAM}></LoginPageDesktop>
        </div>
    </div>
    
  )
}

export default Header