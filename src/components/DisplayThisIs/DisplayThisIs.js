import React from 'react'
import classes from './DisplayThisIs.module.css'

const DisplayThisIs = (props) => {

  var selectedSongs = props.selectedThisIsSongs;
     // Map over selectedSongs and create a UI for the test questions
  const mappedSongs = selectedSongs.map((song) => { 
    var correctAnswer = song.name

    const mappedAnswerOptions = song.answerOptions.map( (song, i) => { 
        return (
            <>
            <div className={classes.answerContainer}>
  
            <button
              className={classes.btnAnswerOption}
              type="radio"
              name={correctAnswer}
              value={song.name === correctAnswer ? true : false}
              onClick={props.handleAnswer}
              
            ><div className={classes.imgContainer}><img src={song.img.url} alt="album" className={classes.img}></img></div><div className={classes.answerText}>{song.name}</div></button>
            </div>
            </>
            
          
            
        )})

    return (
        <>
        <audio controls="controls">
        <source src={song.uri} type="audio/mpeg"/>
        </audio>
        {mappedAnswerOptions}
        
        </>
    )
})

  return (
    <>
    <div className={classes.quizInfoContainer}>
      <img src={props.thisIsImage} alt="playlist" className={classes.thisIsImage}></img>
      <div className={classes.infoTextContainer}>
        <div className={classes.thisIsName}>{props.thisIsName}</div>
        <div className={classes.scoreIdentifier}><span>Score:</span> 1 of 10</div>
      </div>
    </div>
    
    {mappedSongs}
    </>
  )
}

export default DisplayThisIs