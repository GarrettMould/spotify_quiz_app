import React from 'react'
import classes from "./PlaylistSelection.module.css"

import { playlists } from '../../Playlists'
import Headline from '../../elements/Headline/Headline'
import { Spacer } from '../../elements/Spacer/Spacer'


const PlaylistSelection = (props) => {

 var rapPlaylists = [];
 var popPlaylists = []; 
 var rockPlaylists = []; 

  playlists.forEach((playlist) => { 
    if (playlist.tags.includes("rap")) { 
      rapPlaylists.push(playlist);
    } else if (playlist.tags.includes("pop")) { 
      popPlaylists.push(playlist)
    } else if (playlist.tags.includes("pop")) { 
      rockPlaylists.push(playlist)
    }
  })
 

  const mappedRapPlaylists = rapPlaylists.map((playlist) => { 
    return (    
    <div className={classes.playlistContainer}>
      <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
        <div className={classes.contentContainer}>
          
              <img src={playlist.img} alt="playlist" className={classes.img}></img>
          
          <div className={classes.textContainer}>
            <div className={classes.name}>{playlist.artist}</div>
            <div className={classes.description}>{playlist.description}</div>
          </div>
        </div>
      </button>
    </div>
    )
  })

  const mappedPopPlaylists = popPlaylists.map((playlist) => { 
    return (    
    <div className={classes.playlistContainer}>
      <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
        <div className={classes.contentContainer}>
          
              <img src={playlist.img} alt="playlist" className={classes.img}></img>
          
          <div className={classes.textContainer}>
            <div className={classes.name}>{playlist.artist}</div>
            <div className={classes.description}>{playlist.description}</div>
          </div>
        </div>
      </button>
    </div>
    )
  })
  return (
    <div className={classes.container}>
      <section className={classes.section}>
      <Headline text="Top Rap Quizzes"></Headline>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      {mappedRapPlaylists}
      </div>
      </section>
      <section  className={classes.section}>
      <Headline text="Top Pop Quizzes"></Headline>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      {mappedPopPlaylists}
      </div>
      </section>
    </div>
  )
}

export default PlaylistSelection