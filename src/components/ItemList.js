import { useDispatch } from "react-redux";
import { NON_VEG_URL, VEG_URL, CDN_LINK } from "../utility/constants";
import { addItem } from "../utility/cartSlice";
const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const addInCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border-b-2 text-left border-gray-200 p-2 m-2 hover:bg-gray-300 rounded-md"
        >
          <div className="w-9/12">
            {item.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
              <img className="w-4" src={NON_VEG_URL}></img>
            ) : (
              <img className="w-4" src={VEG_URL}></img>
            )}
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute inset-x-1.5 bottom-1">
              <button
                className="rounded-lg  bg-gray-100 text-green-900 font-bold mx-16 px-8 py-2 shadow-lg"
                onClick={() => {
                  addInCart(item);
                }}
              >
                Add
              </button>
            </div>
            {item.card.info.showImage && (
              <img
                src={CDN_LINK + item.card.info.imageId}
                className="w-full rounded-md"
              ></img>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
