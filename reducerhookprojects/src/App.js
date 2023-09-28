// import logo from './logo.svg';
import './App.css';
import { ResumeProvider } from './components/resumecontext';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <ResumeProvider>
      <div className="App">
        <PersonalInfo />
      </div>
    </ResumeProvider>
  );
}

export default App;
