import React from "react";

const ToDoSearct = ({ setSearchTextHandler, inputSearchText }) => {
  return (
    <React.Fragment>
      <input
        ref={inputSearchText}
        onChange={setSearchTextHandler}
        type="text"
        className="form-control"
        placeholder="Search ToDo's"
      ></input>
    </React.Fragment>
  );
};

export default ToDoSearct;
