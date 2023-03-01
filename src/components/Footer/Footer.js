import classes from "./Footer.module.css"
import React from 'react'
import { Container,  Row, Col } from "react-bootstrap"
import { TwitterLogo, GithubLogo, LinkedinLogo } from "phosphor-react"
import logo from '../../photos/logoFinal.png'

const Footer = (props) => {

  var footer; 

  props.isMobile ? (footer = <>
    <div className={classes.siteTitle}>
    <img src={logo} className={classes.logo} alt="logo"></img>
    </div>
    <div className={classes.column}>
    <div className={classes.columnTitle}>About</div>
    <div className={classes.columnText}>Quizify is a project created by Spotify user and rap enthusiast, Garrett Mould. It uses Spotify's free Web API.</div>
  </div>
  <div className={classes.column}>
    <div className={classes.columnTitle}>Social</div>
    <div className={classes.iconsContainer}>
        <div className={classes.iconContainer}><a href="https://twitter.com/Garrett57146042"><TwitterLogo className={classes.icon} color="#ffffff"  size={35}></TwitterLogo></a></div> 
         <div className={classes.iconContainer}><a href="https://github.com/GarrettMould"><GithubLogo className={classes.icon} color="#ffffff"  size={35}></GithubLogo></a></div> 
         <div className={classes.iconContainer}><a href="https://www.linkedin.com/in/garrett-mould-b1b353a6/"><LinkedinLogo className={classes.icon} color="#ffffff"  size={35}></LinkedinLogo></a></div>
    </div>
  </div>
  <div className={classes.column}>
    <div className={classes.columnTitle}></div>
  </div></>) : footer = <Row>
    <Col className={classes.column}>
      <div className={classes.columnTitle}>About</div>
      <div className={classes.columnText}>RapQuiz is a project created by Spotify user and rap enthusiast, Garrett Mould. It uses Spotify's free Web API.</div>
    </Col>
    <Col className={classes.column}>
      <div className={classes.columnTitle}>Social</div>
      <div className={classes.iconsContainer}>
         <div className={classes.iconContainer}><a href="https://twitter.com/Garrett57146042"><TwitterLogo className={classes.icon} color="#ffffff"  size={40}></TwitterLogo></a></div> 
         <div className={classes.iconContainer}><a href="https://github.com/GarrettMould"><GithubLogo className={classes.icon} color="#ffffff"  size={40}></GithubLogo></a></div> 
         <div className={classes.iconContainer}><a href="https://www.linkedin.com/in/garrett-mould-b1b353a6/"><LinkedinLogo className={classes.icon} color="#ffffff"  size={40}></LinkedinLogo></a></div>
      </div>
    </Col>
    <Col className={classes.column}>
      <div className={classes.columnTitle}></div>
    </Col>
  </Row>

  return (
    <Container className={classes.container}>
    {footer}
  </Container>
  )
}

export default Footer