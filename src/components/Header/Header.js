import React from 'react'
import { Navbar, Button } from "react-bootstrap";
import classes from "./Header.module.css"

const Header = () => {
  return (
    
        <div className={classes.siteTitle}>
          <span className={classes.greenText}>Rap</span> Quiz
        </div>
    
  )
}

export default Header