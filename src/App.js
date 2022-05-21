/** @format */

import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";
import AddCard from "./Components/AddCard";
function App() {
  const [arr, setArr] = useState([
    {
      name: "movies",
      type: "folder",
      sub: [
        {
          name: "comedy",
          type: "folder",
          sub: [],
        },
        {
          name: "drama",
          type: "folder",
          sub: [{ name: "mov.mp4", type: "file" }],
        },
      ],
    },
    {
      name: "games",
      type: "folder",
      sub: [
        {
          name: "pacman.exe",
          type: "file",
        },
      ],
    },
    
  ]);
  const renameHandler = (originalName, val) => {
    arr.map((elem, idx) => {
      if (elem.name === originalName) {
        let originalArr = [...arr];
        let modElem = { name: val, type: elem.type, sub: elem.sub };
        originalArr[idx] = modElem;
        setArr(originalArr);
      }
    });
  }; // rename file/folder
  const deleteHandler = (val) => {
    let modArr = arr.filter((elem) => elem.name !== val);
    setArr(modArr);
  }; // delete file/folder
  return (
    <div className='App'>
      <div className='all-cards-container'>
        {arr.map((elem) => {
          return (
            <Card
              val={elem}
              onMod={(val) => {
                setArr(val);
              }}
              onRename={renameHandler}
              onDelete={deleteHandler}
            />
          );
        })}
        <AddCard
          currArr={arr}
          onChange={(val, type) => {
            setArr([...arr, { name: val, type: type, sub: [] }]);
          }} 
        />
      </div>
    </div>
  );
}

export default App;
