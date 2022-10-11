import React from "react";
import Modal from "../UI/Modal";
import classes from "./Notification.module.scss";

const Notification = (props) => {
  return (
    <Modal onClose={props.onHideNotify}>
      <div className={classes.notify}>
        <div>
          <p>Please login if you want to see your profile.</p>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onHideNotify}>Close</button>
          <button>Login</button>
        </div>
      </div>
    </Modal>
  );
};

export default Notification;
