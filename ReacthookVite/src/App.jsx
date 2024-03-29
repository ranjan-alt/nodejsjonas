import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <>
        <Header />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
