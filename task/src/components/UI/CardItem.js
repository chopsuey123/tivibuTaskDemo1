import React from "react";
import classes from "./CardItems.module.scss";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <div className={classes.viditem}>
      <li>
        <Link to={"/films/" + props.item.id}>
          <img alt={props.item.id} src={props.item.url} />
        </Link>
      </li>
    </div>
  );
};

export default CardItem;
