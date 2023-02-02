import classes from "./Footer.module.css"
import React from 'react'
import { Container,  Row, Col } from "react-bootstrap"
import { FacebookLogo, InstagramLogo, GithubLogo, LinkedinLogo } from "phosphor-react"

const Footer = (props) => {

  var footer; 

  props.isMobile ? (footer = <>
    <div className={classes.siteTitle}>
       <span className={classes.greenText}>Rap</span> Quiz
    </div>
    <div className={classes.column}>
    <div className={classes.columnTitle}>About</div>
    <div className={classes.columnText}>RapQuiz is a project created by Spotify user and rap enthusiast, Garrett Mould. It uses Spotify's free Web API.</div>
  </div>
  <div className={classes.column}>
    <div className={classes.columnTitle}>Social</div>
    <div className={classes.iconsContainer}>
       <div className={classes.iconContainer}><InstagramLogo className={classes.icon} color="#ffffff"  size={40}></InstagramLogo></div> 
       <div className={classes.iconContainer}><GithubLogo className={classes.icon} color="#ffffff"  size={40}></GithubLogo></div> 
       <div className={classes.iconContainer}><LinkedinLogo className={classes.icon} color="#ffffff"  size={40}></LinkedinLogo></div>
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
         <div className={classes.iconContainer}><InstagramLogo className={classes.icon} color="#ffffff"  size={props.isMobile ? 20 : 40}></InstagramLogo></div> 
         <div className={classes.iconContainer}><GithubLogo className={classes.icon} color="#ffffff"  size={props.isMobile ? 20 : 40}></GithubLogo></div> 
         <div className={classes.iconContainer}><LinkedinLogo className={classes.icon} color="#ffffff"  size={props.isMobile ? 20 : 40}></LinkedinLogo></div>
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