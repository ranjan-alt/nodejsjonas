import Button from "./Button"

const NoProjectSelected = ({ onStartAddProject }) => {
    return (
        <>
            <h1>No Project selected</h1>
            <Button onClick={onStartAddProject}>Create a new one</Button>
        </>
    )
}



export default NoProjectSelected