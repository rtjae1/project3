import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const MealDetails = props => {
  const { meal, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (meal) {
    return (
      <div className="container section meal-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{meal.dayOfWeek}</span>
            <p>{meal.meal}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {meal.authorFirstName} {meal.authorLastName}
            </div>
            <div>{moment(meal.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading meals...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const meals = state.firestore.data.meals;
  const meal = meals ? meals[id] : null;
  return {
    meal: meal,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "meals" }])
)(MealDetails);
