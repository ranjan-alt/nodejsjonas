import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AllUser from './components/AllUser';

//router config 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<CodeForInterview />} />
        <Route path="/alluser" element={<AllUser />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
