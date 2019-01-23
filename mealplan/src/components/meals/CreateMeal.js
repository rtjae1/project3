import React, { Component } from "react";
import { connect } from "react-redux";
import { createMeal } from "../../store/actions/mealActions";

class CreateMeal extends Component {
  state = {
    dayOfWeek: "",
    meal: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createMeal(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken">Create Meal</h5>
          <div className="input-field">
            <label htmlFor="dayOfWeek">Day of Week</label>
            <input type="text" id="dayOfWeek" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="meal">Meal</label>
            <textarea
              id="meal"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMeal: meal => dispatch(createMeal(meal))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateMeal);
