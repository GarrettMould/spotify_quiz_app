import React from 'react'
import { useEffect, useState } from 'react';
import { DisplayResults } from '../../components/DisplayResults/DisplayResults'
import DisplayThisIs from '../../components/DisplayThisIs/DisplayThisIs'
import classes from "./PlayPage.module.css";
import { useParams, useLocation } from 'react-router-dom';
import ShareLinkStartMenu from '../../elements/ShareLinkStartMenu/ShareLinkStartMenu';

const PlayPage = (props) => {

  console.log('PlayPage mounted');
  const { playlistID } = useParams();
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);
  const [prevPlaylistID, setPrevPlaylistID] = useState('');

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

    useEffect(() => {

      console.log("useEffect triggered")
      if (playlistID !== prevPlaylistID) {
        props.handleQuizCreation(playlistID);
        setPrevPlaylistID(playlistID);
      }
    }, [playlistID, prevPlaylistID, props.handleQuizCreation]);


  return (
    <div className={classes.wrapper}>
      {/*<ShareLinkStartMenu thisIsImage={props.thisIsImage} thisIsName={props.thisIsName} getPlaylistInfo={props.getPlaylistInfo} playlistID={playlistID} handleQuizCreation={props.handleQuizCreation}></ShareLinkStartMenu>*/}
     {showButton ? <button onClick={() => props.handleQuizCreation(playlistID)}>PLAY QUIZ</button> : null} 
    {props.gotThisIs && props.round < 10 ? <DisplayThisIs changeSrc={props.changeSrc} handleSrcChange={props.handleSrcChange} setAverageAnswerTime={props.setAverageAnswerTime} averageAnswerTime={props.averageAnswerTime} correctTally={props.correctTally} setCorrectTally={props.setCorrectTally} setUserScore={props.setUserScore} setRound={props.setRound}  setStartMenu={props.setStartMenu} startMenu={props.startMenu} roundOne={props.roundOne} selectedThisIsSongs={props.selectedThisIsSongs} round={props.round} userScore={props.userScore} thisIsImage={props.thisIsImage} thisIsName={props.thisIsName} handleAnswer={props.handleAnswer}></DisplayThisIs> : props.gotThisIs && props.round >= 10 ? <DisplayResults  handleSrcChange={props.handleSrcChange} scoreCompPerc={props.scoreCompPerc} averageAnswerTime={props.averageAnswerTime} correctTally={props.correctTally} userScore={props.userScore} resetQuiz={props.resetQuiz} thisIsImage={props.thisIsImage} thisIsName={props.thisIsName}></DisplayResults> : null}
    </div>
  )
}

export default PlayPage