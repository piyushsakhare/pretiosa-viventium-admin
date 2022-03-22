import { createContext, useReducer } from "react";
import DestinationReducer from "./DestinationReducer";

const INITIAL_STATE = {
    destinations : [] ,
    isFetching : false,
    error : false
}

export const DestinationContext = createContext(INITIAL_STATE)

export const DestinationContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DestinationReducer, INITIAL_STATE)

  

    return (<DestinationContext.Provider value={{
        destinations : state.destinations,
        isFetching : state.isFetching,
        error : state.error,
        dispatch
    }} >{children}</DestinationContext.Provider>)
}