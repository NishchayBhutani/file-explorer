/** @format */

import React from "react";
import "./Card.css";
import { useState } from "react";
import ReactModal from "react-modal";
import { Menu, Item, Separator, useContextMenu } from "react-contexify";
import { Button, Form } from "react-bootstrap";
import "react-contexify/dist/ReactContexify.css";
export default function Card(props) {
  const [name, setName] = useState(props.val.name);
  const [isOpen, setIsOpen] = useState(false);
  const { show } = useContextMenu({
    id: "unique",
  });
  function handleContextMenu(event) {
    event.preventDefault();
    show(event, {
      props: {
        key: "value",
      },
    });
  }
  const onDeleteHandler = () => {
    props.onDelete(props.val.name);
  };
  const setModalState = () => setIsOpen(!isOpen);
  const onRenameButtonClick = () => {
    props.onRename(props.val.name, name);
    setIsOpen(!isOpen);
  };
  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <div
        className='card-container'
        onDoubleClick={() => {
          if (props.val.type === "folder") props.onMod(props.val.sub);
        }}
        onContextMenu={handleContextMenu}>
        <div className='card-image-container'>
          {props.val.type === "folder" ? (
            <img
              className='folder-file-image'
              draggable='false'
              src='./assets/folder.png'
              alt='folder'
            />
          ) : (
            <img
              className='folder-file-image'
              draggable='false'
              src='./assets/file.png'
              alt='file'
            />
          )}
        </div>
        <br />
        <div className='name-container'>
          {props.val.name.length > 20
            ? props.val.name.substring(0, 20) + "..."
            : props.val.name}
        </div>
        <Menu id='unique'>
          <Item onClick={setModalState}>Rename</Item>
          <Separator />
          <Item onClick={onDeleteHandler}>Delete</Item>
        </Menu>
      </div>
      <ReactModal
        className='rename-modal'
        isOpen={isOpen}
        shouldCloseOnEsc={true}>
        <div className='rename-modal-content-container'>
          <Form.Control
            type='text'
            placeholder='enter new name'
            value={name}
            onChange={onNameChangeHandler}
          />
          <Button variant='primary' className="rename-button" onClick={onRenameButtonClick}>
            Rename
          </Button>
          <Button variant='danger' className="cancel-rename-button" onClick={setModalState}>
            Close Modal
          </Button>
        </div>
      </ReactModal>
    </div>
  );
}
