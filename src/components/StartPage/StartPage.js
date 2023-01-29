import classes from './StartPage.module.css'

import frank_ocean from "../../photos/frank_ocean.jpg"
import tyler_the_creator from "../../photos/tyler_the_creator.jpg"
import mac_miller from "../../photos/mac_miller.jpg"

import React from 'react'

const StartPage = () => {
  return (
    <div className={classes.container}>
       {/*} <a className={classes.browseLink} href="#">Browse Quizzes</a> */}
        <div className={classes.containerLeftBlock}>
            <div className={classes.containerMainText}>
                <h2 className={classes.mainText}>How Well Do You Know Your Favorite Artists?</h2>
            </div>
            <div className={classes.containerSubText}>
                <h3 className={classes.subText}>Stay in the loop. Get updates from RapQuiz.</h3>
            </div>
            <form>
                <input className={classes.input} type="text" placeholder='Email Address'></input>
                <button type="submit" className={classes.btnSubmit}>Get Notified</button>
            </form>
        </div>
        <div className={classes.containerRightBlock}>
            <div className={classes.photoContainer}>
                <img id="photo-one" className={classes.photoOne} src={frank_ocean}></img>
            </div>
            <div className={classes.photoContainer}>
                <img  className={classes.photoTwo} src={tyler_the_creator}></img>
            </div>
            <div className={classes.photoContainer}>
                <img  className={classes.photoThree} src={mac_miller}></img>
            </div>
        </div>
    </div>
  )
}

export default StartPage