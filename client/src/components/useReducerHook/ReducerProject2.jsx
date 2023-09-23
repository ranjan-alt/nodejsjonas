
import { useReducer } from "react";

function reducer(state, action) {

    console.log(state, action);
    // return { count: 0, step: 1 };

    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "setStep":
            return { ...state, step: action.payload }
        case "reset":
            return { count: 0 }
        default:
            throw new Error("uncknown action")
    }
}

function DateCounter() {
    // step 1 
    const initialState = { count: 0, step: 1 }

    const [state, dispatch] = useReducer(reducer, initialState)

    const { count, step } = state



    const increment = function () {

        dispatch({ type: "increment" })
    }

    const decrement = function () {
        // dispatch(-1)
        dispatch({ type: "decrement" })
    }

    const reset = function () {
        dispatch({ type: "reset" })
    }
    const defineStep = function (e) {
        dispatch({ type: "setStep", payload: Number(e.target.value) })
    }
    return (
        <>
            <div>
                <input type="range" name="" id="" onChange={defineStep} />
                <span>{step}</span>
            </div>
            {count}
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>Subtract</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default DateCounter 