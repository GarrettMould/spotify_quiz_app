import React from 'react'

const DisplayThisIs = (props) => {

    function Playlist(name, img, allSongs, selectedSongs) {
        this.name = name;
        this.img = img; 
        this.allSongs = allSongs; 
        this.selectedSongs = selectedSongs;
    }


  return (
    <>
    <div><img src={props.thisIsImage} alt="playlist"></img></div>
    <div>{props.thisIsName}</div>
    </>
  )
}

export default DisplayThisIs