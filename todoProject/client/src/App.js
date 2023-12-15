import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoForm />
    </div>
  );
}

export default App;
