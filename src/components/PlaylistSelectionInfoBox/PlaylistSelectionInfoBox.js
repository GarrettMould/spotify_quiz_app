import React from 'react'
import classes from "./PlaylistSelectionInfoBox.module.css"

const PlaylistSelectionInfoBox = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.categoryHeadline}>Hip-Hop & Rap</div>
        <div className={classes.mainHeadline}>Hip-Hop's Biggest Hitmakers</div>
        <div className={classes.description}>Test your knowledge of your favorite artists in the world of hip-hop. Are you truly the stan that you think you are?</div>
        <button className={classes.btn}>Browse All</button>
      </div>
    </div>
  )
}

export default PlaylistSelectionInfoBox