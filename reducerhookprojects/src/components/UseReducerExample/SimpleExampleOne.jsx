
import { useState } from "react"

const ExampleOne = () => {
    const defaultValue = {
        name: "",
        email: "",
        phoneno: ""
    }

    const [user, setUser] = useState(defaultValue)
    console.log(user)

    const onValueChange = (e) => {
        const { name, value } = e.target
        console.log({ [e.target.name]: e.target.value })
        setUser({ ...user, [name]: value })

    }



    return (
        <>
            <form >
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" onChange={(e) => onValueChange(e)} />
                <label>Email</label>
                <input type="text" onChange={(e) => onValueChange(e)} name="email"></input>
                <label>Phone No</label>
                <input type="number" onChange={(e) => onValueChange(e)} name="phoneno"></input>

            </form >
        </>
    )
}



export default ExampleOne