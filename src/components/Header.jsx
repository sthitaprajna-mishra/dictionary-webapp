// MUI
import Switch from "@mui/material/Switch";

//assets
import logo from "../assets/logo.svg";
import iconmoon from "../assets/icon-moon.svg";

const Header = () => {
  return (
    <div className="mt-4 flex justify-between">
      <img src={logo} alt="logo" />
      {/* Dark/Light Mode Container */}
      <div className="border border-l-gray-300 border-y-0 border-r-0 w-24 flex items-center justify-end space-x-1">
        {/* Toggle Container */}
        <Switch defaultChecked />
        <img className="w-6 h-6" src={iconmoon} alt="light mode moon icon" />
      </div>
    </div>
  );
};

export default Header;
