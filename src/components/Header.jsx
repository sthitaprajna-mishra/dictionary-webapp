// React
import { useEffect, useState } from "react";

// MUI
import Switch from "@mui/material/Switch";

//assets
import logo from "../assets/logo.svg";
import iconmoon from "../assets/icon-moon.svg";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mt-4 flex justify-between">
      <img src={logo} alt="logo" />
      {/* Dark/Light Mode Container */}
      <div className="border border-l-gray-300 border-y-0 border-r-0 w-24 flex items-center justify-end space-x-1">
        {/* Toggle Container */}

        {theme === "light" ? (
          <Switch onClick={toggleTheme} />
        ) : (
          <Switch defaultChecked onClick={toggleTheme} />
        )}

        <img className="w-6 h-6" src={iconmoon} alt="light mode moon icon" />
      </div>
    </div>
  );
};

export default Header;
