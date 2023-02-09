import React from 'react'
import classes from './DisplayThisIs.module.css'
import Countdown from "react-countdown";
import ReactHowler from 'react-howler'
import CountdownBar from '../../elements/CountdownBar/CountdownBar';
import GamePanel from '../GamePanel/GamePanel';
import { StartScreenQuiz } from '../StartScreenQuiz/StartScreenQuiz';

const DisplayThisIs = (props) => {

const startQuiz = () => { 
  playFirstURI();
  props.setStartMenu(false);
}
  
const playFirstURI = () => { 
  const audioFirst = document.getElementById("audioFirst")
  const sourceFirst = document.getElementById("sourceFirst")
  sourceFirst.src = props.selectedThisIsSongs[0].uri
  console.log(sourceFirst)
  audioFirst.load();
  audioFirst.play();

}
const changeSrc = () => {
    const audioFirst = document.getElementById("audioFirst")
    audioFirst.pause();
    const audio = document.getElementById("audio");
    const source = document.getElementById("audioSrc");
    source.src = mappedSongs[props.round].uri
    audio.load();
    audio.play();
  }



  const handleAnswer = (e) => { 
    var el = e.currentTarget;
    var value = e.currentTarget.value

    console.log(el)
    console.log(value); 
    
    
    changeSrc(); 
    props.handleAnswer(value);
  }

  const handleNoAnswerUpdate = () => {
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
              className={`${classes.btnAnswerOption}` }
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
    {props.startMenu ? <StartScreenQuiz startQuiz={startQuiz} setStartMenu={props.setStartMenu} startMenu={props.startMenu}></StartScreenQuiz> : null}
  <div className={classes.wrapper}>
      <div className={classes.quizPanelWrapper}>
        <div className={classes.quizSectionContainer}>
          <div className={classes.quizInfoContainer}>
            <img src={props.thisIsImage} alt="playlist" className={classes.thisIsImage}></img>
            <div className={classes.infoTextContainer}>
              <div className={classes.thisIsName}>{props.thisIsName}</div>
            </div>
          </div>
          <audio id="audioFirst" controls="controls" hidden="hidden">
        <source id="sourceFirst" src={props.selectedThisIsSongs.uri} type="audio/mpeg" hidden="hidden"/>
        </audio>
          
          <GamePanel handleNoAnswerUpdate={handleNoAnswerUpdate} userScore={props.userScore} round={props.round}></GamePanel>
          
          {mappedSongs[props.round]}
        </div>
      </div>
    </div>
    </> 
   
  )
}

export default DisplayThisIs