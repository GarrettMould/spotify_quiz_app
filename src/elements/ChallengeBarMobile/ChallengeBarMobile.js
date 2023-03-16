import React from 'react'
import classes from "./ChallengeBarMobile.module.css"
import { Container, Row, Col } from 'react-bootstrap'

const ChallengeBarMobile = () => {
  return (
    <Container className={classes.container}>
        <Row className={classes.row}>
            <Col className={classes.column}><div className={classes.userPlaylist}><div className={classes.title}>On Repeat</div></div></Col>
            <Col className={classes.column}><div className={classes.userPlaylist}></div></Col>
        </Row>
        <Row className={classes.row}>
            <Col className={classes.column}><div className={classes.userPlaylist}></div></Col>
            <Col className={classes.column}><div className={classes.userPlaylist}></div></Col>
        </Row>
    </Container>
  )
}

export default ChallengeBarMobile
