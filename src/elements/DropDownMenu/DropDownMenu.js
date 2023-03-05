import React from 'react'
import classes from "./DropDownMenu.module.css"
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import { X, CaretDown, CaretUp } from 'phosphor-react'
import logo from '../../photos/logoFinal.png'

const DropDownMenu = (props) => {

    const CategoriesSliderClosed = () => { 
        return ( 
            <div className={classes.listItemFlex}><li className={classes.listItem}>Quiz Categories</li>&nbsp;<CaretDown size={30} className={classes.iconCaret}></CaretDown></div>
        )
    }

    const CategoriesSliderOpened = () => { 
        return ( 
            <div className={classes.listItemFlex}><li className={classes.listItem}>Quiz Categories</li>&nbsp;<CaretUp size={30} className={classes.iconCaret}></CaretUp></div>
        )
    }
  return (
    <div className={`${classes.menuContainer} ${props.menuIsOpen ? classes.active : ''}`}>
        <X size={30} className={classes.iconClose} onClick={props.handleMenu}></X>
        <ul className={classes.list}>
           <Link to="/HowToPlay"><li className={classes.listItem} onClick={props.handleMenu}>How to Play</li></Link>
           <Link to="/SearchPage"><li className={classes.listItem} onClick={props.handleMenu}>Search by Artist</li></Link>
            <Collapsible contentInnerClassName={classes.customContent} trigger={<CategoriesSliderClosed></CategoriesSliderClosed>} triggerWhenOpen={<CategoriesSliderOpened></CategoriesSliderOpened>} className={classes.listItem}>
               <Link to="/ViewAllPage"><li className={classes.customContent} onClick={props.handleViewAllGenre} id="Rap">Hip Hop Quizzes</li></Link> 
               <Link to="/ViewAllPage"><li className={classes.customContent} onClick={props.handleViewAllGenre} id="Pop">Pop Quizzes</li></Link> 
               <Link to="/ViewAllPage"><li className={classes.customContent} onClick={props.handleViewAllGenre} id="Rock">Rock Quizzes</li></Link> 
            </Collapsible>
            
        </ul>
        <img src={logo} className={classes.logo} alt="logo"></img>
    </div>
  )
}

export default DropDownMenu