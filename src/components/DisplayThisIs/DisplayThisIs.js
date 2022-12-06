import React from 'react'
import classes from './DisplayThisIs.module.css'

const DisplayThisIs = (props) => {

const changeSrc = () => {
    const audio = document.getElementById("audio");
    const source = document.getElementById("audioSrc");
    source.src = mappedSongs[props.round].uri
    audio.load();
  }


  const handleAnswer = (e) => { 
    var value = e.currentTarget.value
    changeSrc(); 
    props.handleAnswer(value);
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
              
            ><div className={classes.imgContainer}><img src={track.img.url} alt="album" className={classes.img}></img></div><div className={classes.answerText}>{track.name}</div></button>
            </div>
            </>
            
          
            
        )})

    return (
        <>
        <audio id="audio" controls="controls">
        <source id="audioSrc" src={song.uri} type="audio/mpeg"/>
        </audio>
        {mappedAnswerOptions}
        
        </>
    )
})

console.log(selectedSongs)


  return (
    <>
    <div className={classes.quizInfoContainer}>
      <img src={props.thisIsImage} alt="playlist" className={classes.thisIsImage}></img>
      <div className={classes.infoTextContainer}>
        <div className={classes.thisIsName}>{props.thisIsName}</div>
        <div className={classes.scoreIdentifier}><span>Score:</span> {props.userScore}</div>
        {props.round + 1}
      </div>
    </div>
    
    {mappedSongs[props.round]}
    </>
  )
}

export default DisplayThisIs