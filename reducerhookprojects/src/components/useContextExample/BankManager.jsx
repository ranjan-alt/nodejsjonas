
import React, { createContext } from 'react';
import { useReducer } from "react";
import AppProvider from './AppProvider';

export const initialState = {

    name: "",
    email: ""
}

export const AppContext = createContext()

export function reducer(state, action) {
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
