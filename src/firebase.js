import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0TF8k0CzwQkKBjlAG3HhUwQrDtY4anjs",
  authDomain: "greensight-cfef4.firebaseapp.com",
  databaseURL: "https://greensight-cfef4.firebaseio.com",
  projectId: "greensight-cfef4",
  storageBucket: "greensight-cfef4.appspot.com",
  messagingSenderId: "93130497929",
  appId: "1:93130497929:web:2863b801de316b03388b58"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
export const database = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
