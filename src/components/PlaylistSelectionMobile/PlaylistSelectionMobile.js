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
 var rbPlaylists = []

  playlists.forEach((playlist) => { 
    if (playlist.tags.includes("rap")) { 
      rapPlaylists.push(playlist);
    } else if (playlist.tags.includes("pop")) { 
      popPlaylists.push(playlist)
    } else if (playlist.tags.includes("rock")) { 
      rockPlaylists.push(playlist)
    } else if (playlist.tags.includes("rb")) { 
      rbPlaylists.push(playlist);
    }
  })


  const slicedRap = rapPlaylists.slice(0, 8);
  const slicedPop = popPlaylists.slice(0,8); 
  const slicedRock = rockPlaylists.slice(0,8);
  const slicedRb = rbPlaylists.slice(0,8);
  const slicedUser = props.userRecommendations.slice(0,8);


  const mappedUserPlaylists = slicedUser.map((playlist) => { 
    return ( 
      <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
            <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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

  const mappedRapPlaylists = slicedRap.map((playlist) => { 
    return ( 
      <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
            <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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
      <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} > 
          <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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
      <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
          <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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

  const mappedRbPlaylists = slicedRb.map((playlist) => { 
    return ( 
      <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
            <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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
        {props.userRecommendations.length > 3 ? <> <Headline text="Recommended For You"></Headline>
            <section className={classes.section}>
            <div className={classes.allPlaylistsContainer}>
            {mappedUserPlaylists}
            <Link to={props.userID ? "/ViewAllPage" : "/"}><button onClick={props.handleViewAllGenre} id="Your Recommended" className={classes.viewAllBtn}>
            <div className={classes.contentContainer}>
                <div className={classes.viewAllText}>View All</div>
                <ArrowCircleRight size={40} color="#c0c0c0" />
            </div>
            </button>
            </Link>
            </div>
            </section> </> : null}
            <Headline text="Hip Hop Quizzes"></Headline>
            <section className={classes.section}>
            <div className={classes.allPlaylistsContainer}>
            {mappedRapPlaylists}
            <Link to={props.userID ? "/ViewAllPage" : "/"}><button onClick={props.handleViewAllGenre} id="Hip Hop" className={classes.viewAllBtn}>
            <div className={classes.contentContainer}>
                <div className={classes.viewAllText}>View All</div>
                <ArrowCircleRight size={40} color="#c0c0c0" />
            </div>
            </button>
            </Link>
            </div>
            </section>
            <Headline text="Pop Quizzes"></Headline>
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
            <Headline text="Rock Quizzes"></Headline>
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
            <Headline text="R&B Quizzes"></Headline>
            <section className={classes.section}>
            <div className={classes.allPlaylistsContainer}>
            {mappedRbPlaylists}
            <Link to={props.userID ? "/ViewAllPage" : "/"}><button onClick={props.handleViewAllGenre} id="R&B" className={classes.viewAllBtn}>
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