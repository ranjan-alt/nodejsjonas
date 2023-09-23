// THIS IS INITIAL SETUP FOR useReducer hook 

import { useReducer } from "react";


//step 2 lets create a reducer function outside of the state 
// where does this function gets called 
function reducer(state, action) {
    //here initial state is zero
    // console.log(state, action)  //log values is 0 1  1 1 2 1
    // return state + action    simply adding the action in initial state 
    if (action.type === "increment") {
        return state + action.payload
    }
    if (action.type === "decrement") {
        return state - action.payload
    }
}

function DateCounter() {
    // step 1
    const [count, dispatch] = useReducer(reducer, 0)



    const increment = function () {
        // dispatch(1)  // this dispatch becomes an action 
        // but we have some defined rules to pass object in dispatch function
        dispatch({ type: "increment", payload: 1 })
    }

    const decrement = function () {
        // dispatch(-1)
        dispatch({ type: "decrement", payload: -1 })
    }
    return (
        <>
            {count}
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>Subtract</button>
        </>
    )
}

export default DateCounter 