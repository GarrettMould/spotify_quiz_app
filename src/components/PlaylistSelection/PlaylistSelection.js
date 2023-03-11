import React from 'react'
import { useState, useEffect } from 'react'
import classes from "./PlaylistSelection.module.css"
import { Link } from 'react-router-dom'
import { playlists } from '../../Playlists'
import Headline from '../../elements/Headline/Headline'
import { Container, Row, Col } from 'react-bootstrap'
import { Spacer } from '../../elements/Spacer/Spacer'
import ChallengeBar from '../../elements/ChallengeBar/ChallengeBar'
import LinkCopiedPopUp from '../../elements/LinkCopiedPopUp/LinkCopiedPopUp'


const PlaylistSelection = (props) => {

  const [isOpen, setIsOpen] = useState(false)
 var rapPlaylists = [];
 var popPlaylists = []; 
 var rockPlaylists = []; 
 var rbPlaylists = [];

 useEffect(() => {
  let timeout;
  if (isOpen) {
    timeout = setTimeout(() => setIsOpen(false), 2000);
  }
  return () => clearTimeout(timeout);
}, [isOpen]);

const handleClick = () => {
  setIsOpen(true);
};

 
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


  const slicedRap = rapPlaylists.slice(0, 4);
  const slicedPop = popPlaylists.slice(0,4); 
  const slicedRock = rockPlaylists.slice(0,4);
  const slicedRb = rbPlaylists.slice(0,4);
  const slicedUser = props.userRecommendations.slice(0,4); 



const mappedUserPlaylists = slicedUser.map((playlist) => { 
    return (    
    <Col xs={3}>
    <div className={classes.playlistContainer}>
    <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
      <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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

  const mappedRapPlaylists = slicedRap.map((playlist) => { 
    return (    
    <Col xs={3}>
    <div className={classes.playlistContainer}>
      <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
      <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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
    <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
      <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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
    <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
      <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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

  const mappedRbPlaylists = slicedRb.map((playlist) => { 
    return (    
    <Col xs={3}>
    <div className={classes.playlistContainer}>
    <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
      <button className={classes.btn} id={playlist.id} onClick={props.userID ? null : () => props.handleModalOpen()}>
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
    <div className={classes.container} id="playlistsContainer">
      {isOpen && (
        <LinkCopiedPopUp text="Link copied!"></LinkCopiedPopUp>
      )}
      {props.userShareablePlaylists.length > 0 ? <ChallengeBar userDisplayName={props.userDisplayName} handleClick={handleClick} userShareablePlaylists={props.userShareablePlaylists} userRecommendations={props.userRecommendations}></ChallengeBar> : null}
      {props.userRecommendations.length > 3 ? <><div className={classes.sectionTitleContainer}>
        <Headline text="Recommended For You"></Headline>
        <Link to={props.userID ? "/ViewAllPage" : "/"}><div onClick={props.handleViewAllGenre} id="Your Recommended" className={classes.showAllLink}>Show All</div></Link>
      </div>
      <section className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      <Container fluid={true}>
        <Row >
      {mappedUserPlaylists}
        </Row>
      </Container>
      </div>
      </section></> : null}
      
      <div className={classes.sectionTitleContainer}>
        <Headline text="Hip Hop Quizzes"></Headline>
        <Link to={props.userID ? "/ViewAllPage" : "/"}><div onClick={props.handleViewAllGenre} id="Hip Hop" className={classes.showAllLink}>Show All</div></Link>
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
        <Link to={props.userID ? "/ViewAllPage" : "/"}><div onClick={props.handleViewAllGenre} id="Pop" className={classes.showAllLink}>Show All</div></Link>
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
        <Link to={props.userID ? "/ViewAllPage" : "/"}><div onClick={props.handleViewAllGenre} id="Rock" className={classes.showAllLink}>Show All</div></Link>
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
      <div className={classes.sectionTitleContainer}>
        <Headline text="R&B Quizzes"></Headline>
        <Link to={props.userID ? "/ViewAllPage" : "/"}><div onClick={props.handleViewAllGenre} id="R&B" className={classes.showAllLink}>Show All</div></Link>
      </div>
      <section  className={classes.section}>
      <Spacer></Spacer>
      <div className={classes.allPlaylistsContainer}>
      <Container fluid={true}>
        <Row>
        {mappedRbPlaylists}
        </Row>
      </Container>
      </div>
      </section>
    </div>
  )
}

export default PlaylistSelection