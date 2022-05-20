import React from 'react';
import { useState} from 'react';
import "./AddCard.css";
import ReactModal from 'react-modal';
export default function AddCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const setModalState = () => {
      setIsOpen(!isOpen);
  }
  const folderNameChangeHandler = (e) => {
      setFolderName(e.target.value);
  }
  const addFolder = () => {
      console.log(props);
      props.onChange(folderName);
      setFolderName("");
      setModalState();
  }
  return (
    <div className="add-new-container">
        <img className="add-image" draggable="false" onClick={setModalState} src="./assets/add_new_button.png" />
        <ReactModal className="create-file-modal" isOpen={isOpen} shouldCloseOnEsc={true}>
            <div className="modal-content-container">
            <p>Enter folder name</p>
            <input value={folderName} onChange={folderNameChangeHandler} placeholder='movies, music, etc.'></input>
            <br/>
            <button onClick={addFolder}  >Create</button>
            <button onClick={setModalState}>Close Modal</button>
            </div>
        </ReactModal>
    </div>
  )
}
