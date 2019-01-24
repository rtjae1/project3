const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from wRyan!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

exports.mealCreated = functions.firestore
  .document("meals/{mealId}")
  .onCreate(doc => {
    const meal = doc.data();
    const notification = {
      content: "Added a new meal",
      user: `${meal.authorFirstName} ${meal.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });
