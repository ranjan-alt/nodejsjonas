import { useReducer } from "react";
import { AppContext } from "../useContextExample/BankManager";
import { initialState, reducer } from "../useContextExample/BankManager";


function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );

}



export default AppProvider