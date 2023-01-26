import LoginPageDesktop from "../components/LoginPageDesktop/LoginPageDesktop";
import LoginPageMobile from "../components/LoginPageMobile/LoginPageMobile";


import Media from "react-media";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import Header from "../components/Header/Header";
import DisplaySongs from "../components/DisplaySongs/DisplaySongs";
import { Spacer } from "../elements/Spacer/Spacer";
import { SelectArtist } from "../components/SelectArtist/SelectArtist";
import DisplayThisIs from "../components/DisplayThisIs/DisplayThisIs";
import PlaylistSelection from "../components/PlaylistSelection/PlaylistSelection";
import DisplayQuizResults from "../components/DisplayQuizResults/DisplayQuizResults";
import PlaylistSelectionInfoBox from "../components/PlaylistSelectionInfoBox/PlaylistSelectionInfoBox";
import PlaylistSelectionMobile from "../components/PlaylistSelectionMobile/PlaylistSelectionMobile";
import { DisplayResults } from "../components/DisplayResults/DisplayResults";



const App = (props) => {
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


  ];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
  const [token, setToken] = useState("");
  // User ID
  const [userID, setUserID] = useState("");
  // Boolean - true if a artist has been selected
  const [gotSongs, setGotSongs] = useState(false); 
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
  const [round, setRound] = useState(0); 



// Class for Individual Quiz Song -- Includes name, img, uri, and an array of 4 answer options
function SongThisIs(name, img, uri, answerOptions) {
  this.name = name;
  this.img = img; 
  this.uri = uri;
  this.answerOptions = answerOptions;
}


const resetQuiz = () => { 
  setGotThisIs(false); 
  setRound(0); 
  setUserScore(0);
}
// Function that returns boolean for correct / incorrect quiz response and updates userScore state
const handleAnswer = (value) => { 

  const element = document.querySelectorAll(".countdownBar")
    
  if (value === "blah") setUserScore(userScore + 100)
  console.log(value)
  setRound(round + 1);
  console.log(userScore)
  element.remove();
}

const handleNoAnswer = () => { 
  setRound(round + 1);
}

// Function to update the artist ID 
  const handleArtistChange = (id) => { 
    setArtistID(id); 
  }

// Function to update the playlist ID 
  const handlePlaylistChange = (e) => { 
    setPlaylistID(e.currentTarget.id); 
    resetQuiz();
  }

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
    window.localStorage.removeItem("token");
    setGotSongs(false); 
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



// Function that sets playlistID to the user input value
const handleCustomPlaylistSubmit = () => { 
  var id = document.getElementById('input_id').value;
  setPlaylistID(id);
}
  
// Function takes an artist ID and returns their top songs 
const getTopSongs = async () => {
    
    const {data} = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=VN`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        
    })
    //setGotSongs(true);
    setTopSongs(data.tracks);
   
}


// Function takes in a playlist ID, returns an array of objects for ten random songs from that playlist
const getPlaylistSongs = async () => {
    
  const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      headers: {
          Authorization: `Bearer ${token}`
      },
      
  })
  
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
    <div className={classes.wrapper}>

      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <>
            <Header></Header>
            <LoginPageDesktop
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              CLIENT_ID={CLIENT_ID}
              REDIRECT_URI={REDIRECT_URI}
              RESPONSE_TYPE={RESPONSE_TYPE}
              SCOPES_URL_PARAM={SCOPES_URL_PARAM}></LoginPageDesktop>
              <button className={classes.btn} onClick={logout}>Logout</button>
              <button className={classes.btn} onClick={resetQuiz}>Reset</button>
            <Spacer></Spacer>
            {/*<button onClick={getPlaylistSongs}>GET PLAYLIST SONGS</button>*/}
              
             {/*<button onClick={getPlaylistSongs}>GET PLAYLIST SONGS</button>
              
             <form>
                <input type="text" id="input_id" placeholder="Playlist ID"></input>
                <input type="button" value="Submit" onClick={handleCustomPlaylistSubmit} />
          </form>
          */}
              <PlaylistSelectionMobile handlePlaylistChange={handlePlaylistChange}></PlaylistSelectionMobile>
              {gotThisIs ? <DisplayThisIs handleNoAnswer={handleNoAnswer} round={round} userScore={userScore} thisIsImage={thisIsImage} thisIsName={thisIsName} handleAnswer={handleAnswer} selectedThisIsSongs={selectedThisIsSongs}></DisplayThisIs> : null}
              {gotSongs ? <DisplaySongs topSongs={topSongs} handleAnswer={handleAnswer}></DisplaySongs> : null}
            </>
          ) : (
            <>
            <Header></Header>
            <LoginPageDesktop
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              CLIENT_ID={CLIENT_ID}
              REDIRECT_URI={REDIRECT_URI}
              RESPONSE_TYPE={RESPONSE_TYPE}
              SCOPES_URL_PARAM={SCOPES_URL_PARAM}></LoginPageDesktop>
              <button className={classes.btn} onClick={logout}>Logout</button>
              <button className={classes.btn} onClick={resetQuiz}>Reset</button>
            <Spacer></Spacer>
            {/*<button onClick={getPlaylistSongs}>GET PLAYLIST SONGS</button>
              
             <form>
                <input type="text" id="input_id" placeholder="Playlist ID"></input>
                <input type="button" value="Submit" onClick={handleCustomPlaylistSubmit} />
          </form>
          */}
              <PlaylistSelection handlePlaylistChange={handlePlaylistChange}></PlaylistSelection>
              {gotThisIs && round < 10 ? <DisplayThisIs handleNoAnswer={handleNoAnswer} round={round} userScore={userScore} thisIsImage={thisIsImage} thisIsName={thisIsName} handleAnswer={handleAnswer} selectedThisIsSongs={selectedThisIsSongs}></DisplayThisIs> : gotThisIs && round >= 10 ? <DisplayResults thisIsImage={thisIsImage} thisIsName={thisIsName}></DisplayResults> : null}
              {gotSongs ? <DisplaySongs topSongs={topSongs} handleAnswer={handleAnswer}></DisplaySongs> : null}
              {/*<DisplayQuizResults thisIsImage={thisIsImage} thisIsName={thisIsName} userScore={userScore} round={round}></DisplayQuizResults>*/}
              
            </>
          )
        }
      </Media>
    </div>
    
  );
};

export default App;
