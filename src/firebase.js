import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-7JM4caUIIDY5luXz0KfG2wnuYcf2kCM",
  authDomain: "clone-22cb6.firebaseapp.com",
  projectId: "clone-22cb6",
  storageBucket: "clone-22cb6.appspot.com",
  messagingSenderId: "551827756675",
  appId: "1:551827756675:web:324e66f7867a50d594edb6",
  measurementId: "G-VRWQ8DR7NS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
