import { LOGO_URL } from "../utility/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utility/useNetworkStatus";
const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  const isOnine = useNetworkStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {isOnine ? "Online" : "Offline"} {isOnine ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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
