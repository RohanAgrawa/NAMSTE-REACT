import Restaurant from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.9352403&lng=77.624532"
    );
    const data = await response.json();

    setRestaurantList(
      data?.data?.success?.cards[1]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurantList(
      data?.data?.success?.cards[1]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return filteredRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurantList = restaurantList.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filteredRestaurantList);
            }}
          >
            Search Restaurant
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedRestaurantList = filteredRestaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setFilteredRestaurantList(topRatedRestaurantList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <Restaurant key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
