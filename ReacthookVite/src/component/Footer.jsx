import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1 style={{ backgroundColor: theme === "light" ? "red" : "green" }}>
        Footer
      </h1>
      <button onClick={() => toggleTheme()}>Toggle</button>
    </>
  );
};

export default Footer;
