import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmxzJjeOWcC9qOyhmvem-HeLwOahYXOMI",
  authDomain: "photogallery-8af5b.firebaseapp.com",
  projectId: "photogallery-8af5b",
  storageBucket: "photogallery-8af5b.appspot.com",
  messagingSenderId: "663744057824",
  appId: "1:663744057824:web:6b28e2419a9d5b7479db85"
});



const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, firebase, timestamp };