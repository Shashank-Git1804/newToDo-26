import { useEffect, useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { ListTask } from "./components/ListTask";

function App() {
  const [date,setDate]=useState('')
  const datetime=()=>{
    const date = new Date();
    return date.toLocaleString()
    // setInterval(()=>{
    //   datetime()
    // },1000)
    
  }

  setInterval(() => {
    setDate(datetime())
  }, 1000);

  return (
    <div
      style={{
        margin: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>React-Redux TODO</h1>
      <div>
        <h3>
          {date}
        </h3>
      </div>
      <InputField date={date}/>
      <ListTask />
    </div>
  );
}

export default App;
