import React from 'react'
import classes from './DisplayThisIs.module.css'
import Countdown from "react-countdown";
import ReactHowler from 'react-howler'
import CountdownBar from '../../elements/CountdownBar/CountdownBar';
import GamePanel from '../GamePanel/GamePanel';

const DisplayThisIs = (props) => {

  

const changeSrc = () => {
    const audio = document.getElementById("audio");
    const source = document.getElementById("audioSrc");
    source.src = mappedSongs[props.round].uri
    audio.load();
    audio.play();
  }



  const handleAnswer = (e) => { 
    var value = e.currentTarget.value
    changeSrc(); 
    props.handleAnswer(value);
  }

  const handleNoAnswer = () => {
    changeSrc(); 
    props.handleNoAnswer();

  }



  var selectedSongs = props.selectedThisIsSongs;
     // Map over selectedSongs and create a UI for the test questions
  const mappedSongs = selectedSongs.map((song) => { 
    var correctAnswer = song.name
    console.log(correctAnswer)

    const mappedAnswerOptions = song.answerOptions.map( (track, i) => {    
      
        return (
            <>
            <div className={classes.answerContainer}>
  
            <button
              className={classes.btnAnswerOption}
              type="radio"
              name={correctAnswer}
              value={track.name === correctAnswer ? "blah" : false}
              onClick={handleAnswer}
              
            ><div className={classes.imgContainer}><img src={track.img.url} alt="album" className={classes.img}></img></div><div className={classes.answerText}><div className={classes.track}>{track.name}</div></div></button>
            </div>
            </>
            
          
            
        )})

    return (
        <>
        
        <audio id="audio" controls="controls" hidden="hidden">
        <source id="audioSrc" src={song.uri} type="audio/mpeg" hidden="hidden"/>
        </audio>
        
       {/* <Countdown intervalDelay={1500} date={Date.now() + 10000} autoStart={true} onComplete={handleNoAnswer}></Countdown>*/}

        <div className={classes.answers}>{mappedAnswerOptions}</div>        
        </>
    )
})

console.log(selectedSongs)


  return (
    <>
    <div className={classes.wrapper}>
      <div className={classes.quizSectionContainer}>
        <div className={classes.quizInfoContainer}>
          <img src={props.thisIsImage} alt="playlist" className={classes.thisIsImage}></img>
          <div className={classes.infoTextContainer}>
            <div className={classes.thisIsName}>{props.thisIsName}</div>
          </div>
        </div>
        <GamePanel userScore={props.userScore} round={props.round}></GamePanel>
        
        {mappedSongs[props.round]}
      </div>
    </div>
    </>
  )
}

export default DisplayThisIs