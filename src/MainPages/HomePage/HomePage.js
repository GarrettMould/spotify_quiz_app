import React from 'react'
import PlaylistSelection from '../../components/PlaylistSelection/PlaylistSelection'
import PlaylistSelectionMobile from '../../components/PlaylistSelectionMobile/PlaylistSelectionMobile'
import StartPage from '../../components/StartPage/StartPage'
import { StartPageBackdrop } from '../../elements/MainPageBackdrop/StartPageBackdrop'

const HomePage = (props) => {
  return (
    <>
    <StartPage 
      isMobile={props.isMobile} 
      resetQuiz={props.resetQuiz}
      userID={props.userID}
      logout={props.logout}
      AUTH_ENDPOINT={props.AUTH_ENDPOINT}
      CLIENT_ID={props.CLIENT_ID}
      REDIRECT_URI={props.REDIRECT_URI}
      RESPONSE_TYPE={props.RESPONSE_TYPE}
      SCOPES_URL_PARAM={props.SCOPES_URL_PARAM}  
    ></StartPage>
    {/*{props.isMobile ? null : <StartPageBackdrop></StartPageBackdrop>}*/}
    {props.isMobile ? <PlaylistSelectionMobile userPlaylists={props.userPlaylists} rbPlaylists={props.rbPlaylists} rockPlaylists={props.rockPlaylists} popPlaylists={props.popPlaylists} rapPlaylists={props.rapPlaylists} shuffle={props.shuffle} handleViewAllGenre={props.handleViewAllGenre} userID={props.userID} handlePlaylistChange={props.handlePlaylistChange}></PlaylistSelectionMobile> : <PlaylistSelection userPlaylists={props.userPlaylists} rbPlaylists={props.rbPlaylists} rockPlaylists={props.rockPlaylists} popPlaylists={props.popPlaylists} rapPlaylists={props.rapPlaylists} shuffle={props.shuffle} handleViewAllGenre={props.handleViewAllGenre} userID={props.userID} handlePlaylistChange={props.handlePlaylistChange}></PlaylistSelection>}
    </>
  )
}

export default HomePage