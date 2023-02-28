import React from 'react'
import Modal from 'react-modal';
import { TwitterShareButton, FacebookMessengerShareButton, FacebookShareButton} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classes from "./SocialShareModal.module.css"

const SocialShareModal = (props) => {

    //Facebook App ID 
  const appID = "944392260236824";
  // URL 
  const link = "https://sweet-kitten-2dc72c.netlify.app"
  //Twitter Message 
  var message = `I just got a score of ${props.userScore} on the "${props.thisIsName}" Spotify quiz! Can you beat me? Take the quiz here:`

    

  return (
    <Modal isOpen={props.modalIsOpen} onRequestClose={props.handleCloseModal} >
        <div className={classes.background}>
        <div className={classes.socialRowContainer}>
                  
                  <TwitterShareButton title={message} url="https://sweet-kitten-2dc72c.netlify.app">
                    <i class="fa fa-twitter icon"></i>
                  </TwitterShareButton>

                  <FacebookShareButton  className={classes.iconContainer}url="https://sweet-kitten-2dc72c.netlify.app">
                    <i class="fa fa-facebook icon"></i>
                  </FacebookShareButton>

                  <FacebookMessengerShareButton appId={appID} redirectUri={link}>
                    <i class='fab fa-facebook-messenger icon'></i>
                  </FacebookMessengerShareButton>
                  <CopyToClipboard text={link}>
                    <i class="fa fa-copy"></i>
                  </CopyToClipboard>
                
              </div>
        </div>
      </Modal>
  )
}

export default SocialShareModal