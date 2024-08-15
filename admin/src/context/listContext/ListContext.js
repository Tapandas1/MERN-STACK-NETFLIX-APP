import { createContext,useReducer } from "react";
import ListReducer from "./ListReducer";

const INTIAL_STATE={
    lists:[],
    isFetching:false,
    error:false,
}

export const ListContext=createContext(INTIAL_STATE);

export const ListContextProvider=({children})=>{
    const[state,dispatch]=useReducer(ListReducer,INTIAL_STATE)

    return (
        <ListContext.Provider value={{
            lists:state.lists,
            isFetching:state.isFetching,
            error:state.error,
            dispatch

        }}>{children}</ListContext.Provider>
    )
}

