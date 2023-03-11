import React from 'react'
import { useState } from 'react'
import Headline from '../../elements/Headline/Headline'
import { Spacer } from '../../elements/Spacer/Spacer'
import { Container, Row, Col } from 'react-bootstrap'
import classes from "./PlaylistsViewAllPage.module.css"
import { Link } from 'react-router-dom'
import { playlists } from '../../Playlists'
import SortByDropdown from '../../elements/SortByDropdown/SortByDropdown'


const PlaylistsViewAllPage = (props) => {

  const [sortBy, setSortBy] = useState("popularity");

  const handleSortByUpdate = (sortByTerm) => {
    setSortBy(sortByTerm) 
  }

  console.log(sortBy)

var playlistsAll  = playlists;
var headlineTitle = `${props.viewAllGenre} Quizzes` 


var rapPlaylists; 
var popPlaylists; 
var rockPlaylists;
var rbPlaylists;
var userRecommendations;

sortBy === "popularity" ? rapPlaylists = props.rapPlaylists.sort(function(a, b) { 
  return b.followers - a.followers  ||  b.artist.localeCompare(a.artist);
}) : rapPlaylists = props.rapPlaylists.sort((a, b) => a.artist.localeCompare(b.artist))

sortBy === "popularity" ? popPlaylists = props.popPlaylists.sort(function(a, b) { 
  return b.followers - a.followers  ||  b.artist.localeCompare(a.artist);
}) : popPlaylists = props.popPlaylists.sort((a, b) => a.artist.localeCompare(b.artist))

sortBy === "popularity" ? rockPlaylists = props.rockPlaylists.sort(function(a, b) { 
  return b.followers - a.followers  ||  b.artist.localeCompare(a.artist);
}) : rockPlaylists = props.rockPlaylists.sort((a, b) => a.artist.localeCompare(b.artist))

sortBy === "popularity" ? rbPlaylists = props.rbPlaylists.sort(function(a, b) { 
  return b.followers - a.followers  ||  b.artist.localeCompare(a.artist);
}) : rbPlaylists = props.rbPlaylists.sort((a, b) => a.artist.localeCompare(b.artist))

sortBy === "popularity" ? userRecommendations = props.userRecommendations.sort(function(a, b) { 
  return b.followers - a.followers  ||  b.artist.localeCompare(a.artist);
}) : userRecommendations = props.userRecommendations.sort((a, b) => a.artist.localeCompare(b.artist))

  
{props.viewAllGenre === "Hip Hop" ? playlistsAll = rapPlaylists : props.viewAllGenre === "Pop" ? playlistsAll = popPlaylists : props.viewAllGenre === "Rock" ? playlistsAll = rockPlaylists : props.viewAllGenre === "Your Recommended" ? playlistsAll = userRecommendations : playlistsAll = rbPlaylists}

const mappedPlaylistsDesktop = playlistsAll.map((playlist) => { 
    return (    
    <Col xs={3}>
    <div className={classes.playlistContainer}>
    <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
      <button className={classes.btn} id={playlist.id}>
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
      <Link to={props.userID ? `/PlayPage/${playlist.id}` : "/"} >
            <button className={classes.btn} id={playlist.id}>
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
    <SortByDropdown handleSortByUpdate={handleSortByUpdate} setSortBy={setSortBy}></SortByDropdown>
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