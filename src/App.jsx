// packages
import { useState } from "react";
import Switch from "@mui/material/Switch";

// assets
import logo from "./assets/logo.svg";
import iconmoon from "./assets/icon-moon.svg";

function App() {
  const [toggleStyle, setToggleStyle] = useState("left-0.5");
  const label = "Yes";

  const handleToggle = () => {
    if (toggleStyle === "left-0.5") {
      setToggleStyle("right-0.5");
    } else {
      setToggleStyle("left-0.5");
    }
  };

  return (
    <>
      {/* Wrapper */}
      <div className="border-2 border-orange-600 min-h-screen grid grid-cols-12">
        {/* Container */}
        <div className="border-2 border-green-600 col-span-12 mx-4 md:col-start-3 md:col-span-8">
          {/* Header */}
          <div className="mt-4 flex justify-between">
            <img src={logo} alt="logo" />
            {/* Dark/Light Mode Container */}
            <div className="border border-l-gray-300 border-y-0 border-r-0 w-24 flex items-center justify-end space-x-1">
              {/* Toggle Container */}
              <Switch />
              <img
                className="w-6 h-6"
                src={iconmoon}
                alt="light mode moon icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
