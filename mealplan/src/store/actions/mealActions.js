export const createMeal = meal => {
  return (dispatch, getState) => {
    //make asynce call to database
    dispatch({ type: "CREATE_MEAL", meal });
  };
};
