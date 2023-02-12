import React from 'react'
import { useEffect, useRef} from 'react';
import classes from './DisplayThisIs.module.css'
import Countdown from "react-countdown";
import ReactHowler from 'react-howler'
import CountdownBar from '../../elements/CountdownBar/CountdownBar';
import GamePanel from '../GamePanel/GamePanel';
import { StartScreenQuiz } from '../StartScreenQuiz/StartScreenQuiz';

const DisplayThisIs = (props) => {

  const round = props.round + 1;
  
// Score multiplier (based on time remaning in round)
 var scoreMultiplier; 

 //10 Second Countdown Variable
 const endDate =  Date.now() + 10000;

 //Countdown Ref
 const clockRef = useRef();


 // Countdown Handle Start Function
 const handleStart = () => { 
  clockRef.current.start();
  console.log()
 }

 
 useEffect(() => {
   handleStart();
 }, [props.round]);


 const renderer = ({seconds }) => {
     // Render a countdown
     return <span>{seconds}</span>;
   
 };

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
    // Current Date
    const currentDate = Date.now()
    // Variable that will be used to calculate score
    scoreMultiplier = (currentDate - endDate) / - 1000;
    // Variable that represents time it took player to answer question
    const answerTime = 10 - scoreMultiplier; 
    // Add answerTime to array of answer times
    props.setAverageAnswerTime((averageAnswerTime => [...averageAnswerTime, answerTime] ));
    // Variable that represents the new score (based on score multiplier)
    var updatedScore = Math.floor((scoreMultiplier * 10) + props.userScore)

    var value = e.currentTarget.value

    if (value === "blah") {
      props.setUserScore(updatedScore)
      props.setCorrectTally(props.correctTally + 1);
    }
    console.log(props.userScore)
    changeSrc();
  
    props.setRound(props.round + 1);
  }
 

  const handleNoAnswerUpdate = () => {
    changeSrc(); 
    props.setRound(props.round +1);
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
        <div className={classes.containerGamePanel}>
        <div className={classes.gameInfoContainer}>
            <div className={classes.roundContainer}>Round: <span className={classes.span}>{round}</span></div>
           <div className={classes.countdownContainer}><Countdown  renderer={renderer}  ref={clockRef} className='blah'  date={endDate} autoStart={false} onComplete={handleNoAnswerUpdate}></Countdown></div> 
            <div className={classes.scoreContainer}>Score: <span className={classes.span}>{props.userScore}</span></div>
        </div>
    </div>
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
    
          {mappedSongs[props.round]}
        </div>
      </div>
    </div>
    </> 
   
  )
}

export default DisplayThisIs