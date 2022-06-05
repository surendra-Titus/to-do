import React from "react";

const ToDoList = ({
  item,
  todos,
  setToDo,
  todo,
  setInputText,
  setIsOpen,
  isOpen,
}) => {
  const isCheckedHandler = () => {
    setToDo(
      todos.map((element) => {
        if (element.id === item.id) {
          return {
            ...element,
            isChecked: !element.isChecked,
          };
        }
        return element;
      })
    );
  };

  const editEvnetHandler = (event) => {
    setInputText(event.todo);
    setToDo(todos.filter((item) => item.id !== event.id));
  };

  const deleteEventHandler = async (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input
              onChange={isCheckedHandler}
              className="list-group-input"
              type="checkbox"
              value=""
              id="flexCheckBox"
            />
            <span> </span>
            {item.todo}
          </div>
          <div className="float-end">
            <button
              className="btn btn-outline-primary me-md-2"
              onClick={() => editEvnetHandler(todo)}
            >
              Edit
            </button>
            <span> </span>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteEventHandler(todo.id)}
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
