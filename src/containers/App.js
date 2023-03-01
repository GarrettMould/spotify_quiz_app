import { Routes, Route} from "react-router-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Swiper CSS
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import Header from "../components/Header/Header";
import { Spacer } from "../elements/Spacer/Spacer";
import Footer from "../components/Footer/Footer";
import LoginPromptPopUp from "../components/LoginPromptPopUp/LoginPromptPopUp";
import HomePage from "../MainPages/HomePage/HomePage";
import PlayPage from "../MainPages/PlayPage/PlayPage";
import PlaylistsViewAllPage from "../MainPages/PlaylistsViewAllPage/PlaylistsViewAllPage";
import HowToPlayPage from "../components/HowToPlayPage/HowToPlayPage";
import SearchPage from "../MainPages/SearchPage/SearchPage";
import DropDownMenu from "../elements/DropDownMenu/DropDownMenu";



const App = (props) => {
  // Device Width 
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  //SPOTIFY VARIABLES
  const CLIENT_ID = "8d204535e05d414ba64e3d520690e6a7";
  //const REDIRECT_URI = "http://localhost:3000/";
  const REDIRECT_URI = "https://sweet-kitten-2dc72c.netlify.app/";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SPACE_DELIMITER = "%20";
  const SCOPES = [
    "user-top-read",
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-modify-private",


  ];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
  const [token, setToken] = useState("");
  // User ID
  const [userID, setUserID] = useState(false);
  // Boolean - true if a artist has been selected 
  const [topSongs, setTopSongs] = useState(null);
  // Boolean - true if a playlist has been selected
  const [gotThisIs, setGotThisIs] = useState(false); 
  // Array of all the songs from the selected This Is playlist
  const [thisIsFullSongList, setThisIsFullSongList] = useState(null)
  // Name and IMG of the selected This Is playlist
  const [thisIsName, setThisIsName] = useState(null);
  const [thisIsImage, setThisIsImage] = useState(null);
  // Array of 10 songs from the selected This Is playlist
  const [selectedThisIsSongs, setSelectedThisIsSongs] = useState(null)
  // ID of the selected playlist or artist
  const [playlistID, setPlaylistID] = useState("37i9dQZF1DX5EkyRFIV92g");
  const [artistID, setArtistID] = useState("37i9dQZF1DX5EkyRFIV92g");
  // Keeps track of User's quiz score
  const [userScore, setUserScore] = useState(0);
  // Keeps track of quiz round 
  const [round, setRound] = useState(null); 
  // Login Modal Open or Close
  const [modalOpen, setModalOpen] = useState(false);
  // Search Page Open or Close 
  const [searchOpen, setSearchOpen] = useState(false);
  // True if the quiz is currently in round one
  const [roundOne, setRoundOne] = useState(false);
  // True when the user chooses a playlist and the start menu is displayed
  const [startMenu, setStartMenu] = useState(true)
  // Tally of the number of correct answers 
  const [correctTally, setCorrectTally] = useState(0);
  // Avg Answer Time Array 
  const [averageAnswerTime, setAverageAnswerTime] = useState([]);
  // Score Comparison Percentage 
  var [scoreCompPerc, setScoreCompPerc] = useState(0);
  // View All Playlist Type 
  const [viewAllGenre, setViewAllGenre] = useState(null);
  // Sliding Menu Open 
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  // Handle Menu Open 
  const handleMenu = () => { 
    setMenuIsOpen(!menuIsOpen);
  }

  // Determine the percentile based on userScore 
  if (userScore >= 750) { 
    scoreCompPerc = 98
  } else if (userScore >= 700 && userScore < 750) { 
    scoreCompPerc = 97
  } else if (userScore >= 650 && userScore < 700) { 
    scoreCompPerc = 90
  } else if (userScore >= 600 && userScore < 650) { 
    scoreCompPerc = 84
  } else if (userScore >= 550 && userScore < 600) { 
    scoreCompPerc = 79
  } else if (userScore >= 500 && userScore < 550) { 
    scoreCompPerc = 73
  } else if (userScore >= 450 && userScore < 500) { 
    scoreCompPerc = 62
  } else if (userScore >= 400 && userScore < 450) { 
    scoreCompPerc = 57
  } else if (userScore >= 350 && userScore < 400) { 
    scoreCompPerc = 48
  } else if (userScore >= 300 && userScore < 350) { 
    scoreCompPerc = 39
  } else if (userScore >= 250 && userScore < 300) { 
    scoreCompPerc = 31
  } else if (userScore >= 200 && userScore < 250) { 
    scoreCompPerc = 26
  } else if (userScore >= 150 && userScore < 200) { 
    scoreCompPerc = 17
  } else if (userScore >= 100 && userScore < 150) { 
    scoreCompPerc = 14
  } else if (userScore >= 50 && userScore < 100) { 
    scoreCompPerc = 11
  } else if (userScore >= 0 && userScore < 50) { 
    scoreCompPerc = 6
  } else { 
    scoreCompPerc = 0
  }


 
 
  //Set view all genre 
  const handleViewAllGenre = (e) => { 
    setViewAllGenre(e.currentTarget.id);
    setMenuIsOpen(!menuIsOpen);
    console.log(e.currentTarget.id)
  }
 
  // Reading device width and updating state on change
  useEffect(() => {
    handleWindowSizeChange();
  });

  const handleWindowSizeChange = () => {
    setDeviceWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWindowSizeChange);

  console.log(deviceWidth);

  // Variable that returns true if device width is less than 500 (use this for mobile styling)

  const isMobile = deviceWidth <= 500;

  console.log(isMobile);

// Function to shuffle an array (used in multiple components)

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Class for Individual Quiz Song -- Includes name, img, uri, and an array of 4 answer options
function SongThisIs(name, img, uri, answerOptions) {
  this.name = name;
  this.img = img; 
  this.uri = uri;
  this.answerOptions = answerOptions;
}

// Function to close the pop up modal 
const closeModal = () => { 
  setModalOpen(false);
}

// Function to reset the quiz variables
const resetQuiz = () => { 
  setViewAllGenre(null);
  setAverageAnswerTime([]); 
  setCorrectTally(0);
  setStartMenu(true)
  setGotThisIs(false); 
  setRound(0); 
  setUserScore(0);
}
// Function that returns boolean for correct / incorrect quiz response and updates userScore state
const handleAnswer = (value) => { 
    
  if (value === "blah") setUserScore(userScore + 100)
  console.log(value)
  console.log(userScore)

  setRound(round + 1);
  
}

// Function to update the playlist ID 
  const handlePlaylistChange = (e) => { 
    setStartMenu(true);
    if (userID) {
      if (e.currentTarget.id === playlistID) { 
        getPlaylistSongs(playlistID);
      }
      setPlaylistID(e.currentTarget.id); 
      
    resetQuiz();
    setRound(0);
    } else { 
      
      setModalOpen(true);
    }
  }

   // Function to change the source of the audio player
   const changeSrc = (url) => {
    console.log("changeSrc() called with url:", url);
    const audio = document.getElementById("audio");
    const source = document.getElementById("audioSrc");
  
    if (!source) {
      console.error("Audio source element not found");
      return;
    }
  
    source.src = url;
    audio.load();
    audio.play();
  };


// Funcion to get the User's ID and set the UserID variable (will be called using useEffect hook when the token changes)
  const getUserID = async () => {
    const { data } = await axios.get(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(data);

    setUserID(data.id);
  };

  // Calls the getUserID function when the token changes (new user)
  useEffect(() => {
    getUserID();
  }, [token]);

  
  // Fetches the token from the spotify url
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    console.log(token);
  });
  
  // Function to clear token and clear results display
  const logout = () => {
    setToken("");
    setUserID(false);
    window.localStorage.removeItem("token"); 
    setGotThisIs(false);
    resetQuiz(); 
  
  };


// Function to display the top songs of the chosen artist

useEffect((e) => { 
  getTopSongs(e);
}, [artistID]);

useEffect((e) => { 
  getPlaylistSongs(e);
}, [playlistID]);


  
// Function takes an artist ID and returns their top songs 
const getTopSongs = async () => {
    
    const {data} = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=VN`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        
    })

    setTopSongs(data.tracks);
   
}


// Function takes in a playlist ID, returns an array of objects for ten random songs from that playlist
const getPlaylistSongs = async () => {
    
  const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      headers: {
          Authorization: `Bearer ${token}`
      },
      
  })

  console.log(data);

  getPlaylistInfo();
  setGotThisIs(true);

  // Shuffles the This Is playlist songs
  const shuffled = data.items.sort(() => 0.5 - Math.random());
  // Removes songs from the array if they do not have a preview uri
  const noURIRemoved = shuffled.filter(function( obj ) {
    return obj.track.preview_url;
  });

  // Selects ten songs from the array of playlist songs 
  let selected = noURIRemoved.slice(0, 10);
  console.log(selected);
  var selectedSongs = [];
  var items = data.items 

  let allSongs = []; 
  
  // Fill allSongs array with all the songs from "This Is" playlist
  items.forEach((item) => { 
    var i = new SongThisIs(item.track.name, item.track.album.images[0], item.track.preview_url)
    allSongs.push(i);
  });

  console.log(allSongs);

  setThisIsFullSongList(allSongs);

  // For each item in the selected array, creates an array of three random songs and the correct song, adds them to the SongThisIs object
  selected.forEach((item) => { 
    
    let shuffled = allSongs.sort(() => 0.5 - Math.random());
    let songRemoved = shuffled.filter(function( obj ) {
      return obj.name !== item.track.name;
    });

    let select = songRemoved.slice(0,3);
    console.log(select)
    
    var iSong = new SongThisIs(item.track.name, item.track.album.images[0], item.track.preview_url)
    select.push(iSong);
  
    var selectShuffled = select.sort(() => 0.5 - Math.random());
    var i = new SongThisIs(item.track.name, item.track.album.images[0], item.track.preview_url, selectShuffled)
    selectedSongs.push(i);
    
   
  }) 

  console.log(selectedSongs)
  setSelectedThisIsSongs(selectedSongs);


}



// Function that sets the playlist information (thisIsName and thisIsImage) for the selected playlist
const getPlaylistInfo = async () => { 

  const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}`, {
      headers: {
          Authorization: `Bearer ${token}`
      },
      
  })
  
  setThisIsName(data.name); 
  setThisIsImage(data.images[0].url)
}

  return (
    <>
     {modalOpen ? <LoginPromptPopUp 
                closeModal={closeModal}
                logout={logout}
                AUTH_ENDPOINT={AUTH_ENDPOINT}
                CLIENT_ID={CLIENT_ID}
                REDIRECT_URI={REDIRECT_URI}
                RESPONSE_TYPE={RESPONSE_TYPE}
                SCOPES_URL_PARAM={SCOPES_URL_PARAM}
              ></LoginPromptPopUp> : null}
    <div className={searchOpen ? `${classes.noWrapper}` : modalOpen ?  `${classes.wrapper} ${classes.blur}` : `${classes.wrapper}`}>
      
      {menuIsOpen && (
          <DropDownMenu handleViewAllGenre={handleViewAllGenre} menuIsOpen={menuIsOpen} handleMenu={handleMenu}></DropDownMenu>
      )}
      <Header
              menuIsOpen={menuIsOpen}
              handleMenu={handleMenu} 
              isMobile={isMobile}
              resetQuiz={resetQuiz}
              userID={userID}
              logout={logout}
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              CLIENT_ID={CLIENT_ID}
              REDIRECT_URI={REDIRECT_URI}
              RESPONSE_TYPE={RESPONSE_TYPE}
              SCOPES_URL_PARAM={SCOPES_URL_PARAM}>
      </Header>
            
            <Spacer></Spacer>
            
            
         
      <Routes>
            <>
            <Route path="/" element={<HomePage isMobile={isMobile} resetQuiz={resetQuiz} userID={userID} logout={logout} AUTH_ENDPOINT={AUTH_ENDPOINT} CLIENT_ID={CLIENT_ID} REDIRECT_URI={REDIRECT_URI} RESPONSE_TYPE={RESPONSE_TYPE} SCOPES_URL_PARAM={SCOPES_URL_PARAM} shuffle={shuffle} handleViewAllGenre={handleViewAllGenre} viewAllGenre={viewAllGenre}  handlePlaylistChange={handlePlaylistChange}></HomePage>}></Route>   
            <Route path="/SearchPage" element={<SearchPage isMobile={isMobile} userID={userID} handlePlaylistChange={handlePlaylistChange}></SearchPage>}></Route>       
            <Route path="/HowToPlay" element={<HowToPlayPage isMobile={isMobile} shuffle={shuffle}></HowToPlayPage>}></Route>
             <Route path="/ViewAllPage" element={<PlaylistsViewAllPage shuffle={shuffle} handlePlaylistChange={handlePlaylistChange} userID={userID} isMobile={isMobile} resetQuiz={resetQuiz} viewAllGenre={viewAllGenre}></PlaylistsViewAllPage>}></Route>
             <Route path="/PlayPage" element={<PlayPage changeSrc={changeSrc} scoreCompPerc={scoreCompPerc} averageAnswerTime={averageAnswerTime} setAverageAnswerTime={setAverageAnswerTime}  gotThisIs={gotThisIs} round={round} correctTally={correctTally} setCorrectTally={setCorrectTally} setUserScore={setUserScore} setRound={setRound} setStartMenu={setStartMenu} startMenu={startMenu} roundOne={roundOne} selectedThisIsSongs={selectedThisIsSongs}  userScore={userScore} thisIsImage={thisIsImage} thisIsName={thisIsName} handleAnswer={handleAnswer}  ></PlayPage>}></Route> 
            </>     
        </Routes>
        <Spacer></Spacer>
        <Footer isMobile={isMobile}></Footer> 
    </div>
    </>
    
  );
};

export default App;
