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


  useEffect(() => {
    console.log('Component has mounted');
    return () => console.log('Component will unmount');
  }, []);

// Function to get the set the userID when the token changes
  useEffect(() => {
    
    console.log("useEffect runs to create playlist with extracted ID")
    //props.getUserID(); WHY WAS THIS HERE? IT IS CAUSING PROBLEMS. 
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



 
var userName; 
var playlistName;
    useEffect(() => {
      console.log("location search changed")
      const params = new URLSearchParams(window.location.search);
      const shareParam = params.get("share")
      const nameParam = params.get("name"); 
      const playlistParam = params.get("playlist")
      if (nameParam && playlistParam) { 
        userName = nameParam.replace(/_/g, ' ')
        playlistName = playlistParam
        props.setUserQuizName(userName);
        props.setSharedPlaylistName(playlistName);
      }  else { 
        props.setUserQuizName(null)
        props.setSharedPlaylistName(null)
      }

      console.log(userName)
      if (shareParam === "true") {
        setShowButton(true);
      } else {
        setShowButton(false);
        // User clicked on a playlist on your website, so handle it here
      }
    }, [location.search]);


    const REDIRECT_URI = "https://spotifyquizzes.netlify.app/PlayPage/"
    
    var button; 





    button =  <>
        <div className={classes.challengeWrapper}>
          <div className={classes.challengePanelWrapper}>
            <div className={classes.challengeSectionContainer}>
              <div className={classes.challengeInfoContainer}>
                <img src={props.thisIsImage} alt="playlist" className={classes.challengeImage}></img>
                <div className={classes.challengeTextContainer}>
                  <div className={classes.challengeText}>Quiz Challenge:</div>
                  <div className={classes.challengeName}>{`${props.userQuizName}'s ${props.sharedPlaylistName} Quiz`}</div>
                </div>
                <a className={classes.link} href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}&scope=${props.SCOPES_URL_PARAM}&state=${playlistID}`}>

                <Button  className={classes.btn} onClick={() => handleLogin()}>{props.userID ? "Play" : "Login to Spotify"}</Button>

                </a> 
              </div>
              
             
            </div>
          </div>
          </div>
</>
    


    useEffect(() => {

      console.log("useEffect triggered")
      if (playlistID !== prevPlaylistID) {
        props.handleQuizCreation(playlistID);
        setPrevPlaylistID(playlistID);
      }
    }, [playlistID, prevPlaylistID, props.handleQuizCreation]);


  return (
    <>
    <div className={classes.wrapper}>
  {/*I changed the line of code below ... adding props.gotThisIs seemed to fix the 
  issue I had of the quiz not rendering after the shareable link page loads, 
  when the user is already logged in...If this stops working you can have the user log in 
  even if they are aleady logged in, but just change the button text to "play"...this should force the 
  quiz to render
  */}
    {/*{ props.gotThisIs ? null : button}*/}
    {props.gotThisIs && props.round < 10 ? <DisplayThisIs userQuizName={props.userQuizName} changeSrc={props.changeSrc} handleSrcChange={props.handleSrcChange} setAverageAnswerTime={props.setAverageAnswerTime} averageAnswerTime={props.averageAnswerTime} correctTally={props.correctTally} setCorrectTally={props.setCorrectTally} setUserScore={props.setUserScore} setRound={props.setRound}  setStartMenu={props.setStartMenu} startMenu={props.startMenu} roundOne={props.roundOne} selectedThisIsSongs={props.selectedThisIsSongs} round={props.round} userScore={props.userScore} thisIsImage={props.thisIsImage} thisIsName={props.thisIsName} handleAnswer={props.handleAnswer}></DisplayThisIs> : props.gotThisIs && props.round >= 10 ? <DisplayResults  handleSrcChange={props.handleSrcChange} scoreCompPerc={props.scoreCompPerc} averageAnswerTime={props.averageAnswerTime} correctTally={props.correctTally} userScore={props.userScore} resetQuiz={props.resetQuiz} thisIsImage={props.thisIsImage} thisIsName={props.thisIsName}></DisplayResults> : null}
    </div>
    </>

    
  )
}

export default PlayPage