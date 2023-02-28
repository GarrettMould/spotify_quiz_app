import React from 'react'
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from "./DisplayResults.module.css"
import Modal from 'react-modal';
import share from "../../photos/share.png"
import { TwitterLogo, FacebookLogo, Copy } from 'phosphor-react';
import { TwitterShareButton, FacebookMessengerShareButton, FacebookShareButton} from 'react-share';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const DisplayResults = (props) => {


  const sum = props.averageAnswerTime.reduce((partialSum, a) => partialSum + a, 0);
  const avg = (sum / props.averageAnswerTime.length)
  var roundedAVG = avg.toFixed(2)

  //Get artist name from the playlist title name
  var artistName = props.thisIsName.split(' ').slice(2).join(' ');

  return (
    <>
    <div className={classes.wrapper}>
      <div className={classes.quizPanelWrapper}>
        <div className={classes.quizSectionContainer}>
          <div className={classes.quizInfoContainer}>
            <img src={props.thisIsImage} alt="playlist" className={classes.thisIsImage}></img>
            <div className={classes.infoTextContainer}>
              <div className={classes.thisIsName}>{props.thisIsName}</div>
            </div>
          </div>
          <div className={classes.rowResults}>
                <div className={classes.percentageDisplayContainer}>
                <div className={classes.contentWrapper}>
                    <div className={classes.percentageContainer}>
                        <div className={classes.percentage}>{props.scoreCompPerc}%</div>
                    </div>
                    <div className={classes.noteAndIconsContainer}>
                        <div className={classes.noteContainer}>
                            <div className={classes.note}>Nicely done! You are in the top {props.scoreCompPerc} percent of {artistName} fans.</div>
                        </div>
                    </div>
                    </div>
                </div>
                
        <div className={classes.statsDisplayContainer}>
        <div className={classes.titleContainer}><div className={classes.title}>Quick Stats </div></div>
          <div className={classes.statsContainer}>
            <div className={classes.statLine}><span>Score:</span>  {props.userScore}</div>
            <div className={classes.statLine}><span>Missed Questions:</span>  {10 - props.correctTally}</div>
            <div className={classes.statLine}><span>Time Per Question:</span>  {props.averageAnswerTime.length ? `${roundedAVG} seconds` : "10 seconds"} </div>
          </div>
          
        
          {/*<div className={classes.thirdRow}>
          <div className={classes.titleContainer}><div className={classes.title}>Social Share</div></div>
            <div className={classes.socialMessage}>Challenge your friends to beat your top score</div>
                <div className={classes.socialRowContainer}>
                  
                    <TwitterShareButton title={message} url="https://sweet-kitten-2dc72c.netlify.app">
                      <i class="fa fa-twitter icon fa-lg"></i>
                    </TwitterShareButton>

                    <FacebookShareButton  className={classes.iconContainer}url="https://sweet-kitten-2dc72c.netlify.app">
                      <i class="fa fa-facebook icon fa-lg"></i>
                    </FacebookShareButton>

                    <FacebookMessengerShareButton appId={appID} redirectUri={link}>
                      <i class='fab fa-facebook-messenger icon fa-lg'></i>
                    </FacebookMessengerShareButton>
                    <CopyToClipboard text={link}>
                      <i class="fa fa-copy fa-lg"></i>
                    </CopyToClipboard>
                  
                </div>
          </div>*/}
          
        
                
        </div>
          </div>
          
         <div className={classes.rowButtons}>
           <Link style={{ width: "100%"}} to="/"><button onClick={props.resetQuiz} className={classes.btn}>Close</button></Link>
          </div>
          
        </div>
      </div>
    </div>
    </>
    
  )
}
