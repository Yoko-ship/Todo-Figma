import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface Todo{
    id:number,
    todo:string,
    date:number,
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
        addTodo(state,action){
            state.todo = action.payload
        }
    }
})
export const {addTodo} = TodoStore.actions
export default TodoStore.reducer