import React from 'react'
import classes from "./PlaylistSelection.module.css"
import { Link } from 'react-router-dom'
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

  const mappedPopPlaylists = popPlaylists.map((playlist) => { 
    return (    
    <div className={classes.playlistContainer}>
      <Link to={props.userID ? "/PlayPage" : "/"}>
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

  const mappedRockPlaylists = rockPlaylists.map((playlist) => { 
    return (    
    <div className={classes.playlistContainer}>
      <Link to={props.userID ? "/PlayPage" : "/"}>
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
  return (
    <div className={classes.container}>
      <div className={classes.sectionTitleContainer}>
        <Headline text="Hip Hop Quizzes"></Headline>
        <Link to="/ViewAllPage"><div onClick={props.handleViewAllGenre} id="Rap" className={classes.showAllLink}>Show All</div></Link>
      </div>
      <section className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      {mappedRapPlaylists}
      </div>
      </section>
      <div className={classes.sectionTitleContainer}>
        <Headline text="Pop Quizzes"></Headline>
        <Link to="/ViewAllPage"><div onClick={props.handleViewAllGenre} id="Pop" className={classes.showAllLink}>Show All</div></Link>
      </div>
      <section  className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      {mappedPopPlaylists}
      </div>
      </section>
      <div className={classes.sectionTitleContainer}>
        <Headline text="Rock Quizzes"></Headline>
        <Link to="/ViewAllPage"><div onClick={props.handleViewAllGenre} id="Rock" className={classes.showAllLink}>Show All</div></Link>
      </div>
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