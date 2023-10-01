// import logo from './logo.svg';
import './App.css';
import AppProvider from './components/useContextExample/AppProvider';
import Customer from './components/useContextExample/Customer';
// import { ResumeProvider } from './components/reusmeProject/resumecontext';
// import PersonalInfo from './components/reusmeProject/PersonalInfo';
// import UseReducerExample from './components/useReduerHookSimple/UsereducerExample';

function App() {
  return (
    // <ResumeProvider>
    //   <div className="App">
    //     <PersonalInfo />
    //   </div>
    // </ResumeProvider>

    <div className="App">
      {/* child component */}
      {/* <UseReducerExample /> */}
      <AppProvider>
        <Customer />
      </AppProvider>

    </div>

  );
}

export default App;
