import React from "react";

const ToDoList = ({ item, deleteEventHandler }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {item}
          <button
            className="btn btn-outline-danger"
            onClick={deleteEventHandler}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
