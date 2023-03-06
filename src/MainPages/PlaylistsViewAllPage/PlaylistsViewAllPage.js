import React from 'react'
import Headline from '../../elements/Headline/Headline'
import { Spacer } from '../../elements/Spacer/Spacer'
import { Container, Row, Col } from 'react-bootstrap'
import classes from "./PlaylistsViewAllPage.module.css"
import { Link } from 'react-router-dom'
import { playlists } from '../../Playlists'

const PlaylistsViewAllPage = (props) => {

var playlistsAll  = playlists;
var headlineTitle = `${props.viewAllGenre} Quizzes` 

var rapPlaylists = props.rapPlaylists;
var popPlaylists = props.popPlaylists; 
var rockPlaylists = props.rockPlaylists; 
var rbPlaylists = props.rbPlaylists;

  
{props.viewAllGenre === "Hip Hop" ? playlistsAll = rapPlaylists : props.viewAllGenre === "Pop" ? playlistsAll = popPlaylists : props.viewAllGenre === "Rock" ? playlistsAll = rockPlaylists : playlistsAll = rbPlaylists}

const mappedPlaylistsDesktop = playlistsAll.map((playlist) => { 
    return (    
    <Col xs={3}>
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
    </Col>
    )
  })

  const mappedPlaylistsMobile = playlistsAll.map((playlist) => { 
    return ( 
      <Col xs={4} className={classes.col}>
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
       </Col>
       
    )
  })


  return (
    <>
    <div className={classes.wrapper}>
    <div className={classes.sectionTitleContainer}>
    <Headline text={headlineTitle}></Headline>
    
    </div>
    
    <Spacer></Spacer>
    <section className={classes.section}>
    <div className={classes.allPlaylistsContainer}>
    <Container fluid={true} className={classes.container}>
    {props.isMobile ? <Row>{mappedPlaylistsMobile}</Row> : <Row> {mappedPlaylistsDesktop} </Row> }
    </Container>
    </div>
    </section>
    </div>
    </>
  )
}

export default PlaylistsViewAllPage