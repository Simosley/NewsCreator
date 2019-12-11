import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCanmQKl0jE-RBEXrmx3b1W8bBWdXtRhok",
    authDomain: "net-ninja-marioplan-681d2.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-681d2.firebaseio.com",
    projectId: "net-ninja-marioplan-681d2",
    storageBucket: "net-ninja-marioplan-681d2.appspot.com",
    messagingSenderId: "92098522557",
    appId: "1:92098522557:web:08e30543aad3fa1223b6d4",
    measurementId: "G-79W8S24VSN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({})


  export default firebase