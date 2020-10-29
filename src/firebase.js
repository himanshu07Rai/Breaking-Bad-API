import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBiKoHiyKTNTQzSRC7oysQzF0PlHXLFoyA",
    authDomain: "react-crud-fb486.firebaseapp.com",
    databaseURL: "https://react-crud-fb486.firebaseio.com",
    projectId: "react-crud-fb486",
    storageBucket: "react-crud-fb486.appspot.com",
    messagingSenderId: "767021626602",
    appId: "1:767021626602:web:c6fee953d092c5c1a49393"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;