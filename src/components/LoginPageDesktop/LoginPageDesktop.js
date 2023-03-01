import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MagnifyingGlass, List } from "phosphor-react";
import classes from "./LoginPageDesktop.module.css";
import LoginButton from "../../elements/LoginButton/LoginButton";
const LoginPageDesktop = (props) => {

  return (
    
    <div className={classes.navbar}>
      {props.isMobile ? null : <Link to="/SearchPage"><MagnifyingGlass size={25} className={classes.icon}/></Link>}
      {props.isMobile ? <List size={30} color="#ffffff" className={classes.icon} onClick={props.handleMenu}/> : null}
      {props.isMobile ? null : <Link to="/HowToPlay" className={classes.instructionsLink}>How to Play</Link>} 
      {props.isMobile ? null : <LoginButton 
        isMobile={props.isMobile}
        userID={props.userID}
        logout={props.logout}
        AUTH_ENDPOINT={props.AUTH_ENDPOINT}
        CLIENT_ID={props.CLIENT_ID}
        REDIRECT_URI={props.REDIRECT_URI}
        RESPONSE_TYPE={props.RESPONSE_TYPE}
        SCOPES_URL_PARAM={props.SCOPES_URL_PARAM}>
      </LoginButton>}
    </div>      
        
  );
};

export default LoginPageDesktop;
