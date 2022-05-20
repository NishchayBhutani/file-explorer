/** @format */

import React from "react";
import { useState } from "react";
import "./AddCard.css";
import ReactModal from "react-modal";
export default function AddCard(props) {
  const [type, setType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const setModalState = () => {
    setIsOpen(!isOpen);
  };
  const folderNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const create = () => {
    console.log(props);
    props.onChange(name, type);
    setName("");
    setModalState();
  };
  return (
    <div className='add-new-container'>
      <img
        className='add-image'
        draggable='false'
        onClick={setModalState}
        src='./assets/add_new_button.png'
      />
      <ReactModal
        className='create-file-modal'
        isOpen={isOpen}
        shouldCloseOnEsc={true}>
        <div className='modal-content-container'>
          <label>
            <input
              type='radio'
              name='radio'
              className='folder-or-file-radio'
              onChange={() => setType("folder")}
            />
            Folder
          </label>
          <label>
            <input
              type='radio'
              name='radio'
              className='folder-or-file-radio'
              onChange={() => setType("file")}
            />
            File
          </label>
          <br />
          <input
            value={name}
            onChange={folderNameChangeHandler}
            placeholder='movies, music, etc.'></input>
          <br />
          <button onClick={create}>Create</button>
          <div className='modal-close-image-container'>
            <img src='./assets/close.png' className='modal-close-image' />
          </div>
          <button onClick={setModalState}>Close Modal</button>
        </div>
      </ReactModal>
    </div>
  );
}
