import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1
        style={{
          backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
          color: theme === "light" ? "#333" : "#f0f0f0",
          padding: "20px",
        }}
      >
        Header
      </h1>
      <button
        onClick={() => toggleTheme()}
        style={{
          backgroundColor: theme === "light" ? "#333" : "#f0f0f0",
          color: theme === "light" ? "#f0f0f0" : "#333",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Header;
