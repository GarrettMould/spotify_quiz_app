import React from 'react'
import classes from "./PlaylistSelection.module.css"
import { Link } from 'react-router-dom'
import { playlists } from '../../Playlists'
import Headline from '../../elements/Headline/Headline'
import { Container, Row, Col } from 'react-bootstrap'
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
    } else if (playlist.tags.includes("rock")) { 
      rockPlaylists.push(playlist)
    }
  })

 

  const shuffledRap = props.shuffle(rapPlaylists);
  const shuffledPop = props.shuffle(popPlaylists); 
  const shuffledRock = props.shuffle(rockPlaylists);

  const slicedRap = shuffledRap.slice(0, 4);
  const slicedPop = shuffledPop.slice(0,4); 
  const slicedRock = shuffledRock.slice(0,4);
 

  const mappedRapPlaylists = slicedRap.map((playlist) => { 
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

  const mappedPopPlaylists = slicedPop.map((playlist) => { 
    return (    
    <Col xs={3}>
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
    </Col>
    )
  })

  const mappedRockPlaylists = slicedRock.map((playlist) => { 
    return (    
    <Col xs={3}>
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
    </Col>
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
      <Container fluid={true}>
        <Row >
      {mappedRapPlaylists}
        </Row>
      </Container>
      </div>
      </section>
      <div className={classes.sectionTitleContainer}>
        <Headline text="Pop Quizzes"></Headline>
        <Link to="/ViewAllPage"><div onClick={props.handleViewAllGenre} id="Pop" className={classes.showAllLink}>Show All</div></Link>
      </div>
      <section  className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      <Container fluid={true}>
        <Row>
        {mappedPopPlaylists}
        </Row>
      </Container>
      </div>
      </section>
      <div className={classes.sectionTitleContainer}>
        <Headline text="Rock Quizzes"></Headline>
        <Link to="/ViewAllPage"><div onClick={props.handleViewAllGenre} id="Rock" className={classes.showAllLink}>Show All</div></Link>
      </div>
      <section  className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      <Container fluid={true}>
        <Row>
        {mappedRockPlaylists}
        </Row>
      </Container>
      </div>
      </section>
    </div>
  )
}

export default PlaylistSelection