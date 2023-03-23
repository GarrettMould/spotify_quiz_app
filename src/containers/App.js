import { Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Swiper CSS
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";
import SpotifyWebApi from 'spotify-web-api-js';
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
import { StartPageBackdrop } from "../elements/MainPageBackdrop/StartPageBackdrop";
import ShareLinkStartMenu from "../elements/ShareLinkStartMenu/ShareLinkStartMenu";



const App = (props) => {
  // Device Width 
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  //SPOTIFY VARIABLES
  const CLIENT_ID = "8d204535e05d414ba64e3d520690e6a7";
  const REDIRECT_URI = "http://localhost:3000/";
  //const REDIRECT_URI = "https://sweet-kitten-2dc72c.netlify.app/";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SPACE_DELIMITER = "%20";
  const SCOPES = [
    "user-top-read",
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-private"


  ];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
  const [token, setToken] = useState("");
  // User ID
  const [userID, setUserID] = useState(false);
  // Boolean - true if a artist has been selected 
  const [userDisplayName, setUserDisplayName] = useState("")
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
  /// Updated Playlists 
  const [rapPlaylists, setRapPlaylists] = useState([]);
  const [popPlaylists, setPopPlaylists] = useState([]);
  const [rockPlaylists, setRockPlaylists] = useState([]);
  const [rbPlaylists, setRbPlaylists] = useState([]);
  const [userShareablePlaylists, setUserShareablePlaylists] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([])
  const [userRecommendations, setUserRecommendations] = useState([]);
  //Display Name to be Used in Personalized Quizzes (like "On Repeat")
  const [userQuizName, setUserQuizName] = useState(null);

// useEffect hook to ... idk (DELETED ON MARCH 14th ... seems to have no impact ... quizzes still rendering without it)
  {/*useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const playlistId = searchParams.get('playlistId');
    console.log(playlistID)
    if (playlistId) {
      
      getPlaylistSongs(playlistID);
      setPlaylistID(playlistID); 
      
    resetQuiz();
    setRound(0);
      
    }
  }, []);
*/}

  // Handle Menu Open 
  const handleMenu = () => { 
    setMenuIsOpen(!menuIsOpen);
  }

  console.log(userID)

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

// Function to open to log in modal
const handleModalOpen = () => { 
  setModalOpen(true)
}

{/*const getUserTopArtists = () => { 

  const API_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists';

  const config = {
    headers: { 'Authorization': `Bearer ${token}` },
    params: { 
      'time_range': 'short_term', // Can be short_term, medium_term or long_term
      'limit': 20 // Max is 50
    }
  };
  
  axios.get(API_ENDPOINT, config)
    .then(response => {
      const topArtists = response.data.items;
      const userTopArtists = topArtists.map(artist => artist.name);
      setUserTopArtists(userTopArtists);

      // Call createUserRecommendations here, after userTopArtists has been updated
      createUserRecommendations();
    })
    .catch(error => console.error('Failed to fetch top artists:', error));
}

const createUserRecommendations = () => { 
  const matchingArtists = [];
  const allPlaylists = [...new Set([...rapPlaylists, ...popPlaylists, ...rockPlaylists, ...rbPlaylists])];


  allPlaylists.forEach(playlist => {
    if (userTopArtists.includes(playlist.artist)) {
      matchingArtists.push(playlist);
    }
  });

  setUserRecommendations(matchingArtists);
}
*/}



// Spotify API call to get the user's custom  playlists (include only Spotify made playlists)
const getUserPlaylists = async () => { 
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();

    console.log(data)

    const playlists = data.items
   
    playlists.forEach(playlist => { 
      // if-statement to include only the playlists authored by Spotify
      {/*if (playlist.owner.display_name === "Spotify") {
      
        const playlistName = `${userDisplayName}'s ${playlist.name}`
  
    const newPlaylist = {
      artist: playlist.name,
      playlistName: playlistName,
      img: playlist.images[0].url,
      id: playlist.id,
      // Removes the </a> tag bug from Spotify playlist descriptions
      description: playlist.description.includes("</a>") ? "A Spotify playlist catered to your listening needs." : playlist.description,
      tags: ["user"]
    };
  
    setUserPlaylists(prevState => [...prevState, newPlaylist])
    }*/}

    //if-statement to include "on-repeat" and "wrapped" playlists in userShareable array
    if (playlist.owner.display_name === "Spotify" && (playlist.name === "On Repeat" || playlist.name.includes("Your Top Songs"))) {
      const newPlaylist = {
        artist: playlist.name,
        playlistName: playlist.name,
        img: playlist.images[0].url,
        id: playlist.id,
        // Removes the </a> tag bug from Spotify playlist descriptions
        description: playlist.description.includes("</a>") ? "A Spotify playlist catered to your listening needs." : playlist.description,
        tags: ["user"]
      };
      setUserShareablePlaylists(prevState => [...prevState, newPlaylist])
    }
      
  })

};



 
  //Set view all genre 
  const handleViewAllGenre = (e) => { 
    if (userID) {
      const genre = e.currentTarget.id;
      setViewAllGenre(genre);
      // Store the value of viewAllGenre in local storage
      localStorage.setItem('viewAllGenre', genre);
    setMenuIsOpen(false);
    console.log(e.currentTarget.id)
    } else { 
      setModalOpen(true);
    }
    
  }

  const getViewAllGenre = () => { 
    const storedViewAllGenre = localStorage.getItem('viewAllGenre');
    if (storedViewAllGenre) {
      setViewAllGenre(storedViewAllGenre);
    }
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



console.log(playlistID);

//NEW FUNCTION FOR PLAYLIST CHANGE
const handleQuizCreation = async (id) => { 
  console.log("handle quiz creation function executed")
  await getPlaylistSongs(id); 
  setPlaylistID(id);
  console.log(playlistID)
  resetQuiz(); 
  setRound(0);
 
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
    setUserDisplayName(data.display_name);
    console.log(data.display_name);
    setUserID(data.id);
  };

  // Calls the getUserID function when the token changes (new user)
  useEffect(() => {
    getUserID();
  }, [token]);

  

  const updateToken = () => { 
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
  }
  // Fetches the token from the spotify url
  useEffect(() => {
    updateToken();
  });
  
  const clearPlaylists = () => { 
    setRapPlaylists([])
    setPopPlaylists([])
    setRockPlaylists([])
    setRbPlaylists([])
    setUserShareablePlaylists([])
    setUserRecommendations([])
  }

  // Function to clear token and clear results display
  const logout = () => {
    clearPlaylists();
    setToken("");
    setUserID(false);
    window.localStorage.removeItem("token"); 
    setGotThisIs(false);
    resetQuiz(); 
    sessionStorage.removeItem("state");
  
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

  
  setGotThisIs(true);

  // Shuffles the This Is playlist songs
  const shuffled = data.items.sort(() => 0.5 - Math.random());
  // Removes songs from the array if they do not have a preview uri
  const noURIRemoved = shuffled.filter(function( obj ) {
    return obj.track.preview_url;
  });

  // Selects ten songs from the array of playlist songs 
  let selected = noURIRemoved.slice(0, 10);
  
  var selectedSongs = [];
  var items = data.items 

  let allSongs = []; 
  
  // Fill allSongs array with all the songs from "This Is" playlist
  items.forEach((item) => { 
    var i = new SongThisIs(item.track.name, item.track.album.images[0], item.track.preview_url)
    allSongs.push(i);
  });

 

  setThisIsFullSongList(allSongs);

  // For each item in the selected array, creates an array of three random songs and the correct song, adds them to the SongThisIs object
  selected.forEach((item) => { 
    
    let shuffled = allSongs.sort(() => 0.5 - Math.random());
    let songRemoved = shuffled.filter(function( obj ) {
      return obj.name !== item.track.name;
    });

    let select = songRemoved.slice(0,3);
    
    
    var iSong = new SongThisIs(item.track.name, item.track.album.images[0], item.track.preview_url)
    select.push(iSong);
  
    var selectShuffled = select.sort(() => 0.5 - Math.random());
    var i = new SongThisIs(item.track.name, item.track.album.images[0], item.track.preview_url, selectShuffled)
    selectedSongs.push(i);
    
   
  }) 

  
  setSelectedThisIsSongs(selectedSongs);
  getPlaylistInfo();


}



// Rap Playlist IDs 
var rapPlaylistIDs = [ 
  "37i9dQZF1DX7QOv5kjbU68", "37i9dQZF1DX8IzjtXj8ThV", "37i9dQZF1DZ06evO3nMr04", "37i9dQZF1DZ06evO2Kixmg",
   "37i9dQZF1DZ06evO0Wc5ry", "37i9dQZF1DX1clOuib1KtQ", "37i9dQZF1DZ06evO3CRVnO", "37i9dQZF1DZ06evO1nxlXq", 
  "37i9dQZF1DX5EkyRFIV92g","37i9dQZF1DWUgX5cUT0GbU", "37i9dQZF1DZ06evO1aBeik", "37i9dQZF1DZ06evO06Ki7m",
  "37i9dQZF1DZ06evO0X1exy", "37i9dQZF1DZ06evO1ZgD0Q", "37i9dQZF1DZ06evO2ckaZO",  
  "37i9dQZF1DZ06evO1iznkj", "37i9dQZF1DX4sqNyKH13qY", "37i9dQZF1DZ06evO0sOBtS", "37i9dQZF1DZ06evO455DFR", 
  "37i9dQZF1DXbyJ08AYfIHF", "37i9dQZF1DX7jGZjyDa8rI",   "37i9dQZF1DZ06evO3DtS8g", "37i9dQZF1DX3F3EumJCPca", 
  "37i9dQZF1DWYojpWKpDMGi", "37i9dQZF1DZ06evO28Vxx6","37i9dQZF1DZ06evNZWDBEQ", "37i9dQZF1DZ06evO1JAInW", "37i9dQZF1DWUuiucxQQIC1", 
  "37i9dQZF1DZ06evO01740o",   "37i9dQZF1DZ06evO3Cn7Uc", "37i9dQZF1DZ06evO2NufN6", "37i9dQZF1DZ06evO259NXG",
  "37i9dQZF1DXcJ3YhsMrHLi", "37i9dQZF1DZ06evO3IjBrq", "37i9dQZF1DX2EykupcJRsV", "37i9dQZF1DZ06evO1Mfhq8", 
]

var rbPlaylistIDs = ["37i9dQZF1DZ06evO28Vxx6", "37i9dQZF1DZ06evO216tjq", "37i9dQZF1DXdyjMX5o2vCq", "37i9dQZF1DZ06evO4fRiko",  
"37i9dQZF1DX6bnzK9KPvrz", "37i9dQZF1DX2oU49YwtXI2", "37i9dQZF1DZ06evO2u61Y4", "37i9dQZF1DZ06evO2LMnXG", 
"37i9dQZF1DZ06evO241prq", "37i9dQZF1DZ06evO4aKvZe", "37i9dQZF1DZ06evO1yvnUc", "37i9dQZF1DZ06evO1N3Bn2", "37i9dQZF1DZ06evO2fgLDY", "37i9dQZF1DZ06evO1erDHi"];

var popPlaylistIDs = ["37i9dQZF1DZ06evO3by276", "37i9dQZF1DX08mhnhv6g9b", "37i9dQZF1DX1PfYnYcpw8w", "37i9dQZF1DX55yuR78Invt", "37i9dQZF1DX6bnzK9KPvrz", "37i9dQZF1DX3fRquEp6m8D",
"37i9dQZF1DZ06evO2FvyO4", "37i9dQZF1DX2apWzyECwyZ","37i9dQZF1DWZUozJiHy44Y", "37i9dQZF1DXc2aPBXGmXrt", "37i9dQZF1DWZ8Cy8eCcjXW", "37i9dQZF1DXdyjMX5o2vCq", 
"37i9dQZF1DZ06evO2iBPiw", "37i9dQZF1DZ06evO25rXbO", "37i9dQZF1DX9tzt7g58Xlh","37i9dQZF1DXa0PTjSQ7AeJ", "37i9dQZF1DZ06evO30zJ7i", "37i9dQZF1DX29brXfjEm5q", "37i9dQZF1DZ06evO3YTug0", "37i9dQZF1DZ06evO0jO79m", ]; 

var rockPlaylistIDs = [ "37i9dQZF1DZ06evO04caZO", "37i9dQZF1DZ06evO1chrPy", "37i9dQZF1DZ06evO0XObfi",
 "37i9dQZF1DZ06evO0nT692","37i9dQZF1DZ06evO1VmDYs", "37i9dQZF1DZ06evO0Q8JGw","37i9dQZF1DZ06evO3M0Fbi",
  "37i9dQZF1DZ06evO19s0CZ", "37i9dQZF1DZ06evO0ENBD2", "37i9dQZF1DZ06evO2VxlyE", "37i9dQZF1DZ06evO00KN2M", 
  "37i9dQZF1DZ06evO0auErC", "37i9dQZF1DZ06evO2JuLM4", "37i9dQZF1DZ06evO1S7maQ", "37i9dQZF1DZ06evO25rXbO", 
  "37i9dQZF1DZ06evO3n0Aus", "37i9dQZF1DZ06evO0skD9m", "37i9dQZF1DZ06evO30gtH2", "37i9dQZF1DZ06evO2XVhS0",
   "37i9dQZF1DZ06evO1VFliE", "37i9dQZF1DZ06evO4m87u0", "37i9dQZF1DZ06evO0AQB3i"];


// Function to Create new Playlist Object based on an array of playlistIDs
const gatherPlaylistInfo = async (playlistID, tag) => { 
  const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}`, {
      headers: {
          Authorization: `Bearer ${token}`
      },


  })

  const playlistName = data.name
  const artistName = playlistName.substring(8);

  const newPlaylist = {
    artist: artistName,
    playlistName: data.name,
    followers: data.followers.total,
    img: data.images[0].url,
    id: data.id,
    //Some Spotify playlists have a bug that includes "</a>" in the description. This removes that.
    description: data.description.includes("</a>") ? "The essential tracks, all in one place." : data.description,
    tags: [tag]
  };

  if (tag === "rap") { 
    setRapPlaylists(prevState => [...prevState, newPlaylist])
  } else if (tag === "pop") { 
    setPopPlaylists(prevState => [...prevState, newPlaylist])
  } else if (tag === "rock") { 
    setRockPlaylists(prevState => [...prevState, newPlaylist])
  } else if (tag === "rb") { 
    setRbPlaylists(prevState => [...prevState, newPlaylist])
  } else {
    console.log("Oops. You are missing a tag and these playlist won't be rendered!")
  }

}


const createPlaylists = () => { 
  rapPlaylistIDs.map((playlist) => {
    return gatherPlaylistInfo(playlist, "rap");
  }); 
  popPlaylistIDs.map((playlist) => { 
    return gatherPlaylistInfo(playlist, "pop");
  })
  rockPlaylistIDs.map((playlist) => { 
    return gatherPlaylistInfo(playlist, "rock")
  })
  rbPlaylistIDs.map((playlist) => { 
    return gatherPlaylistInfo(playlist, "rb")
  })
}

// ONLY USING TO USEEFFCT TO AVOID THE 429 ERROR (FIGURE THIS PROBLEM OUT!)
useEffect(() => {
  createPlaylists();
  getUserPlaylists();
  
  
}, [token]);



// Function that sets the playlist information (thisIsName and thisIsImage) for the selected playlist
const getPlaylistInfo = async () => { 

  const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}`, {
      headers: {
          Authorization: `Bearer ${token}`
      },
      
  })
  
  setThisIsName(data.name); 
  setThisIsImage(data.images[0].url)
  console.log(thisIsName)
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
            <Route path="/" element={<HomePage  getPlaylistInfo={getPlaylistInfo} userDisplayName={userDisplayName} handleModalOpen={handleModalOpen} userShareablePlaylists={userShareablePlaylists} token={token} userRecommendations={userRecommendations} rockPlaylists={rockPlaylists} popPlaylists={popPlaylists} rapPlaylists={rapPlaylists} isMobile={isMobile} resetQuiz={resetQuiz} userID={userID} logout={logout} AUTH_ENDPOINT={AUTH_ENDPOINT} CLIENT_ID={CLIENT_ID} REDIRECT_URI={REDIRECT_URI} RESPONSE_TYPE={RESPONSE_TYPE} SCOPES_URL_PARAM={SCOPES_URL_PARAM} shuffle={shuffle} handleViewAllGenre={handleViewAllGenre} viewAllGenre={viewAllGenre}  handlePlaylistChange={handlePlaylistChange}></HomePage>}></Route>   
            <Route path="/SearchPage" element={<SearchPage rbPlaylists={rbPlaylists} rockPlaylists={rockPlaylists} rapPlaylists={rapPlaylists} popPlaylists={popPlaylists} isMobile={isMobile} userID={userID} handlePlaylistChange={handlePlaylistChange}></SearchPage>}></Route>       
            <Route path="/HowToPlay" element={<HowToPlayPage isMobile={isMobile} shuffle={shuffle}></HowToPlayPage>}></Route>
             <Route path="/ViewAllPage" element={<PlaylistsViewAllPage getViewAllGenre={getViewAllGenre} userRecommendations={userRecommendations} rbPlaylists={rbPlaylists} popPlaylists={popPlaylists} rockPlaylists={rockPlaylists} rapPlaylists={rapPlaylists} shuffle={shuffle} handlePlaylistChange={handlePlaylistChange} userID={userID} isMobile={isMobile} resetQuiz={resetQuiz} viewAllGenre={viewAllGenre}></PlaylistsViewAllPage>}></Route>
             <Route path="/PlayPage/:playlistID?" element={<PlayPage userQuizName={userQuizName} setUserQuizName={setUserQuizName} userDisplayName={userDisplayName} setPlaylistID={setPlaylistID} updateToken={updateToken} logout={logout} getUserID={getUserID} token={token} userID={userID} AUTH_ENDPOINT={AUTH_ENDPOINT}
                CLIENT_ID={CLIENT_ID}
                RESPONSE_TYPE={RESPONSE_TYPE}
                SCOPES_URL_PARAM={SCOPES_URL_PARAM}
             getPlaylistInfo={getPlaylistInfo} handleQuizCreation={handleQuizCreation} changeSrc={changeSrc} scoreCompPerc={scoreCompPerc} averageAnswerTime={averageAnswerTime} setAverageAnswerTime={setAverageAnswerTime}  gotThisIs={gotThisIs} round={round} correctTally={correctTally} setCorrectTally={setCorrectTally} setUserScore={setUserScore} setRound={setRound} setStartMenu={setStartMenu} startMenu={startMenu} roundOne={roundOne} selectedThisIsSongs={selectedThisIsSongs}  userScore={userScore} thisIsImage={thisIsImage} thisIsName={thisIsName} handleAnswer={handleAnswer}  ></PlayPage>}></Route> 
            </>     
        </Routes>
        <Spacer></Spacer>
        <Footer isMobile={isMobile}></Footer> 
    </div>
    </>
    
  );
};

export default App;
