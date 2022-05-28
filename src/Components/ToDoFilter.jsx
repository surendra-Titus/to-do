import React from "react";

const ToDoFilter = () => {
    return(
        <React.Fragment>
            <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter ToDo's
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#">
              All
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Completed
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Pending
            </a>
          </li>
        </ul>
        </React.Fragment>
    )
}

export default ToDoFilter