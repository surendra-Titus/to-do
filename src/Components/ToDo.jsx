import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import { createAPIEndpoint, ENDPOINTS } from "../api";

const ToDo = (props) => {
  const [inputText, setInputText] = useState("");
  const [todo, setToDo] = useState([]);

  const addToList = (event) => {
    if (inputText !== "") {
      setToDo([...todo, { id: Date.now(), value: inputText }]);
    }
    // console.log(todo)
    // createAPIEndpoint(ENDPOINTS.ToDoModels).post(inputText)
    // .then(res => console.log(res)).catch(err => console.log(err))
    setInputText("");
  };

  const deleteEvent = (event) => {
    //setToDo(todo.filter((item) => item.id !== event));
    const updatedToDo = todo.filter((item) => item.id !== event);
    setToDo(updatedToDo);
  };
  const editEvnetHandler = (event) => {
    setInputText(event.value);
    setToDo(todo.filter((item) => item.id !== event.id));
  };
  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <span className="display-4 ">To-Do</span>
      <ToDoInput
        setInputTextHandler={(e) => setInputText(e.target.value)}
        addToListHandler={addToList}
        valueHandler={inputText}
      />
      {todo.map((todo) => (
        <ToDoList
          item={todo.value}
          key={todo.id}
          deleteEventHandler={() => deleteEvent(todo.id)}
          editEvnetHandler={() => editEvnetHandler(todo)}
        />
      ))}
    </div>
  );
};

export default ToDo;
