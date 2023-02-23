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

  const shuffledRap = props.shuffle(rapPlaylists);
  const shuffledPop = props.shuffle(popPlaylists); 
  const shuffledRock = props.shuffle(rockPlaylists);




{props.viewAllGenre === "Rap" ? playlistsAll = shuffledRap : props.viewAllGenre === "Pop" ? playlistsAll = shuffledPop : playlistsAll = shuffledRock}

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
      <Col xs={4}>
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
    <section className={classes.section}>
    <Spacer></Spacer>
    <div className={classes.allPlaylistsContainer}>
    <Container fluid={true}>
    <Row>
    {props.isMobile ? mappedPlaylistsMobile : mappedPlaylistsDesktop}
    </Row>
    </Container>
    </div>
    </section>
    </div>
    </>
  )
}

export default PlaylistsViewAllPage