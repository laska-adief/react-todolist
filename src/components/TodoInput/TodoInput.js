import React, { Component } from "react";

import classes from "./TodoInput.css";

class TodoInput extends Component {
  render() {
    return (
      <div className={classes.TodoInput}>
        <input
          type="text"
          placeholder="what to do..."
          onChange={this.props.getTodo}
          ref="resetInput"
        />
        <button
          onClick={() => {
            this.props.addTodo(this.props.newTodo);
            this.refs.resetInput.value = "";
          }}
        >
          To Do
        </button>
      </div>
    );
  }
}
export default TodoInput;
