import React from 'react'
import PlaylistSelection from '../../components/PlaylistSelection/PlaylistSelection'
import PlaylistSelectionMobile from '../../components/PlaylistSelectionMobile/PlaylistSelectionMobile'
import StartPage from '../../components/StartPage/StartPage'

const HomePage = (props) => {
  return (
    <>
    <StartPage isMobile={props.isMobile}></StartPage>
    {props.isMobile ? <PlaylistSelectionMobile userID={props.userID} handlePlaylistChange={props.handlePlaylistChange}></PlaylistSelectionMobile> : <PlaylistSelection userID={props.userID} handlePlaylistChange={props.handlePlaylistChange}></PlaylistSelection>}
    </>
  )
}

export default HomePage