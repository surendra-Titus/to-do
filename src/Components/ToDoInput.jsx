import React from "react";

const ToDoInput = ({ setInputText, inputText, setToDo, todos }) => {
  const addToListHandler = (event) => {
    const num = 23294828;
    if (inputText !== "")
      setToDo([
        ...todos,
        {
          id: Math.floor(Math.random() * num) + 1,
          todo: inputText,
          isChecked: false,
        },
      ]);
    setInputText("");
  };
  return (
    <div className="input-group">
      <input
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        type="text"
        className="form-control"
        placeholder="Please add your ToDo"
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
  );
};

export default ToDoInput;
