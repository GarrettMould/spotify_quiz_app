import React from 'react'
import { useEffect, useState } from 'react';
import { DisplayResults } from '../../components/DisplayResults/DisplayResults'
import DisplayThisIs from '../../components/DisplayThisIs/DisplayThisIs'
import classes from "./PlayPage.module.css";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PlayPage = (props) => {

  
  const { playlistID } = useParams();
  const location = useLocation();
  const [playlistIDFromURL, setPlaylistIDFromURL] = useState(null);
  const navigate = useNavigate();
  const [stateParam, setStateParam] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [prevPlaylistID, setPrevPlaylistID] = useState('');
  

 

console.log(playlistID)

// Function to set the token on login


const handleLogin = () => { 
  props.updateToken();
  sessionStorage.setItem('state', `${playlistID}`) 

}

var extractedPlaylistID; 

// Function to get the set the userID when the token changes
  useEffect(() => {
    props.getUserID();
    extractedPlaylistID = sessionStorage.getItem('state');
    if (extractedPlaylistID) {
      console.log("extractedId exists")
      console.log(extractedPlaylistID)
      props.handleQuizCreation(extractedPlaylistID)
    }
    
  }, [props.token]);


  {/*function getStateParamFromUrl() {
    
    const hash = window.location.hash;
    const location = window.location

    console.log(location)
    if (hash) {
      console.log('hash')
      const params = new URLSearchParams(hash.substring(1));
      const state = params.get("state");
      console.log(state)
      navigate(`/PlayPage/${state}`);
      setPlaylistIDFromURL(state)
      props.handleQuizCreation(state);
    }
  
    return null;
  }
*/}

  console.log(playlistIDFromURL)
  console.log(playlistID)
  console.log(extractedPlaylistID)



 

    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const shareParam = params.get("share")
      if (shareParam === "true") {
        setShowButton(true);
      } else {
        setShowButton(false);
        // User clicked on a playlist on your website, so handle it here
      }
    }, [location.search]);


    const REDIRECT_URI = "http://localhost:3000/PlayPage/"
    
    var button; 

    {props.userID ? button =  <button onClick={() => props.handleQuizCreation(playlistID)}>PLAY QUIZ</button> : button = <a className={classes.link} href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}&scope=${props.SCOPES_URL_PARAM}&state=${playlistID}`}>

    <Button  className={classes.btn} onClick={() => handleLogin()}>Login to Spotify</Button>
  </a>}
    

    useEffect(() => {

      console.log("useEffect triggered")
      if (playlistID !== prevPlaylistID) {
        props.handleQuizCreation(playlistID);
        setPrevPlaylistID(playlistID);
      }
    }, [playlistID, prevPlaylistID, props.handleQuizCreation]);


  return (
    <>
    {!playlistID ? <button onClick={() => props.handleQuizCreation(extractedPlaylistID)}>PLAY QUIZ</button> : null}
    <div className={classes.wrapper}>
     {showButton ? button : null} 
    {props.gotThisIs && props.round < 10 ? <DisplayThisIs changeSrc={props.changeSrc} handleSrcChange={props.handleSrcChange} setAverageAnswerTime={props.setAverageAnswerTime} averageAnswerTime={props.averageAnswerTime} correctTally={props.correctTally} setCorrectTally={props.setCorrectTally} setUserScore={props.setUserScore} setRound={props.setRound}  setStartMenu={props.setStartMenu} startMenu={props.startMenu} roundOne={props.roundOne} selectedThisIsSongs={props.selectedThisIsSongs} round={props.round} userScore={props.userScore} thisIsImage={props.thisIsImage} thisIsName={props.thisIsName} handleAnswer={props.handleAnswer}></DisplayThisIs> : props.gotThisIs && props.round >= 10 ? <DisplayResults  handleSrcChange={props.handleSrcChange} scoreCompPerc={props.scoreCompPerc} averageAnswerTime={props.averageAnswerTime} correctTally={props.correctTally} userScore={props.userScore} resetQuiz={props.resetQuiz} thisIsImage={props.thisIsImage} thisIsName={props.thisIsName}></DisplayResults> : null}
    </div>
    </>

    
  )
}

export default PlayPage