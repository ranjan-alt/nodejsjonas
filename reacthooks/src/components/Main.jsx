import React from "react";
import { ThemeProvider } from "../context/ThemeContextTest";
const Main = () => {
  return (
    <ThemeProvider>
      <h1>Hello</h1>
    </ThemeProvider>
  );
};

export default Main;
