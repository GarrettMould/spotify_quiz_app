import React from 'react'
import classes from "./FullButton.module.css"

const FullButton = (props) => {
  return (
    <button className={classes.btn}>{props.text}</button>
  )
}

export default FullButton