import React from "react";
import MealSummary from "./MealSummary";

const MealList = ({ meals }) => {
  return (
    <div className="meal-list section">
      {meals &&
        meals.map(meal => {
          return <MealSummary meal={meal} key={meal.id} />;
        })}
    </div>
  );
};

export default MealList;
