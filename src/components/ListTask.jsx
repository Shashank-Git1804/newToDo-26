import { DeleteAllTask, store } from "../reduxStore/Store";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { ImRadioUnchecked } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { FiCheckCircle } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";
import { DeleteTask } from "../reduxStore/Store";
import { useCallback } from "react";
export const ListTask = () => {
    const dispatch=useDispatch()
  let [check, setCheck] = useState(null);
  const stateData = useSelector((store) => store.task);
  // const localStorageData=JSON.parse(localStorage.getItem('tasks'))
  // console.log(localStorageData);
  const handleOnDelete = (evt,index) =>{
    // localStorage.removeItem(localStorageData.data[index])
    dispatch({type:DeleteTask,payload:index})
  };

  const handleOncheck=(evt,index)=>{
    // console.log(evt.target,index)
    setCheck(check===null?index:null)
  }

    // let dateInstance=useCallback(()=>{
    //     return new Date().toLocaleString()
    // },[stateData])
    
  
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        {stateData &&
          stateData.map((eachData, index) => {
            return (
              <li
                key={index + 1}
                style={{
                  listStyle: "none",
                  border: "2px solid",
                  width: "60%",
                  textAlign: "justify",
                  borderRadius: "20px",
                  padding: "0px 1rem 0px 0px",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap:'wrap'
                }}
              >
                <b
                  style={{
                    padding: "1rem",
                    width: "5%",
                    margin: "0.5rem",
                    textAlign: "start",
                  }}
                >
                  {index + 1}.
                </b>{" "}
                <div
                  style={{
                    width: "40%",
                    display: "inline-block",
                    textDecoration:check===index?"line-through":"none"
                  }}
                >
                  {eachData[0]}
                </div>{" "}
                <div style={{marginRight:'15px'}}>
                  <i style={{fontSize:'1.2vh'}}>{eachData[1]}</i>
                </div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                  onClick={(evt)=>{
                    handleOncheck(evt,index)
                  }}
                >
                  {check !== index ? <ImRadioUnchecked /> : <FiCheckCircle style={{color:'rgb(17, 227, 17)'}}/>}
                </span>{" "}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "30px",
                    marginLeft: "10px",
                    color: "red",
                  }}
                  onClick={(evt) => handleOnDelete(evt,index)}
                >
                  <MdDeleteForever />
                </span>{" "}
              </li>
            );
          })}
      </ul>
      <div>
        <button type="button" style={{backgroundColor:'red', transform: 'scale(1.7)', border:'none', borderRadius:'5px'}} onClick={()=>{dispatch({type:DeleteAllTask})}}>Clear All</button>
      </div>
    </>
  );
};
