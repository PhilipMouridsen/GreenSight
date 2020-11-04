  import * as firebase from "firebase/app";
  import 'firebase/storage';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBVvRLKNF2wqtVze6tbEov0qdlzHzaXkG4",
    authDomain: "greensight-f2341.firebaseapp.com",
    databaseURL: "https://greensight-f2341.firebaseio.com",
    projectId: "greensight-f2341",
    storageBucket: "greensight-f2341.appspot.com",
    messagingSenderId: "671685806135",
    appId: "1:671685806135:web:5f64c18c2e21f96a4c17b2",
    measurementId: "G-RPFZ0Z8XBC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore(); 

export{projectFirestore, projectStorage};