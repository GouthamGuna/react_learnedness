import React from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useState } from "react";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModelHandler = () => {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h4>{props.title}</h4>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModelHandler} /> }
    </div>
  );
};

export default Todo;
