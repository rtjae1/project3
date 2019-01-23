import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCm_-K_oCy0zPOSWyIsm6LBJsZDxgSdKUY",
  authDomain: "mealplan5.firebaseapp.com",
  databaseURL: "https://mealplan5.firebaseio.com",
  projectId: "mealplan5",
  storageBucket: "",
  messagingSenderId: "311195796187"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
