import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowItem }) => {
  const handleClick = () => {
    setShowItem();
  };
  return (
    <div>
      <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4">
        <div
          className="justify-between flex cursor-pointer "
          onClick={handleClick}
        >
          <span className="font-bold">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {showItem && <ItemList data={data.itemCards}></ItemList>}
      </div>
    </div>
  );
};
export default RestaurantCategory;
