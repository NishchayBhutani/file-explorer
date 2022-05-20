/** @format */

import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div
      className='card-container'
      onClick={() => {
        if (props.val.type === "folder") props.onMod(props.val.sub);
      }}>
      {props.val.type === "folder" ? (
        <img
          className='folder-file-image'
          draggable='false'
          src='./assets/folder.png'
        />
      ) : (
        <img
          className='folder-file-image'
          draggable='false'
          src='./assets/file.png'
        />
      )}
      <br />
      <span>{props.val.name}</span>
    </div>
  );
}
