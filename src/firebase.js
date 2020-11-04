import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCvHJV2MRt7xmTu7DOjqQsKzZuvlYyhPs",
  authDomain: "facebook-messenger-clone-7318c.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-7318c.firebaseio.com",
  projectId: "facebook-messenger-clone-7318c",
  storageBucket: "facebook-messenger-clone-7318c.appspot.com",
  messagingSenderId: "750350540256",
  appId: "1:750350540256:web:5839ff5875003050511f85",
  measurementId: "G-7104S0THDP",
});

const db = firebaseApp.firestore();

export default db;
