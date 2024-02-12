import { useRef } from "react"
import Input from "./Input"

const NewProject = ({ onAdd, onCancle }) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();


    const handleSave = () => {
        const enteredTtile = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;



        onAdd({                                //onAdd function me hmne ek object bna k send kar dia parent me is app.js 

            title: enteredTtile,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    return (
        <div className="newProject">
            <menu className="menu">
                <li><button onClick={onCancle}>Cancel</button></li>
                <li><button onClick={handleSave}>Save</button></li>
            </menu>
            <div className="list">
                <Input label="title" ref={title} />
                <Input label="description" textarea={true} ref={description} />
                <Input type="date" label="Due Date" ref={dueDate} />
            </div>
        </div>
    )
}



export default NewProject