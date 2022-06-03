import React from "react";
import Modal from "react-modal";
import "../index.css";

const ToDoDeleteDialog = ({isOpen, dialogResponse, setIsOpen}) => {

  return (
    <React.Fragment>
      <div className="App">
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={100}
        >
          <div className="msgText">Are You Sure!.</div>
          <div className="btnContainer">
          <button className="btnYes" onClick={dialogResponse}>Yes</button>
          <button className="btnNo"onClick={() => setIsOpen(false)}>No</button>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default ToDoDeleteDialog
