import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIX8-enttdmJmnJuC3dgDEHKCyueUWnBQ",
  authDomain: "study-monk-82bfc.firebaseapp.com",
  projectId: "study-monk-82bfc",
  storageBucket: "study-monk-82bfc.appspot.com",
  messagingSenderId: "450760754934",
  appId: "1:450760754934:web:23cf78686c777356124ed7",
  measurementId: "G-R59KHGPYRP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;