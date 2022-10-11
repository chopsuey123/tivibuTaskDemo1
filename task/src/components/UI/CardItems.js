import React from "react";
import CardItem from "./CardItem";
import classes from "./CardItems.module.scss";

const CardItems = (props) => {
  return (
    <div className={classes.wrapper}>
      <ul>
        {props.movies.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CardItems;
