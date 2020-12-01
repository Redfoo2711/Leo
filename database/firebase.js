import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBczWjvSKEErNradgYe6xAk-9lTgA9eynk",
  authDomain: "sm42l-3e10e.firebaseapp.com",
  databaseURL: "https://sm42l-3e10e.firebaseio.com",
  projectId: "sm42l-3e10e",
  storageBucket: "sm42l-3e10e.appspot.com",
  messagingSenderId: "294912615478",
  appId: "1:294912615478:web:8a3fdd0a8aba27bbc82497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
