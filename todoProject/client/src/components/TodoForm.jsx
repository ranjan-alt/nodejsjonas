import { useState } from "react"

const ToDoForm = () => {

    const [text, setText] = useState("") //text a constant variable hai and hme directly variable ko change nahi karna chahiye


    const onFormSubmit = () => {
        //onformsubmit pe hme data ko store karna hai database me nahi toh refresh krne pe delet ho jaega
    }

    const onInputChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }
    return (
        <form action="" className="form" onSubmit={onFormSubmit}>
            <input placeholder="Enter new Todo" className="input" onChange={onInputChange} />
        </form>
    )



}




export default ToDoForm