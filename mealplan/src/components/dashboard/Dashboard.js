import React, { Component } from "react";
import Notifications from "./Notifications";
import MealList from "../meals/MealList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { meals } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MealList meals={meals} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { meals: state.meal.meals };
};

export default connect(mapStateToProps)(Dashboard);
