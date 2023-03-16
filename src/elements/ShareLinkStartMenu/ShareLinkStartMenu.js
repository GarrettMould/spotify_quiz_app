import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from "./ShareLinkStartMenu.module.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoginButton from '../LoginButton/LoginButton'
import { Button } from 'react-bootstrap'

const ShareLinkStartMenu = (props) => {
  
  const { playlistID } = useParams();
  const [playlistName, setPlaylistName] = useState("")
  const [playlistImage, setPlaylistImage] = useState(null);


  const REDIRECT_URI = `${props.REDIRECT_URI}Shareable/`

const PLAYLIST_PARAM = `&playlist_id=${playlistID}`

const FRESH_ID = new URLSearchParams(window.location.hash.slice(1)).get("playlistID");


console.log(FRESH_ID)
  return (
    <div className={classes.wrapper}>
      <div className={classes.quizPanelWrapper}>
        <div className={classes.quizSectionContainer}>
          
          
         <div className={classes.rowButtons}>
         <a
            className={classes.link} href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}&scope=${props.SCOPES_URL_PARAM}&playlistID=${PLAYLIST_PARAM}`}
          >
            <Button  onClick={props.logout} className={classes.btn}>Login to Spotify</Button>
          </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ShareLinkStartMenu