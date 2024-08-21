import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import { NON_VEG_URL, VEG_URL } from "../utility/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { text } = resInfo?.cards[0]?.card?.card;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

  return (
    <div className="bg-gray-700 m-10 p-5 rounded-lg shadow-2xl">
      <h1 className="font-bold text-white text-3xl mr-3 p-4 inline-flex">
        {text} <h2 className="font-medium text-neutral-100 mx-2">Menu</h2>
      </h1>

      <ul>
        {itemCards.map((item) => (
          <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100"></dl>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <li
                class="text-sm font-medium leading-6 text-neutral-200 inline-flex"
                key={item.card.info.id}
              >
                {item.card.info.name} -{" Rs."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
                {"   "}
                {
                  <img
                    className="w-7"
                    src={
                      item.card.info.itemAttribute.vegClassifier === "VEG"
                        ? VEG_URL
                        : NON_VEG_URL
                    }
                  />
                }
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
