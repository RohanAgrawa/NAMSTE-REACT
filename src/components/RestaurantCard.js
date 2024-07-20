import { CDN_LINK } from "../utility/constants";

const Restaurant = (props) => {
  const { resData } = props; // destructring
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info; // destructring

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img alt="res-logo" src={CDN_LINK + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default Restaurant;
