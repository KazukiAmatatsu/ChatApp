import firebase from "firebase/app";
// import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVLxId-Ox_2r-xxvW0orVHSGuaafz0Gjw",
  authDomain: "chatapp-a76a3.firebaseapp.com",
  projectId: "chatapp-a76a3",
  storageBucket: "chatapp-a76a3.appspot.com",
  messagingSenderId: "357983150624",
  appId: "1:357983150624:web:8dc6399aee82cb2b879245",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
