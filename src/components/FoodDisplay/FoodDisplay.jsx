import React, { useContext } from "react";
import { StoreContext } from "../../context/storecontext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || item.category === category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                description={item.description}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
