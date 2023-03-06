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
    <div className={classes.iconContainer}><a href="https://twitter.com/Garrett57146042"><i class="fa fa-twitter icon fa-lg"></i></a></div> 
         <div className={classes.iconContainer}><a href="https://github.com/GarrettMould"><i class="fa fa-github icon fa-lg"></i></a></div> 
         <div className={classes.iconContainer}><a href="https://www.linkedin.com/in/garrett-mould-b1b353a6/"><i class="fa fa-linkedin icon fa-lg"></i></a></div>
    </div>
  </div>
  <div className={classes.column}>
    <div className={classes.columnTitle}></div>
  </div></>) : footer = <Row>
    <Col xs={5} className={classes.column}>
      <div className={classes.columnTitle}>About</div>
      <div className={classes.columnText}>RapQuiz is a project created by Spotify user and rap enthusiast, Garrett Mould. It uses Spotify's free Web API.</div>
    </Col>
    <Col xs={5} className={classes.column}>
      <div className={classes.columnTitle}>Get Updates</div>
      <div className={classes.columnText}>Join the email list to get notified about updates and few features.</div>
      <div className={classes.inputContainer}><input placeholder="Email Address" className={classes.input}></input><button className={classes.btn}>Join</button></div>
    </Col>
    <Col xs={2} className={classes.column}>
      <div className={classes.columnTitle}>Social</div>
      <div className={classes.iconsContainer}>
         <div className={classes.iconContainer}><a href="https://twitter.com/Garrett57146042"><i class="fa fa-twitter icon fa-2x"></i></a></div> 
         <div className={classes.iconContainer}><a href="https://github.com/GarrettMould"><i class="fa fa-github icon fa-2x"></i></a></div> 
         <div className={classes.iconContainer}><a href="https://www.linkedin.com/in/garrett-mould-b1b353a6/"><i class="fa fa-linkedin icon fa-2x"></i></a></div>
      </div>
    </Col>
    
  </Row>

  return (
    <Container className={classes.container}>
    {footer}
  </Container>
  )
}

export default Footer