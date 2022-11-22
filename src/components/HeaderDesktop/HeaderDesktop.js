import { Navbar, Button } from "react-bootstrap";

import classes from "./HeaderDesktop.module.css";

const HeaderDesktop = (props) => {
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
            <ul className={classes.navList}>
              <div className={classes.itemContainer}>
                <a href="#">
                  <li className={classes.item} onClick={props.updateTheme}>
                    {dataTheme == "light" ? "Dark Mode" : "Light Mode"}
                  </li>
                </a>
              </div>
              <div className={classes.itemContainer}>
                <Button className={classes.btn} onClick={props.logout}>
                  Logout
                </Button>
              </div>
            </ul>
          ) : (
            <ul className={classes.navListLoggedOut}>
              <div className={classes.itemContainerLoggedOut}>
                <a href="#">
                  <li className={classes.item}>How it Works</li>
                </a>
              </div>
              <div className={classes.itemContainerLoggedOut}>
                <a href="#">
                  <li className={classes.item}>Share</li>
                </a>
              </div>
              <div className={classes.itemContainerLoggedOut}>
                <Button className={classes.btn} onClick={props.updateTheme}>
                  {dataTheme == "light" ? "Dark" : "Light"}
                </Button>
              </div>
            </ul>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default HeaderDesktop;
