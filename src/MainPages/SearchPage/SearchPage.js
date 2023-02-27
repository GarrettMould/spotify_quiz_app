import React from 'react'
import { useState } from 'react'
import classes from "./SearchPage.module.css"
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { X } from 'phosphor-react'
import { playlists } from '../../Playlists'
import SearchBarEl from '../../elements/SearchBarEl/SearchBarEl'
import { Spacer } from '../../elements/Spacer/Spacer'

const SearchPage = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchTerm) => {
      setSearchTerm(searchTerm);
    };
  
    const filteredList = playlists.filter((playlist) =>
      playlist.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const mappedPlaylists = filteredList.map((playlist) => { 
        return (    
        <Col xs={3}>
        <div className={classes.playlistContainer}>
          <Link to={props.userID ? "/PlayPage" : "/SearchPage"} >
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

    
      const mappedPlaylistsMobile = filteredList.map((playlist) => { 
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
        <div className={classes.wrapper}>
            <div className={classes.relative}>
            <div className={classes.searchPageTitle}>Search Library</div>
            <div className={classes.xIcon}><Link to="/"><X size={35}></X></Link></div>
            <SearchBarEl handleSearch={handleSearch}></SearchBarEl>
            <Spacer></Spacer>
            <div className={classes.allPlaylistsContainer}>
                <Container fluid={true}>
                    <Row>
                        {searchTerm === "" ? null : props.isMobile ? mappedPlaylistsMobile : mappedPlaylists}
                    </Row>
                </Container>
            </div>  
            </div>

        </div>

  )
}

export default SearchPage