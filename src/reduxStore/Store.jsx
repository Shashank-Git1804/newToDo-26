import {createStore} from 'redux'

export const AddTask="task/add"
export const DeleteTask="task/delete"
export const DeleteAllTask="task/deleteAll"

const initialState={
    task:[],
    isCheck:false,
}

const todoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case AddTask:
            return {...state,task:[...state.task,action.payload]};
        case DeleteTask:
            const updatedTask=state.task.filter((item,index)=>index!==action.payload)
            return {...state,task:[...updatedTask]};
        case DeleteAllTask:
            return {...state,task:[]};
        default:
            return state;
    }
}
export const store=createStore(todoReducer)
const addTask=(data)=>{
    return {type:"task/add",payload:data}
}



// // console.log(store.getState())
// store.dispatch(addTask( '1st Item'))
// store.dispatch(addTask('2nd Item'))
// store.dispatch(addTask('3rd Item'))
// console.log(store.getState())
