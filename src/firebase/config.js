import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
//your firebase api//
});



const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, firebase, timestamp };
