import React from 'react'
import { useEffect, useState } from 'react'
import classes from "./ShareLinkStartMenu.module.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoginButton from '../LoginButton/LoginButton'

const ShareLinkStartMenu = (props) => {

  const [playlistID, setPlaylistID] = useState(null);
  const [playlistName, setPlaylistName] = useState("")
  const [playlistImage, setPlaylistImage] = useState(null);

  useEffect(() => {
    setPlaylistID(props.playlistID)
  }, []);

  useEffect(() => { 
    const getPlaylist = async () => { 

      const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}`, {
          headers: {
              Authorization: `Bearer ${props.token}` //MaKE token available
          },
          
      })
      
      setPlaylistName(data.name); 
      setPlaylistImage(data.images[0].url)
    }
  }, [playlistID])
  

  return (
    <div className={classes.wrapper}>
      <div className={classes.quizPanelWrapper}>
        <div className={classes.quizSectionContainer}>
          <div className={classes.quizInfoContainer}>
            <img src={props.thisIsImage} alt="playlist" className={classes.thisIsImage}></img>
            <div className={classes.infoTextContainer}>
              <div className={classes.thisIsName}>{props.thisIsName}</div>
            </div>
          </div>
          
         <div className={classes.rowButtons}>
           <button onClick={() => props.handleQuizCreation(props.playlistID)} className={classes.btn}>Close</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ShareLinkStartMenu