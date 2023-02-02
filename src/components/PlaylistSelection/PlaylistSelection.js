import React from 'react'
import classes from "./PlaylistSelection.module.css"

import { playlists } from '../../Playlists'
import Headline from '../../elements/Headline/Headline'
import { Spacer } from '../../elements/Spacer/Spacer'
import PlaylistSelectionInfoBox from '../PlaylistSelectionInfoBox/PlaylistSelectionInfoBox'


const PlaylistSelection = (props) => {

 var rapPlaylists = [];
 var popPlaylists = []; 
 var rockPlaylists = []; 

  playlists.forEach((playlist) => { 
    if (playlist.tags.includes("rap")) { 
      rapPlaylists.push(playlist);
    } else if (playlist.tags.includes("pop")) { 
      popPlaylists.push(playlist)
    } else if (playlist.tags.includes("rock")) { 
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

  const mappedRockPlaylists = rockPlaylists.map((playlist) => { 
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
      <Headline text="Hip Hop Quizzes"></Headline>
      <section className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      {mappedRapPlaylists}
      </div>
      </section>
      <Headline text="Pop Quizzes"></Headline>
      <section  className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      {mappedPopPlaylists}
      </div>
      </section>
      <Headline text="Rock Quizzes"></Headline>
      <section  className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      {mappedRockPlaylists}
      </div>
      </section>
    </div>
  )
}

export default PlaylistSelection