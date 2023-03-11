import React from 'react'
import classes from "./LinkCopiedPopUp.module.css"

const LinkCopiedPopUp = (props) => {
  return (
    <div className={classes.container}>{props.text}</div>
  )
}

export default LinkCopiedPopUp