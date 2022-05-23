import React, { useState } from "react";

const ToDoList = (props) => {
  const [inputText, setInputText] = useState("");
  const [todo, setToDo] = useState([]);
  const getToDoHandler = (e) => {};
  const addToListHandler = () => { 
    //console.log(inputText);
    setToDo([...todo, {id: todo.length, value : inputText}]);
    //setInputText(() => "")
  };
  //console.log(todo)
  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <span className="display-4 ">To-Do</span>
      <div className="input-group mb-3">
        <input
          onChange={(e) => setInputText(e.target.value)}
          //value={e.target.value}
          type="text"
          className="form-control"
          placeholder="Please enter your ToDo"
          autoComplete="false"
          required
        />
        <button
          onClick={addToListHandler}
          className="btn btn-outline-success"
          type="button"
          id="button-addon2"
        >
          Add
        </button>
      </div>
          {todo.map(todo => 
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {todo.value}
          <button className="btn btn-outline-danger">Delete</button>
        </li>
      </ul>
          )}
    </div>
  );
};

export default ToDoList;
