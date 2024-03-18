import React from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContextTest";
const Main = () => {
  return (
    <ThemeProvider>
      <h1>Hello</h1>
    </ThemeProvider>
  );
};

export default Main;