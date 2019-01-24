export const createMeal = meal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make asynce call to databae
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    firestore
      .collection("meals")
      .add({
        ...meal,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorID,
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
