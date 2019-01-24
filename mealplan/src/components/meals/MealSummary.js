import React from "react";
import moment from "moment";

const MealSummary = ({ meal }) => {
  return (
    <div className="card z-depth-0 meal-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{meal.dayOfWeek}</span>
        <p>
          Posted by {meal.authorFirstName} {meal.authorLastName}
        </p>
        <p className="grey-text">
          {moment(meal.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default MealSummary;
