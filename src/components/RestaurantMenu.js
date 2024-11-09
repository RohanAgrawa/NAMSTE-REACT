import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import { NON_VEG_URL, VEG_URL } from "../utility/constants";
import RestaurantCategory from "./RestaurantCategory ";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItem, setShowItem] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { text } = resInfo?.cards[0]?.card?.card;
  const { costForTwoMessage, avgRating, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {text} {}
      </h1>
      <p className="font-bold text-xl">
        {cuisines.join(",")} - {costForTwoMessage} -{" "}
        {avgRating >= 4 ? "👍" + avgRating : "👎" + avgRating}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card.title}
          showItem={index === showItem}
          setShowItem={(IsOpend) =>
            IsOpend ? setShowItem(null) : setShowItem(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
