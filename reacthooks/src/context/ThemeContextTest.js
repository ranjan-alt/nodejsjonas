import React, { createContext, useContext, useState } from "react";

// Create a context
const ThemeContext = createContext();

// Create a component that provides the context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => console.log(prev)(prev == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext }; // Correct export syntax
