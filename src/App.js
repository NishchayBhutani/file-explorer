import "./App.css";
import {useState, useEffect } from "react";
import Card from "./Components/Card";
import AddCard from "./Components/AddCard";
function App() {
  const [arr, setArr] = useState(["test"]);
  useEffect(() => {
    console.log(arr);
  }, [arr])
  return (
    <div className="App">
      <h1>Greetings</h1>
      <div className="all-cards-container">
      {arr.map((elem) => {
        return <Card val={elem}/>
      })}
      <AddCard currArr={arr} onChange={(val) => setArr([...arr, val])}/>
      </div>
    </div>
  );
}

export default App;
