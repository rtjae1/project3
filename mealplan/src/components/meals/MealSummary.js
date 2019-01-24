import React from "react";

const MealSummary = ({ meal }) => {
  return (
    <div className="card z-depth-0 meal-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{meal.dayOfWeek}</span>
        <p>
          Posted by {meal.authorFirstName} {meal.authorLastName}
        </p>
        <p className="grey-text">January 23</p>
      </div>
    </div>
  );
};

export default MealSummary;
