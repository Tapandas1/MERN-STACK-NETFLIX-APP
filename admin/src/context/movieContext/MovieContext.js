import { createContext,useReducer } from "react";
import MovieReducer from "./MovieReducer";

const INTIAL_STATE={
    movies:[],
    isFetching:false,
    error:false,
}

export const MovieContext=createContext(INTIAL_STATE);

export const MovieContextProvider=({children})=>{
    const[state,dispatch]=useReducer(MovieReducer,INTIAL_STATE)

    return (
        <MovieContext.Provider value={{
            movies:state.movies,
            isFetching:state.isFetching,
            error:state.error,
            dispatch

        }}>{children}</MovieContext.Provider>
    )
}

