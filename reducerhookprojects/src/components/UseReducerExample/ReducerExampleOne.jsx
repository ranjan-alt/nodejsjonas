
import { useReducer } from "react"
import { useState } from "react"

const reducer = (state, action) => {
    console.log(state, "state")
    switch (action.type) {
        case "Set_field":
            return { ...state, [action.name]: action.value }
        default:
            return state
    }
}

const ReducerExampleOne = () => {
    const defaultValue = {
        name: "",
        email: "",
        phoneno: ""
    }


    // using useState HOOK
    // const [user, setUser] = useState(defaultValue)
    // console.log(user)

    //using useReducerHook

    const [user, dispatch] = useReducer(reducer, defaultValue)
    console.log(user)

    const onValueChange = (e) => {
        const { name, value } = e.target
        // console.log({ [e.target.name]: e.target.value })
        // setUser({ ...user, [name]: value })
        dispatch({ type: "Set_field", name, value })

    }

    return (
        <>
            <form >
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" onChange={(e) => onValueChange(e)} />
                <p>{user.name}</p>
                <label>Email</label>
                <input type="text" onChange={(e) => onValueChange(e)} name="email"></input>
                <p>{user.email}</p>
                <label>Phone No</label>
                <input type="number" onChange={(e) => onValueChange(e)} name="phoneno"></input>
                <p>{user.phoneno}</p>

            </form >
        </>
    )
}



export default ReducerExampleOne