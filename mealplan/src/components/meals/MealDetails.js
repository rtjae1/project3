import React from "react";

const MealDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section-meal-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Meal Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus nemo illo eveniet accusantium aspernatur nesciunt
            molestiae earum harum reiciendis, iste aliquam, debitis fuga
            molestias non delectus eius cupiditate blanditiis.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by wRyan</div>
          <div>January 23</div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
