import React, { Component } from "react";

import classes from "./TodoList.css";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoItems from "../../components/TodoItems/TodoItems";

class TodoList extends Component {
  state = {
    todos: [],
    newTodoText: null,
  };

  getInputTodoHandler = (event) => {
    this.setState({ newTodoText: event.target.value });
  };

  addTodoHandler = () => {
    let newTodo = this.state.todos;
    if (this.state.newTodoText !== null) {
      newTodo.push(this.state.newTodoText);
      this.setState({ todos: newTodo });
    }
    console.log(newTodo);
    this.setState({ newTodoText: null });
  };

  completeTodoHandler = (index) => {
    let newTodo = this.state.todos;
    newTodo.splice(index, 1);
    this.setState({ todos: newTodo });
  };

  render() {
    return (
      <Aux>
        <div className={classes.TodoList}>
          <h1>Todolist With React JS</h1>
          <TodoInput
            addTodo={this.addTodoHandler}
            getTodo={this.getInputTodoHandler}
          />
          <TodoItems
            todos={this.state.todos}
            completeTodo={this.completeTodoHandler}
          />
        </div>
      </Aux>
    );
  }
}

export default TodoList;
