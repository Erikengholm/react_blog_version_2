import firebase from "firebase";
var config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAyooVNL_4keVvsAHK2zGuod03UksKjLzQ",
  authDomain: "car-database-c2c5c.firebaseapp.com",
  databaseURL: "https://car-database-c2c5c.firebaseio.com",
  projectId: "car-database-c2c5c",
  storageBucket: "car-database-c2c5c.appspot.com",
  messagingSenderId: "605463403199",
  appId: "1:605463403199:web:3fde78eaab9d08f71d840a",
  measurementId: "G-CG046FQQH3",
};

var FireBase = firebase.initializeApp(config);

const CarDataBase = FireBase.firestore();

export default CarDataBase;
