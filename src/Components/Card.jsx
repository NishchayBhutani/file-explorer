import React from 'react'
import './Card.css';
export default function Card(props) {
  return (
    <div className="card-container">
        <img className="folder-image" draggable="false" src="./assets/folder.png" />
        <br/>
        <span>{props.val}</span>
    </div>
  )
}
