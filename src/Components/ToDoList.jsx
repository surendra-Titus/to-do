import React from "react";

const ToDoList = ({ item, deleteEventHandler, editEvnetHandler }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {item}
          <div className="float-end">
            <button
              className="btn btn-outline-primary me-md-2"
              onClick={editEvnetHandler}
            >
              Edit
            </button>
            <span> </span>
            <button
              className="btn btn-outline-danger"
              onClick={deleteEventHandler}
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
