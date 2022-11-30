import React from 'react'
import classes from "./PlaylistSelection.module.css"

import { playlists } from '../../Playlists'


const PlaylistSelection = (props) => {

  const mappedPlaylists = playlists.map((playlist) => { 
    return (
    <div className={classes.playlistContainer}>
      <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
        <div className={classes.imageContainer}>
            <img src={playlist.img} alt="playlist" className={classes.img}></img>
        </div>
      </button>
    </div>
    )
  })
  return (
    <div className={classes.container}>
      {mappedPlaylists}
    </div>
  )
}

export default PlaylistSelection