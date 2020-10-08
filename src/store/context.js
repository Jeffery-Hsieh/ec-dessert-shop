import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from "./reducer"

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <SessionContext.Provider value={{state, dispatch}}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContext