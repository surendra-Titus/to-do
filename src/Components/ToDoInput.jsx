import React from "react";

const ToDoInput = ({ setInputTextHandler, addToListHandler, valueHandler }) => {
  return (
    <div className="input-group">
      <input
        onChange={setInputTextHandler}
        value={valueHandler}
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
