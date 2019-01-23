export const createMeal = meal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make asynce call to databae
    const firestore = getFirestore();
    firestore
      .collection("meals")
      .add({
        ...meal,
        authorFirstName: "Ryan",
        authorLastName: "Jae",
        authorID: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_MEAL", meal });
      })
      .catch(err => {
        dispatch({ type: "CREATE_MEAL_ERROR", err });
      });
  };
};
