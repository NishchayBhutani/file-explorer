/** @format */

import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Components/Card";
import AddCard from "./Components/AddCard";
function App() {
  const [level, setLevel] = useState(0);
  const [arr, setArr] = useState([
    [
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
            sub: [{ name: "m.pdf", type: "file" }],
          },
        ],
      },
      {
        name: "games",
        type: "folder",
        sub: [
          {
            name: "fps",
            type: "folder",
            sub: [],
          },
        ],
      },
    ],
  ]);
  const goBack = () => {
    if (level > 0) {
      setLevel(level - 1);
    }
  };
  const goNext = () => {
    if (level < arr.length - 1)
    setLevel(level + 1);
  }
  return (
    <div className='App'>
      <h1>Welcome!</h1>
      <div className='all-cards-container'>
        {arr[level].map((elem) => {
          return (
            <Card
              val={elem}
              // level={(val) => setLevel(val)}
              onMod={(val) => {
                setArr([...arr, val]);
                setLevel(level + 1);
                console.log(arr);
                // console.log([[...arr], val]);
              }}
            />
          );
        })}
        <AddCard
          currArr={arr}
          onChange={(val) =>
            setArr([...arr, { name: val, type: "folder", sub: [] }])
          }
        />
      </div>
      <button onClick={goBack}>Back</button>
      <button onClick={goNext}>Next</button>
    </div>
  );
}

export default App;
