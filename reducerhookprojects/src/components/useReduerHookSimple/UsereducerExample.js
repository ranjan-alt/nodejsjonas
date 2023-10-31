


import React from 'react';
import { useReducer } from "react";

const initialState = {

    name: "",
    email: ""
}

function reducer(state, action) {
    switch (action.type) {
        case "updatename":
            return {
                ...state, name: action.payload
            }
        case "updateemail":
            return {
                ...state, email: action.payload
            }
        default:
            return state
    }
}




function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(dispatch, "dispatch")
    console.log(reducer, "reducer")

    function handleNameChange(e) {
        dispatch({ type: "updatename", payload: e.target.value })
    }

    function handleEmailChange(e) {
        dispatch({ type: "updateemail", payload: e.target.value })
    }
    return (
        <>
            <h2>
                Deep understanding of useReducer Hook
            </h2>
            <input type='text' value={state.name} onChange={handleNameChange} />
            <p>{state.name}</p>
            <input type='text' value={state.email} onChange={handleEmailChange} />
            <p>{state.email}</p>
        </>
    )
}



export default UseReducerExample