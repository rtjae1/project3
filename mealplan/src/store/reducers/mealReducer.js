const initState = {
  meals: [
    { id: "1", dayOfWeek: "Sunday", meal: "Steak and Potatoes" },
    { id: "2", dayOfWeek: "Monday", meal: "Chicken Ceaser Salad" },
    { id: "3", dayOfWeek: "Tuesday", meal: "Grilled Cheese and Tomato Soup" }
  ]
};

const mealReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_MEAL":
      console.log("created meal", action.meal);
      return state;
    case "CREATE_MEAL_ERROR":
      console.log("create meal error", action.err);
      return state;
    default:
      return state;
  }
};

export default mealReducer;
