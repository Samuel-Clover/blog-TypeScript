import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKED,
  messagingSenderId: process.env.MESSAGIN_SENDER_ID,
  appId: process.env.API_ID
};
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const storage = firebase.storage();
  export { firebase, auth, firestore, storage}