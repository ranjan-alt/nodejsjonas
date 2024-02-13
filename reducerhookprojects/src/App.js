// import logo from './logo.svg';
import './App.css';
// import Login from './components/LoginProjectReducer/Login';
import RapidApi from './components/RapidApi/RapidApi';
import ReducerExampleOne from './components/UseReducerExample/ReducerExampleOne';
import ExampleOne from './components/UseReducerExample/SimpleExampleOne';
// import AppProvider from './components/useContextExample/AppProvider';
// import Customer from './components/useContextExample/Customer';
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

    // <div className="App">
    //   {/* child component */}
    //   {/* <UseReducerExample /> */}
    //   <AppProvider>
    //     <Customer />
    //   </AppProvider>

    // </div>

    <div className="App">
      {/* <Login /> */}
      {/* <RapidApi /> */}
      {/* <ExampleOne /> */}
      <ReducerExampleOne />
    </div>

  );
}

export default App;
