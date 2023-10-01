import { useContext } from "react"
import { AppContext } from "./BankManager"

function Customer() {
    // const [state, dispatch] = useReducer(reducer, initialState)
    const { state, dispatch } = useContext(AppContext)


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



export default Customer