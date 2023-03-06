import React from 'react'
import { useState } from 'react';
import classes from "./SortByDropdown.module.css"
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const SortByDropdown = (props) => {
  return (
    <Menu menuClassName={classes.myMenu} menuButton={<MenuButton className={classes.menuBtn}>Sort By</MenuButton>} transition>
  <MenuItem className={classes.menuItem} onClick={() => props.handleSortByUpdate("popularity")}>
                      Popularity
                    </MenuItem>
  <MenuItem className={classes.menuItem}  onClick={() => props.handleSortByUpdate("Alphabetical")}>
                      Alphabetical
                    </MenuItem>
</Menu> 
  )
}

export default SortByDropdown