import React, { Component } from "react";

class ToDoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: "",
      todo: [],
    };
    
    this.getToDo = this.getToDo.bind(this);
  }

  getToDo(input) {
    this.setState(
      {
        newToDo: input,
      },
      () => {
        console.log(this.state.newToDo);
      }
    );
    //this.state.todo.push(this.state.newToDo)
    //console.log(this.state.todo)
  }
  render() {
    return (
      <div className="bg-light p-5 rounded-lg m-3">
        <span className="display-4 ">To-Do</span>
        <div className="input-group mb-3">
          <input
            onChange={(e) => this.getToDo(e.target.value)}
            value={this.state.todo}
            type="text"
            className="form-control"
            placeholder="Please enter your ToDo"
            autoComplete="false"
            required
          />
          <button
            className="btn btn-outline-success"
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Here Comes first ToDo
            <button className="btn btn-outline-danger">Delete</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Here Comes second ToDo
            <button className="btn btn-outline-danger">Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ToDoClass;
