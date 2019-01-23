export const createMeal = meal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make asynce call to databae
    const firestore = getFirestore();
    firestore.collection("meals").add({
      ...meal
    });
    dispatch({ type: "CREATE_MEAL", meal });
  };
};
