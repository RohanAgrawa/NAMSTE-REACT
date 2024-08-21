import { LOGO_URL } from "../utility/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utility/useNetworkStatus";
const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  const isOnine = useNetworkStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="bg-neutral-100 w-[170px]">
        <img className="" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex ">
          <li className="p-2 m-2">
            {isOnine ? "Online" : "Offline"} {isOnine ? "🟢" : "🔴"}
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2">Cart</li>
          <button
            className="p-2 m-2"
            onClick={() => {
              authButton === "Login"
                ? setAuthButton("Logout")
                : setAuthButton("Login");
            }}
          >
            {authButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
