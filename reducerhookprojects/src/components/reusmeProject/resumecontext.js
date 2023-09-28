import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";


const ResumeContext = createContext()


export function useResume() {
    return useContext(ResumeContext)
}


export function ResumeProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <ResumeContext.Provider value={{ state, dispatch }}>
            {children}
        </ResumeContext.Provider>
    )

}