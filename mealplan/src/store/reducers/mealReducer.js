const initState = {
  meals: [
    { id: "1", dayOfWeek: "Sunday", meal: "Steak and Potatoes" },
    { id: "2", dayOfWeek: "Monday", meal: "Chicken Ceaser Salad" },
    { id: "3", dayOfWeek: "Tuesday", meal: "Grilled Cheese and Tomato Soup" }
  ]
};

const mealReducer = (state = initState, action) => {
  return state;
};

export default mealReducer;
