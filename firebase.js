// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDBqig6AHTS3UcxZ2dx19UF0qDQ3shvqPg",
    authDomain: "envitweet.firebaseapp.com",
    databaseURL: "https://envitweet.firebaseio.com",
    projectId: "envitweet",
    storageBucket: "envitweet.appspot.com",
    messagingSenderId: "445301845723",
    appId: "1:445301845723:web:d719f6bc73e12edabb66fe",
    measurementId: "G-N4FDJ95W8S"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;
