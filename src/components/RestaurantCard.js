import { useContext } from "react";
import { CDN_LINK } from "../utility/constants";
import UserContext from "../utility/UserContext";

const Restaurant = (props) => {
  const { resData } = props; // destructring
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info; // destructring

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="bg-gray-100 w-[200px] min-h-[350px] shadow-lg p-5 m-4 rounded-md flex flex-col justify-between hover:bg-gray-400">
      <img
        className="rounded-md h-[150px] object-cover"
        alt="res-logo"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-bold py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const WithPromoted = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <Restaurant {...props}></Restaurant>
      </div>
    );
  };
};

export default Restaurant;
