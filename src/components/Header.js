import { LOGO_URL } from "../utility/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utility/useNetworkStatus";
import UserContext from "../utility/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  const isOnine = useNetworkStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.cartItem);
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
          <li className="p-2 m-2">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
