import classes from "./PlaylistSelectionMobile.module.css"
import { Card, Container, Row, Col } from "react-bootstrap";
import { playlists } from '../../Playlists'
import Headline from "../../elements/Headline/Headline";
import { Spacer } from "../../elements/Spacer/Spacer";
import React from 'react'

const PlaylistSelectionMobile = (props) => {

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
            <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
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

  const mappedPopPlaylists = popPlaylists.map((playlist) => { 
    return (    
          <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
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
    <div>
        <div className={classes.container}>
            <Headline text="Hip Hop & Rap"></Headline>
            <section className={classes.section}>
            <div className={classes.allPlaylistsContainer}>
            {mappedRapPlaylists}
            </div>
            </section>
            <Headline text="Pop"></Headline>
            <section className={classes.section}>
            <div className={classes.allPlaylistsContainer}>
            {mappedPopPlaylists}
            </div>
            </section>
        </div>
        </div>
  )
}

export default PlaylistSelectionMobile