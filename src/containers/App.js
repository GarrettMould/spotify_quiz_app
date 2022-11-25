import LoginPageDesktop from "../components/LoginPageDesktop/LoginPageDesktop";
import LoginPageMobile from "../components/LoginPageMobile/LoginPageMobile";


import Media from "react-media";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import DisplaySongs from "../components/DisplaySongs/DisplaySongs";
import { SelectArtist } from "../components/SelectArtist/SelectArtist";


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
  const [gotSongs, setGotSongs] = useState(null); 
  const [topSongs, setTopSongs] = useState(null);

  const [artistID, setArtistID] = useState("5K4W6rqBFWDnAN6FQUkS6x");


console.log(artistID);

  // Function to update the artist ID 
  const handleArtistChange = (id) => { 
    setArtistID(id); 
    console.log(id);
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
  };

// Function to display the top songs of the chosen artist

useEffect((e) => { 
  getTopSongs(e);
}, [artistID]);


  const getTopSongs = async () => {
    
    const {data} = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=VN`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        
    })
    console.log(artistID);
    console.log(data.tracks);
    setGotSongs(true);
    setTopSongs(data.tracks);
   
}

  return (
    <div className={classes.wrapper}>
    <div data-theme={dataTheme}>
      
     
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <>
              <button onClick={getTopSongs}>Get Top Songs</button>
              {gotSongs ? <DisplaySongs topSongs={topSongs}></DisplaySongs> : null}
              <LoginPageMobile
              AUTH_ENDPOINT={AUTH_ENDPOINT}
            CLIENT_ID={CLIENT_ID}
            REDIRECT_URI={REDIRECT_URI}
              RESPONSE_TYPE={RESPONSE_TYPE}
              SCOPES_URL_PARAM={SCOPES_URL_PARAM}
              ></LoginPageMobile>
              
            </>
          ) : (
            <>
            <button onClick={logout}>Logout</button>
            <button onClick={getTopSongs}>Get Top Songs</button>
             <button onClick={() => setArtistID("46SHBwWsqBkxI7EeeBEQG7")}>Kodak Black</button>
             <button onClick={() => setArtistID("50co4Is1HCEo8bhOyUWKpn")}>Young Thug</button>
             <button onClick={() => setArtistID("1RyvyyTE3xzB2ZywiAwp0i")}>Future</button>
             <button onClick={() => setArtistID("2YZyLoL8N0Wb9xBt1NhZWg")}>Kendrick Lamar</button>
              
             <input onSubmit={(e) => setArtistID(e.currentTarget.value)}></input>
              {gotSongs ? <DisplaySongs topSongs={topSongs}></DisplaySongs> : null}
              <LoginPageDesktop
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              CLIENT_ID={CLIENT_ID}
              REDIRECT_URI={REDIRECT_URI}
                RESPONSE_TYPE={RESPONSE_TYPE}
                SCOPES_URL_PARAM={SCOPES_URL_PARAM}></LoginPageDesktop>
              
            </>
          )
        }
      </Media>
        </div>
      </div>
    
  );
};

export default App;
