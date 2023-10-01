///reducer.js

import { useReducer, useState } from "react"

const InitialState = {
    isAuthenticated: false,
    name: ""
}


function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                isAuthenticated: true,
                name: action.payload
            }

        case "LOGOUT":
            return {
                isAuthenticated: false,
                name: ""
            }

        default:
            return state
    }
}


const Login = () => {
    const [state, dispatch] = useReducer(reducer, InitialState)
    const [inputName, setInputName] = useState("")

    function login() {
        dispatch({ type: "LOGIN", payload: inputName })
    }

    function logout() {
        dispatch({ type: "LOGOUT" })
    }

    function handleNameChange(e) {
        setInputName(e.target.value)
    }


    return (
        <>
            <h1>Login functionality</h1>

            {state.isAuthenticated ? <div>
                <p>Welcome! {state.name}</p>

                <button onClick={logout}>Logout</button>
            </div> : <div>
                <p>Please log in.</p>
                <input
                    type="text"
                    value={inputName}
                    onChange={handleNameChange} // Update the state as the user types
                />
                <button onClick={login}>Login</button>
            </div>}



        </>
    )
}

export default Login