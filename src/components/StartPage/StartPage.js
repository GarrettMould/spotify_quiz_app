import classes from './StartPage.module.css'

import frank_ocean from "../../photos/frank_ocean.jpg"
import tyler_the_creator from "../../photos/tyler_the_creator.jpg"
import mac_miller from "../../photos/mac_miller.jpg"

import React from 'react'

const StartPage = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.mainBlockContainer}>
            <div className={classes.mainLineOne}>Spotify Quizzes.</div>
            <div className={classes.mainLineTwo}>How well do you know your favorite artists?</div>
            <div className={classes.findQuizLink}>Find a quiz</div>
        </div>
    </div>
  )
}

export default StartPage