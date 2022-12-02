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


const App = (props) => {
  //SPOTIFY VARIABLES
  const CLIENT_ID = "8d204535e05d414ba64e3d520690e6a7";
  const REDIRECT_URI = "http://localhost:3000/";
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
  const [dataTheme, setDataTheme] = useState("dark");
  const [token, setToken] = useState("");
  // User ID
  const [userID, setUserID] = useState("");
  const [gotSongs, setGotSongs] = useState(false); 
  const [topSongs, setTopSongs] = useState(null);
  const [gotThisIs, setGotThisIs] = useState(false); 
  const [thisIsFullSongList, setThisIsFullSongList] = useState(null)
  const [thisIsName, setThisIsName] = useState(null);
  const [thisIsImage, setThisIsImage] = useState(null);
  const [selectedThisIsSongs, setSelectedThisIsSongs] = useState(null)
  const [playlistID, setPlaylistID] = useState("37i9dQZF1DX5EkyRFIV92g");
  const [artistID, setArtistID] = useState("37i9dQZF1DX5EkyRFIV92g");



// Classes for THIS IS Quiz 

function SongThisIs(name, img, uri, answerOptions) {
  this.name = name;
  this.img = img; 
  this.uri = uri;
  this.answerOptions = answerOptions;
}

// Function that returns boolean for correct / incorrect quiz response
const handleAnswer = (e) => { 
  console.log(e.currentTarget.value)
}

  // Function to update the artist ID 
  const handleArtistChange = (id) => { 
    setArtistID(id); 
    console.log(id);
  }

  // Function to update the artist ID 
  const handlePlaylistChange = (e) => { 
    setPlaylistID(e.currentTarget.id); 
    console.log(e.currentTarget.id)
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
  };

// Function to display the top songs of the chosen artist

useEffect((e) => { 
  getTopSongs(e);
}, [artistID]);

useEffect((e) => { 
  getPlaylistSongs(e);
}, [playlistID]);



// Function that sets artistID to the user input value
const handleCustomPlaylistSubmit = () => { 
  var id = document.getElementById('input_id').value;
  console.log(id);
  setPlaylistID(id);
}
  
// Function takes an artist ID and returns their top songs 
const getTopSongs = async () => {
    
    const {data} = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=VN`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        
    })
    console.log(artistID);
    console.log(data.tracks);
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


  const shuffled = data.items.sort(() => 0.5 - Math.random());
  const noURIRemoved = shuffled.filter(function( obj ) {
    return obj.track.preview_url;
  });
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

  setThisIsFullSongList(allSongs);
  console.log(allSongs)

  // 
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

  console.log(selectedSongs)
  setSelectedThisIsSongs(selectedSongs);



}

const getPlaylistInfo = async () => { 

  const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}`, {
      headers: {
          Authorization: `Bearer ${token}`
      },
      
  })
  
  setThisIsName(data.name); 
  setThisIsImage(data.images[0].url)
  console.log(data.images[0].url);

  
}

  return (
    <div className={classes.wrapper}>
    
      
     
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <>
            <Header></Header>
            <Spacer></Spacer>
            {/*<button onClick={getPlaylistSongs}>GET PLAYLIST SONGS</button>*/}
              
             <form>
                <input type="text" id="input_id" placeholder="Playlist ID"></input>
                <input type="button" value="Submit" onClick={handleCustomPlaylistSubmit} />
          </form>
              <PlaylistSelection handlePlaylistChange={handlePlaylistChange}></PlaylistSelection>
              {gotThisIs ? <DisplayThisIs thisIsImage={thisIsImage} thisIsName={thisIsName} handleAnswer={handleAnswer} selectedThisIsSongs={selectedThisIsSongs}></DisplayThisIs> : null}
              {gotSongs ? <DisplaySongs topSongs={topSongs} handleAnswer={handleAnswer}></DisplaySongs> : null}
              <LoginPageDesktop
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              CLIENT_ID={CLIENT_ID}
              REDIRECT_URI={REDIRECT_URI}
              RESPONSE_TYPE={RESPONSE_TYPE}
              SCOPES_URL_PARAM={SCOPES_URL_PARAM}></LoginPageDesktop>
              <button className={classes.btn} onClick={logout}>Logout</button>
            </>
          ) : (
            <>
            <Header></Header>
            <Spacer></Spacer>
            {/*<button onClick={getPlaylistSongs}>GET PLAYLIST SONGS</button>*/}
              
             <form>
                <input type="text" id="input_id" placeholder="Playlist ID"></input>
                <input type="button" value="Submit" onClick={handleCustomPlaylistSubmit} />
          </form>
              <PlaylistSelection handlePlaylistChange={handlePlaylistChange}></PlaylistSelection>
              {gotThisIs ? <DisplayThisIs thisIsImage={thisIsImage} thisIsName={thisIsName} handleAnswer={handleAnswer} selectedThisIsSongs={selectedThisIsSongs}></DisplayThisIs> : null}
              {gotSongs ? <DisplaySongs topSongs={topSongs} handleAnswer={handleAnswer}></DisplaySongs> : null}
              <LoginPageDesktop
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              CLIENT_ID={CLIENT_ID}
              REDIRECT_URI={REDIRECT_URI}
              RESPONSE_TYPE={RESPONSE_TYPE}
              SCOPES_URL_PARAM={SCOPES_URL_PARAM}></LoginPageDesktop>
              <button className={classes.btn} onClick={logout}>Logout</button>
            </>
          )
        }
      </Media>
    </div>
    
  );
};

export default App;
