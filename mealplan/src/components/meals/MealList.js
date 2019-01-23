import React from "react";
import MealSummary from "./MealSummary";

const MealList = () => {
  return (
    <div className="meal-list section">
      <MealSummary />
      <MealSummary />
      <MealSummary />
      <MealSummary />
    </div>
  );
};

export default MealList;
