import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyBf0_SOFDeVCPv79bxyTmXtynUSNPvTkxY",
  authDomain: "buingocdung-8215a.firebaseapp.com",
  databaseURL: "https://buingocdung-8215a-default-rtdb.firebaseio.com",
  projectId: "buingocdung-8215a",
  storageBucket: "buingocdung-8215a.appspot.com",
  messagingSenderId: "978580604811",
  appId: "1:978580604811:web:915029a433f17604a4d18e",
  measurementId: "G-MW3T7EFYC0"
};

firebase.initializeApp(config);

export default firebase.database();
