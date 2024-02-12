import logo from './logo.svg';
import './App.css';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';
import Player from './components/Player';
import PlayerRef from './components/PlayerRef';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // that means we are neither adding nor any project is selected but once we add it will be changed to null
    projects: []
  })

  function handleStartAddProejct() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()

      }
      return {
        ...prevState, projects: [...prevState.projects, newProject], selectedProjectId: undefined
      }
    })
  }

  console.log(projectState)


  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancle={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProejct} />

  }
  return (
    // <main className="mainclass">
    //   <ProjectsSidebar onStartAddProject={handleStartAddProejct} projects={projectState.projects} />
    //   {content}
    // </main>
    <>
      {/* <Player /> */}
      <PlayerRef />
    </>
  );
}

export default App;
