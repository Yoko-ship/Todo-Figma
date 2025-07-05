import { createSlice} from "@reduxjs/toolkit";

export interface Todo{
    id:number,
    title:string,
    start:string,
    end:string,
    today:boolean,
    tomorrow:boolean,
    week:boolean
}
interface TodoState{
    todo:Todo[],
}
const initialState:TodoState = {
    todo:[]
}

export const TodoStore = createSlice({
    name:"todo",
    initialState,
    reducers:{
        pushTodo(state,action){
            state.todo.push(action.payload)
        },
    }
})
export const {pushTodo} = TodoStore.actions
export default TodoStore.reducer