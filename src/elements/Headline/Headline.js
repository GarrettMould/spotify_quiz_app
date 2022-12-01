import React from 'react'
import classes from "./Headline.module.css"

const Headline = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.headline}>{props.text}</div>
    </div>
  )
}

export default Headline