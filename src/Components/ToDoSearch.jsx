import React from "react";

const ToDoSearch = ({ inputSearchText, todos, setSearchResult }) => {
  const setSearchTextHandler = (event) => {
    if (inputSearchText.current.value !== "") {
      const searchedToDo = todos.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(inputSearchText.current.value.toLowerCase());
      });
      setSearchResult(searchedToDo);
    } else {
      setSearchResult(todos);
    }
  };

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

export default ToDoSearch;
