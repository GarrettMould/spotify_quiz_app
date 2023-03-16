import React from 'react'
import classes from "./ChallengeBar.module.css"
import { useState } from 'react';


const ChallengeBar = (props) => {

  const displayName = props.userDisplayName
  const newDisplayName = displayName.replace(/\s+/g, "_");

  const [copyText, setCopyText] = useState('Copy Link');

  const handleCopyLinkClick = (id) => {
    const playlistId = id
    const quizUrl = `${window.location.origin}/PlayPage/${playlistId}?share=true`;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = quizUrl;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    props.handleClick();
  };


    const mappedUserShareablePlaylists = props.userShareablePlaylists.map((playlist) => { 
        return ( 
                <button className={classes.btn} id={playlist.id} onClick={() => handleCopyLinkClick(playlist.id)}>
                    <div className={classes.imageContainer}>
                      <img
                        src={playlist.img}
                        className={classes.image}
                        alt="playlistimage"
                      ></img>
                    </div>
                    </button>
        )
      })
    
  return (
    <div className={classes.container}>
        <div className={classes.flexRow}>
            <div className={classes.leftBlockContainer}>
                        <div className={classes.rowOne}>Challenge Your Friends</div>
                        <div className={classes.rowTwo}>How well do your friends know your favorite artists? Hover the playlist to get a shareable quiz link.</div>
                        
            </div>
            <div className={classes.playlistsContainer}>
              {mappedUserShareablePlaylists}
            </div>
        </div>
    </div>
  )
}

export default ChallengeBar