import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCjCwDrxM5XCSTAjCSRQnYUbro1iHuRINA",
  authDomain: "e-ride-2243e.firebaseapp.com",
  projectId: "e-ride-2243e",
  storageBucket: "e-ride-2243e.appspot.com",
  messagingSenderId: "944004457681",
  appId: "1:944004457681:web:16146e4a7739125d5fd1f0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
