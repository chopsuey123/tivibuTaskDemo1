import React, { useContext, useState } from "react";
import classes from "./NavBar.module.scss";
import SearchIcon from "../UI/SearchIcon";
import SearchContext from "../../storage/search-context";
import { FaUserCircle } from "react-icons/fa";
import Notification from "./Notification";

const tivibuImage =
  "data:image/png;base64,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";

const NavBar = () => {
  const searchCtx = useContext(SearchContext);
  const [showNotify, setShowNotify] = useState(false);

  const showNotifyHandler = () => {
    setShowNotify(true);
  };

  const hideNotifyHandler = () => {
    setShowNotify(false);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.items}>
        <div className={classes.logo}>
          <img alt="tivibu-logo" src={tivibuImage}></img>
        </div>
        <a className={classes.item}>
          <div className={classes.label}>
            <label>Special</label>
          </div>
        </a>
        <a className={classes.item}>
          <div className={classes.label}>
            <label>Films</label>
          </div>
        </a>
        <a className={classes.item}>
          <div className={classes.label}>
            <label>Series</label>
          </div>
        </a>
        <a className={classes.item}>
          <div className={classes.label}>
            <label>Hire & Buy</label>
          </div>
        </a>
        <a className={classes.item}>
          <div className={classes.label}>
            <label>Kids</label>
          </div>
        </a>
        <a className={classes.item}>
          <div className={classes.label}>
            <label className={classes.tv}>Live TV</label>
          </div>
        </a>
      </div>
      <div className={classes.profil}>
        <div className={classes.elements}>
          <span
            className={classes.search}
            onClick={searchCtx.showSearchHandler}
          >
            <SearchIcon />
          </span>
          <span className={classes.main} onClick={showNotifyHandler}>
            <label>Main Profile</label>
          </span>
          {showNotify && <Notification onHideNotify={hideNotifyHandler} />}
          <span>
            <FaUserCircle style={{ color: "white", fontSize: "50px" }} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
