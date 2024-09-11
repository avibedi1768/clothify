import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// import firebase from 'firebase/app';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBRzAXZN5aaJSlCtWMGjvL9aTn9f2TOUY4",
  authDomain: "clothify-dfb82.firebaseapp.com",
  projectId: "clothify-dfb82",
  storageBucket: "clothify-dfb82.appspot.com",
  messagingSenderId: "26000000508",
  appId: "1:26000000508:web:a3f61a25acf44c7e90de79",
  measurementId: "G-PHYDQK3L31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// export { database, ref, set };

export const database = getDatabase(app)
// const database = app.database();
// export { database };