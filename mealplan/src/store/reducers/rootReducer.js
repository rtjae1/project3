import authReducer from "./authReducer";
import mealReducer from "./mealReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  meal: mealReducer,
  firestore: firestoreReducer
});

export default rootReducer;
