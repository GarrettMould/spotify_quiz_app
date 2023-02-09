import React from 'react'

import { useEffect, useRef } from 'react'
import Countdown from 'react-countdown'
import CountDownBar from '../../elements/CountdownBar/CountdownBar'
import classes from "./GamePanel.module.css"

const GamePanel = (props) => {

  const round = props.round + 1;

  //Countdown Ref
  const clockRef = useRef();

  // Countdown Handle Start Function
  const handleStart = () => clockRef.current.start();

  useEffect(() => {
    handleStart();
  }, [props.round]);


  const renderer = ({seconds }) => {
      // Render a countdown
      return <span>{seconds}</span>;
    
  };

  return (
    <div className={classes.container}>
        <div className={classes.gameInfoContainer}>
            <div className={classes.roundContainer}>Round: <span className={classes.span}>{round}</span></div>
            <div className={classes.scoreContainer}>Score: <span className={classes.span}>{props.userScore}</span></div>
        </div>
        <Countdown  renderer={renderer} autoStart={false} ref={clockRef} className='blah' onComplete={props.handleNoAnswerUpdate} date={Date.now() + 10000} />
        
    </div>
  )
}

export default GamePanel