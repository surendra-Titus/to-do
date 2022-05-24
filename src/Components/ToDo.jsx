import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";

const ToDo = (props) => {
  const [inputText, setInputText] = useState("");
  const [todo, setToDo] = useState([]);

  const addToList = (event) => {
    if (inputText !== "") {
      setToDo([...todo, { id: Date.now(), value: inputText }]);
    }
    setInputText("");
  };

  const deleteEvent = (event) => {
    //setToDo(todo.filter((item) => item.id !== event));
    const updatedToDo = todo.filter((item) => item.id !== event);
    setToDo(updatedToDo);
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
        <ToDoList item={todo.value} key={todo.id} deleteEventHandler={() => deleteEvent(todo.id)} />
      ))}
    </div>
  );
};

export default ToDo;
