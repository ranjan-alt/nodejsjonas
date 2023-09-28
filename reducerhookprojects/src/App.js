// import logo from './logo.svg';
import './App.css';
import { ResumeProvider } from './components/reusmeProject/resumecontext';
import PersonalInfo from './components/reusmeProject/PersonalInfo';

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
