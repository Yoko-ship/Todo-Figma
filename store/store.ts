import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./data"

export const makeStore = () =>{
    return configureStore({
        reducer:{
            todo:TodoReducer
        }
    })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']