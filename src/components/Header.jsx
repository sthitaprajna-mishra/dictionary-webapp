// React
import { useEffect, useState } from "react";

// MUI
import Switch from "@mui/material/Switch";

//assets
import logo from "../assets/logo.svg";
import iconmoon from "../assets/icon-moon.svg";
import iconmoondark from "../assets/icon-moon-dark.svg";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (
      theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      setChecked(true);
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setChecked(!checked);
  };

  return (
    <div className="mt-4 flex justify-between">
      <img src={logo} alt="logo" />
      {/* Dark/Light Mode Container */}
      <div className="border border-l-gray-300 border-y-0 border-r-0 w-24 flex items-center justify-end space-x-1">
        {/* Toggle Container */}

        <Switch checked={checked} onClick={toggleTheme} />

        {theme === "light" ? (
          <>
            <img
              className="w-6 h-6"
              src={iconmoon}
              alt="light mode moon icon"
            />
          </>
        ) : (
          <>
            <img
              className="w-6 h-6"
              src={iconmoondark}
              alt="dark mode moon icon"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
