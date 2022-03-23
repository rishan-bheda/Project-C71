import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBqnHeImOhQnFlBMTK6Ol8V2UBh2hYzNnE",
    authDomain: "e-ride-429a6.firebaseapp.com",
    projectId: "e-ride-429a6",
    storageBucket: "e-ride-429a6.appspot.com",
    messagingSenderId: "510177768294",
    appId: "1:510177768294:web:fbdea95d7feacc899e8ea7"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
