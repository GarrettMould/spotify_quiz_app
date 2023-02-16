import React from 'react'
import Headline from '../../elements/Headline/Headline'
import { Spacer } from '../../elements/Spacer/Spacer'
import classes from "./PlaylistsViewAllPage.module.css"
import { Link } from 'react-router-dom'
import { playlists } from '../../Playlists'

const PlaylistsViewAllPage = (props) => {

var playlistsAll  = playlists;
var headlineTitle = `${props.viewAllGenre} Quizzes` 

var rapPlaylists = [];
 var popPlaylists = []; 
 var rockPlaylists = []; 

  playlistsAll.forEach((playlist) => { 
    if (playlist.tags.includes("rap")) { 
      rapPlaylists.push(playlist);
    } else if (playlist.tags.includes("pop")) { 
      popPlaylists.push(playlist)
    } else if (playlist.tags.includes("rock")) { 
      rockPlaylists.push(playlist)
    }
  })



{props.viewAllGenre === "Rap" ? playlistsAll = rapPlaylists : props.viewAllGenre === "Pop" ? playlistsAll = popPlaylists : playlistsAll = rockPlaylists}

const mappedPlaylistsDesktop = playlistsAll.map((playlist) => { 
    return (    
    <div className={classes.playlistContainer}>
      <Link to={props.userID ? "/PlayPage" : "/"} >
      <button className={classes.btn} id={playlist.id} onClick={props.handlePlaylistChange}>
        <div className={classes.contentContainer}>
          
              <img src={playlist.img} alt="playlist" className={classes.img}></img>
          
          <div className={classes.textContainer}>
            <div className={classes.name}>{playlist.artist}</div>
            <div className={classes.description}>{playlist.description}</div>
          </div>
        </div>
      </button>
      </Link>
    </div>
    )
  })

  const mappedPlaylistsMobile = playlistsAll.map((playlist) => { 
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
    <>
    <div className={classes.wrapper}>
    <div className={classes.sectionTitleContainer}>
    <Headline text={headlineTitle}></Headline>
    <Link to="/"><div onClick={props.resetQuiz} className={classes.showAllLink}>Return</div></Link>
    </div>
    <section className={classes.section}>
    <Spacer></Spacer>
    <div className={classes.allPlaylistsContainer}>
    {props.isMobile ? mappedPlaylistsMobile : mappedPlaylistsDesktop}
    </div>
    </section>
    </div>
    </>
  )
}

export default PlaylistsViewAllPage