import { Button } from "react-bootstrap";
import classes from "./LoginPageDesktop.module.css";
const LoginPageDesktop = (props) => {
  return (
    <div className={classes.padding}>
      <div className={classes.contentContainer}>
        <div className={classes.contentWrapper}>
          <div className={classes.bigTitle}>Welcome to Tune Tracker</div>
          <div className={classes.smallTitle}>
            Tune Tracker is a Spotify web app that helps you visualize your most
            listened to tracks and artists and create custom playlists from
            those tunes
          </div>
          <a
            href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}&scope=${props.SCOPES_URL_PARAM}`}
          >
            <Button className={classes.btn}>Login to Spotify</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPageDesktop;
