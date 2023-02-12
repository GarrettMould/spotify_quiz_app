import React from 'react'
import { DisplayResults } from '../../components/DisplayResults/DisplayResults'
import DisplayThisIs from '../../components/DisplayThisIs/DisplayThisIs'
import classes from "./PlayPage.module.css";

const PlayPage = (props) => {
  return (
    <div className={classes.wrapper}>
    {props.gotThisIs && props.round < 10 ? <DisplayThisIs setAverageAnswerTime={props.setAverageAnswerTime} averageAnswerTime={props.averageAnswerTime} correctTally={props.correctTally} setCorrectTally={props.setCorrectTally} setUserScore={props.setUserScore} setRound={props.setRound}  setStartMenu={props.setStartMenu} startMenu={props.startMenu} roundOne={props.roundOne} selectedThisIsSongs={props.selectedThisIsSongs} round={props.round} userScore={props.userScore} thisIsImage={props.thisIsImage} thisIsName={props.thisIsName} handleAnswer={props.handleAnswer}></DisplayThisIs> : props.gotThisIs && props.round >= 10 ? <DisplayResults scoreCompPerc={props.scoreCompPerc} averageAnswerTime={props.averageAnswerTime} correctTally={props.correctTally} userScore={props.userScore} resetQuiz={props.resetQuiz} thisIsImage={props.thisIsImage} thisIsName={props.thisIsName}></DisplayResults> : null}
    </div>
  )
}

export default PlayPage