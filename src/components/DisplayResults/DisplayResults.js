import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import classes from "./DisplayResults.module.css"
import { TwitterShareButton, FacebookMessengerShareButton, FacebookShareButton} from 'react-share';
import { Link } from 'react-router-dom'

export const DisplayResults = (props) => {

  //Facebook App ID 
  const appID = "944392260236824";
  // URL 
  const link = "https://sweet-kitten-2dc72c.netlify.app"
  //Twitter Message 
  var message = `I just got a score of ${props.userScore} on the "${props.thisIsName}" Spotify quiz! Can you beat me? Take the quiz here:`

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
            <div className={classes.titleContainer}><div className={classes.title}>Quick Stats</div></div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className={classes.swiper}
            >
              <SwiperSlide>
                
                <div className={classes.statsContainer}>
                    <div className={classes.statLine}> <span className={classes.span}>Score:</span>  {props.userScore}</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.statsContainer}>
                    <div className={classes.statLine}> <span className={classes.span}>Missed Questions:</span>  {10 - props.correctTally}</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.statsContainer}>
                    <div className={classes.statLine}> <span className={classes.span}>Time Per Question:</span>  {props.averageAnswerTime.length ? `${roundedAVG} seconds` : "10 seconds"} </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.socialRowContainer}>
                  <button className={classes.iconContainer}>
                    <TwitterShareButton title={message} url="https://sweet-kitten-2dc72c.netlify.app">
                      <i class="fa fa-twitter"></i>
                    </TwitterShareButton>
                  </button>
                  <button className={classes.iconContainer}>
                    <FacebookShareButton url="https://sweet-kitten-2dc72c.netlify.app">
                      <i class="fa fa-facebook"></i>
                    </FacebookShareButton>
                  </button>
                  <button className={classes.iconContainer}>
                    <FacebookMessengerShareButton appId={appID} redirectUri={link}>
                      <i class='fab fa-facebook-messenger'></i>
                    </FacebookMessengerShareButton>
                  </button>
                  <button className={classes.iconContainer}>
                    <CopyToClipboard text={link}>
                      <i class="fa fa-share-alt"></i>
                    </CopyToClipboard>
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
                
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
