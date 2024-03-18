import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextTest";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h1>Header</h1>
    </>
  );
};

export default Header;
