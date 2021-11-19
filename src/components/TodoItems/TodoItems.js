import React from "react";
import classes from "./TodoItems.css";
import TodoItem from "./TodoItem/TodoItem";

const todoItems = (props) => (
  <div className={classes.TodoItems}>
    {props.todos.map((todo, i) => {
      console.log(todo);
      return (
        <TodoItem
          key={i}
          activity={todo}
          completeTodo={() => props.completeTodo(i)}
        />
      );
    })}
  </div>
);

export default todoItems;
