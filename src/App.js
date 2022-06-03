import React, { useState } from "react";
import ToDoClass from "./Components/ToDoClass";
import ToDo from "./Components/ToDo";
import Modal from "react-modal/lib/components/Modal";

Modal.setAppElement('#root')

const App = () => {
  return (
    <React.Fragment>
      <ToDo />
      {/* <ToDoClass></ToDoClass> */}
    </React.Fragment>
  );
};

export default App;
