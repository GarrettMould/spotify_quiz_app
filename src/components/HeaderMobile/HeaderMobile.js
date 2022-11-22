import { Navbar, Button } from "react-bootstrap";
import { List } from "phosphor-react";
import classes from "./HeaderMobile.module.css";

const HeaderMobile = (props) => {
  const loggedIn = props.token;
  var dataTheme = props.dataTheme;
  return (
    <Navbar
      className={
        dataTheme == "light" ? classes.navbarHeader : classes.navbarHeaderDark
      }
    >
      <div className={classes.navContentContainer}>
        <div className={classes.siteTitle}>
          <span className={classes.greenText}>Tune</span> Tracker
        </div>
        <div className={classes.navListContainer}>
          {loggedIn ? (
            <Button className={classes.btn} onClick={props.logout}>
              Logout
            </Button>
          ) : (
            <Button className={classes.btn} onClick={props.updateTheme}>
              {dataTheme == "light" ? "Dark" : "Light"}
            </Button>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default HeaderMobile;
