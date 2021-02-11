import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlNyGhWS168aJKz1YC95goRa9Xh6OcHpc",
    authDomain: "portal-53c8e.firebaseapp.com",
    databaseURL: "https://portal-53c8e.firebaseio.com",
    projectId: "portal-53c8e",
    storageBucket: "portal-53c8e.appspot.com",
    messagingSenderId: "900929837936",
    appId: "1:900929837936:web:53047cd839a3e874510db5",
    measurementId: "G-D0V5R29LDP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;