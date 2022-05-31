import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import ToDoSearct from "./ToDoSearch";
import ToDoFilter from "./ToDoFilter";
import { GET, POST, DELETE } from "../api/httpHelper";

const ToDo = (props) => {
  const [inputText, setInputText] = useState("");
  const [todos, setToDo] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const inputSearchText = useRef("");
  let noToDos;
  const url = "http://localhost:5131/api/ToDoModels";

  if (todos.length < 1) {
    noToDos = <span> There are no ToDo's Added</span>;
  }

  const addToList = (event) => {
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

  const retriveTodos = async () => {
    const respo = await GET(url);
    return respo;

    /* getting the data using AXIOS */
    // const response = await createAPIEndpoint(ENDPOINTS.ToDoModels).fetch();
    // return response.data;
  };

  useEffect(() => {
    const getAllToDos = async () => {
      const allToDos = await retriveTodos();
      if (allToDos) setToDo(allToDos);
    };
    getAllToDos();
  }, []);

  const postTodos = async (id, todo) => {
    let data = { id, todo };
    POST(url, data);

    /* Posting the data using AXIOS */
    // createAPIEndpoint(ENDPOINTS.ToDoModels)
    //   .post({ id: id, todo: todo })
    //   .then((res) => console.log(res))
    //   .catch((err) => err);
  };

  useEffect(() => {
    const postToDo = async () => {
      var id = todos.map((item) => item.id).slice(-1);
      var todo = todos
        .map((item) => item.todo)
        .slice(-1)
        .toString();
      await postTodos(id[0], todo);
    };
    postToDo();
  }, [todos]);

  const deleteEvent = (event) => {
    //setToDo(todo.filter((item) => item.id !== event));
    const updatedToDo = todos.filter((item) => item.id !== event);
    setToDo(updatedToDo);

    let id = event;
    DELETE(url, id);
    /* deleting the records using AXIOS */
    // createAPIEndpoint(ENDPOINTS.ToDoModels)
    //   .delete(id)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  const editEvnetHandler = (event) => {
    setInputText(event.todo);
    setToDo(todos.filter((item) => item.id !== event.id));
  };

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
    <div className="bg-light p-5 rounded-lg m-3">
      <span className="display-4 ">To-Do</span>
      <ToDoInput
        setInputTextHandler={(e) => setInputText(e.target.value)}
        addToListHandler={addToList}
        valueHandler={inputText}
      />
      <div className="input-group mb-3 pt-3">
        <ToDoSearct
          setSearchTextHandler={setSearchTextHandler}
          inputSearchText={inputSearchText}
        ></ToDoSearct>
        {/* <ToDoFilter></ToDoFilter> */}
      </div>
      <div>{noToDos}</div>
      {inputSearchText.current.value
        ? searchResult.map((todo) => (
            <ToDoList
              item={todo.todo}
              key={todo.id}
            />
          ))
        : todos.map((todo) => (
            <ToDoList
              item={todo.todo}
              key={todo.id}
              deleteEventHandler={() => deleteEvent(todo.id)}
              editEvnetHandler={() => editEvnetHandler(todo)}
            />
          ))}
    </div>
  );
};

export default ToDo;
