import classes from "./PlaylistSelectionMobile.module.css"
import { ArrowCircleRight } from "phosphor-react";
import { playlists } from '../../Playlists'
import { Link } from "react-router-dom";
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
    } else if (playlist.tags.includes("rock")) { 
      rockPlaylists.push(playlist)
    }
  })


  const slicedRap = rapPlaylists.slice(0, 8);
  const slicedPop = popPlaylists.slice(0,8); 
  const slicedRock = rockPlaylists.slice(0,8);
 


  const mappedRapPlaylists = slicedRap.map((playlist) => { 
    return ( 
      <Link to={props.userID ? "/PlayPage" : "/"}>
            <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
                <div className={classes.imageContainer}>
                  <img
                    src={playlist.img}
                    className={classes.image}
                    alt="playlistimage"
                  ></img>
                </div>
                </button>
       </Link>
    )
  })

  const mappedPopPlaylists = slicedPop.map((playlist) => { 
    return ( 
      <Link to={props.userID ? "/PlayPage" : "/"}>  
          <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
          <div className={classes.imageContainer}>
            <img
              src={playlist.img}
              className={classes.image}
              alt="playlistimage"
            ></img>
          </div>
          </button>
          </Link> 
    )
  })

  const mappedRockPlaylists = slicedRock.map((playlist) => { 
    return (    
      <Link to={props.userID ? "/PlayPage" : "/"}>
          <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
          <div className={classes.imageContainer}>
            <img
              src={playlist.img}
              className={classes.image}
              alt="playlistimage"
            ></img>
          </div>
          </button>
          </Link>
    )
  })
  return (
    <div>
        <div className={classes.container}>
            <Headline text="Hip Hop & Rap"></Headline>
            <section className={classes.section}>
            <div className={classes.allPlaylistsContainer}>
            {mappedRapPlaylists}
            <Link to={props.userID ? "/ViewAllPage" : "/"}><button onClick={props.handleViewAllGenre} id="Rap" className={classes.viewAllBtn}>
            <div className={classes.contentContainer}>
                <div className={classes.viewAllText}>View All</div>
                <ArrowCircleRight size={40} color="#c0c0c0" />
            </div>
            </button>
            </Link>
            </div>
            </section>
            <Headline text="Pop"></Headline>
            <section className={classes.section}>
            <div className={classes.allPlaylistsContainer}>
            {mappedPopPlaylists}
            <Link to={props.userID ? "/ViewAllPage" : "/"}><button onClick={props.handleViewAllGenre} id="Pop" className={classes.viewAllBtn}>
            <div className={classes.contentContainer}>
                <div className={classes.viewAllText}>View All</div>
                <ArrowCircleRight size={40} color="#c0c0c0" />
            </div>
            </button>
            </Link>
            </div>
            </section>
            <Headline text="Rock"></Headline>
            <section className={classes.section}>
            <div className={classes.allPlaylistsContainer}>
            {mappedRockPlaylists}
            <Link to={props.userID ? "/ViewAllPage" : "/"}><button onClick={props.handleViewAllGenre} id="Rock" className={classes.viewAllBtn}>
            <div className={classes.contentContainer}>
                <div className={classes.viewAllText}>View All</div>
                <ArrowCircleRight size={40} color="#c0c0c0" />
            </div>
            </button>
            </Link>
            </div>
            </section>
        </div>
        </div>
  )
}

export default PlaylistSelectionMobile