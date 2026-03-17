import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../reduxStore/Store";

export const InputField = ({date}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    value: "",
    data: "",
  });

  const handleOnsubmit = (evt) => {
    evt.preventDefault();
    input.value
      ? setInput({ ...input, data: [input.value,date], value: "" })
      : setInput({ ...input });
  };
  const handleOnchange = (evt) => {
    const { value, name } = evt.target;
    switch (name) {
      case "taskInput":
        return setInput({ ...input, value: value });

      default:
        break;
    }
    // console.log(value,name)
  };

  useEffect(() => {
    // console.log(input)
    input.data.length > 0 && dispatch({ type: AddTask, payload: input.data });
    let someData=JSON.stringify(input)
    // console.log(someData)
    // localStorage.setItem('tasks',someData)
  }, [input.data]);

  return (
    <div
      className="taskInputBlock"
      style={{
        margin: "1rem",
        width: "80%",
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
      }}
    >
      <form
        onSubmit={(evt) => handleOnsubmit(evt)}
        style={{
          width: "75%",
          display: "flex",
          flexWrap: "nowrap",
          height: "100%",
          padding:'0.5rem'
        }}
      >
        <input
          type="text"
          name="taskInput"
          id="taskInput"
          onChange={(evt) => handleOnchange(evt)}
          value={input.value}
          style={{
            border: "0px",
            width: "80%",
            height: "100%",
            borderRadius: "20px 0px 0px 20px",
            outlineStyle: "none",
            paddingLeft: "1rem",
            fontSize: "20px",
          }}
        />
        <button
          type="submit"
          style={{
            border: "0px",
            width: "20%",
            height: "103%",
            borderRadius: "0px 20px 20px 0px",
            backgroundColor: "yellowgreen",
            fontSize: "20px",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};
