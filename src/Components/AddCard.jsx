/** @format */

import React from "react";
import { useState } from "react";
import "./AddCard.css";
import ReactModal from "react-modal";
import { Button, Form } from "react-bootstrap";
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
  const create = async () => {
    console.log(props.currArr);
    let flag = false;
    await props.currArr.map((elem) => {
      if (elem.type === type && elem.name === name) flag = true;
    });
    if (flag === false) {
      props.onChange(name, type);
      setName("");
      setModalState();
    }
    if (flag === true) alert("duplicate value");
  };
  return (
    <div className='add-new-container'>
      <img
        className='add-image'
        draggable='false'
        onClick={setModalState}
        alt='add file/folder'
        src='./assets/add_new_button.png'
      />
      <ReactModal
        className='create-file-modal'
        isOpen={isOpen}
        shouldCloseOnEsc={true}>
        <div className='modal-content-container'>
          <Form.Check
            type='radio'
            className='folder-or-file-radio'
            onChange={() => setType("folder")}
            inline
            label='Folder'
            name='radio'
          />
          <Form.Check
            type='radio'
            className='folder-or-file-radio'
            onChange={() => setType("file")}
            inline
            label='File'
            name='radio'
          />
          <br />
          <br />
          <Form.Control
            type='text'
            className='file-name-input'
            value={name}
            onChange={folderNameChangeHandler}
            placeholder='Enter name'
          />
          <br />
          <Button
            variant='primary'
            className='file-create-button'
            onClick={create}>
            Create
          </Button>
          <Button
            variant='danger'
            className='file-cancel-button'
            onClick={setModalState}>
            Cancel
          </Button>
        </div>
      </ReactModal>
    </div>
  );
}
