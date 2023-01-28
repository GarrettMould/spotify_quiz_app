import { Button } from "react-bootstrap";
import classes from "./LoginPageDesktop.module.css";
const LoginPageDesktop = (props) => {
  return (
   
          <a
            href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}&scope=${props.SCOPES_URL_PARAM}`}
          >
            <Button  onClick={props.logout} className={classes.btn}>Login to Spotify</Button>
          </a>
        
  );
};

export default LoginPageDesktop;
