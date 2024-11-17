import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utility/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItem);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h3 className="font-bold">cart</h3>
      <button
        className=" p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length > 0 ? (
          <ItemList data={cartItems} />
        ) : (
          <p>Please add food in cart and feel happy.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
