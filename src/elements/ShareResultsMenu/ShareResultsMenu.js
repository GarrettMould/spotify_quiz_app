import React from 'react'
import { useState } from 'react';
import classes from "./ShareResultsMenu.module.css"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TwitterShareButton, FacebookMessengerShareButton, FacebookShareButton} from 'react-share';
import { Share2 } from 'react-feather';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const ShareResultsMenu = (props) => {

    const [copied, setCopied] = useState(false);

    
    const link = "https://sweet-kitten-2dc72c.netlify.app";
    const message = `I just scored ${props.userScore} on Quizify's "${props.thisIsName}" quiz. Can you beat my score?` 
  return (
    <Menu menuClassName={classes.myMenu} menuButton={<MenuButton onClick={() => setCopied(false)} className={classes.menuBtn}><Share2 className={classes.shareIcon} size={20}/></MenuButton>} transition>
  <MenuItem className={classes.menuItem}><TwitterShareButton title={message} url="https://sweet-kitten-2dc72c.netlify.app">
                      Twitter
                    </TwitterShareButton></MenuItem>
  <MenuItem className={classes.menuItem}><FacebookShareButton quote={message} url="https://sweet-kitten-2dc72c.netlify.app">
                      Facebook
                    </FacebookShareButton></MenuItem>
  <MenuItem className={classes.menuItem} onClick={()=> setCopied(true)}><CopyToClipboard text={link}>
                      <div>{copied ? "Copied!" : "Copy to Clipboard"}</div>
                    </CopyToClipboard></MenuItem>
</Menu> 
  )
}

export default ShareResultsMenu