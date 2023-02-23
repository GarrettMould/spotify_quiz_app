import React from 'react'
import { useEffect, useRef, useState} from 'react';
import classes from './DisplayThisIs.module.css'
import Countdown from 'react-countdown';


const DisplayThisIs = (props) => {

  const clockRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const round = props.round + 1;
  const [key, setKey] = useState(0);

  
// Score multiplier (based on time remaning in round)
 var scoreMultiplier; 

 //10 Second Countdown Variable
 const endDate =  Date.now() + 10000;

 const handlePlay = () => { 
  clockRef.current.start();
  playFirstURI()
  setIsPlaying(true)

 }
 // Countdown Handle Start Function
 const handleStart = () => { 
  clockRef.current.start();
  console.log()
 }
 
 useEffect(() => {
  if (isPlaying) { 
    handleStart();
  }
 }, [props.round]);



const startRound = () => { 
  changeSrc(); // Call changeSrc at the start of each round
  setKey(prevKey => prevKey + 1);
}

const stopFirstURI = () => { 
  const audioFirst = document.getElementById("audioFirst");
    const sourceFirst = document.getElementById("sourceFirst");
    sourceFirst.src = props.selectedThisIsSongs[0].uri
    console.log(sourceFirst.src)
    audioFirst.pause();
}

const playFirstURI = () => { 
  const audioFirst = document.getElementById("audioFirst");
    const sourceFirst = document.getElementById("sourceFirst");
    sourceFirst.src = props.selectedThisIsSongs[0].uri
    console.log(sourceFirst.src)
    audioFirst.load();
    audioFirst.play();
}

const changeSrc = () => {
    const audio = document.getElementById("audio");
    const source = document.getElementById("audioSrc");
    source.src = mappedSongs[props.round].uri
    console.log(source.src)
    audio.load();
    audio.play();
  }


  const handleAnswer = (e) => { 
    stopFirstURI();
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
    
  
    props.setRound(props.round + 1);
    setKey(prevKey => prevKey + 1)
    startRound()
  }
 
  // Function called when timer expires without an answer selected
  const handleNoAnswerUpdate = () => {
    stopFirstURI();
    props.setRound(props.round +1);
    startRound(); 
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
              className={isPlaying ? `${classes.btnAnswerOption}` : `${classes.btnAnswerOptionDisabled}` }
              type="radio"
              name={correctAnswer}
              value={track.name === correctAnswer ? "blah" : false}
              onClick={handleAnswer}
              disabled={isPlaying ? false : true}
              
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
            {isPlaying ? null : <button className={classes.playBtn} onClick={handlePlay}>Play</button>}
           <Countdown className={classes.countdown} ref={clockRef} date={Date.now() + 10000} autoStart={false} onComplete={handleNoAnswerUpdate}/>
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
        <source id="sourceFirst" src={props.selectedThisIsSongs[0].uri} type="audio/mpeg" hidden="hidden"/>
        </audio>
    
          {mappedSongs[props.round]}
        </div>
      </div>
    </div>
    </> 
   
  )
}

export default DisplayThisIs