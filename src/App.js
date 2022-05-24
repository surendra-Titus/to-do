import React, { useState } from "react";
import ToDoClass from "./Components/ToDoClass";
import ToDo from "./Components/ToDo";

const App = () => {
  return (
    <React.Fragment>
      <ToDo />
      {/* <ToDoClass></ToDoClass> */}
    </React.Fragment>
  );
};

export default App;
