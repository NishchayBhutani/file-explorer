/** @format */

import "./App.css";
import { useState, useEffect } from "react";
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
  ]);
  return (
    <div className='App'>
      <h1>Welcome!</h1>
      <div className='all-cards-container'>
        {arr.map((elem) => {
          return (
            <Card
              val={elem}
              onMod={(val) => {
                setArr(val);
                console.log(arr);
              }}
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
