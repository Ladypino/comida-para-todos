import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNMunQnLexkSvNVQZJucliLe0B4O5eTgs",
  authDomain: "comida-para-todos-28f10.firebaseapp.com",
  databaseURL: "https://comida-para-todos-28f10.firebaseio.com",
  projectId: "comida-para-todos-28f10",
  storageBucket: "comida-para-todos-28f10.appspot.com",
  messagingSenderId: "438782555153",
  appId: "1:438782555153:web:0baaf0e56c0b0bdb60adb0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();


export {db, auth}


export {firebase};
