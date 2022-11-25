import React from 'react'
import classes from "./SelectArtist.module.css"

export const SelectArtist = (props) => {
  return (
    <div className={classes.buttonsContainer}>
    <button onClick={props.handleArtistChange("46SHBwWsqBkxI7EeeBEQG7")}>Kodak Black</button>
    <button onClick={props.handleArtistChange("1URnnhqYAYcrqrcwql10ft")}>21 Savage</button>
    </div>
  )
}
