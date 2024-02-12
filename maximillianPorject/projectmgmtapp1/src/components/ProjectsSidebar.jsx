import Button from "./Button"

const ProjectsSidebar = ({ onStartAddProject, projects }) => {
    return (
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2>Your ProjectsSidebar</h2>
                <div>
                    <Button onClick={onStartAddProject}>+Add Project</Button>
                </div>
                <ul>
                    {projects.map(project => <li key={project.id}>
                        <button>{project.title}</button>
                    </li>)}
                </ul>
            </aside>
        </>
    )

}


export default ProjectsSidebar