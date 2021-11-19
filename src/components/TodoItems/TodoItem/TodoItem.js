import React from "react";

import classes from "./TodoItem.css";

const todoItem = (props) => (
  <div className={classes.TodoItem}>
    <p>{props.activity}</p>
    <button onClick={props.completeTodo}>DONE</button>
  </div>
);

export default todoItem;
