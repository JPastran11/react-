  
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAZM5sLZU0kW7ZrT0OCVm5fVVbzcm9WT9Y",
  authDomain: "proyecto-coderhouse-camada8920.firebaseapp.com",
  projectId: "proyecto-coderhouse-camada8920",
  storageBucket: "proyecto-coderhouse-camada8920.appspot.com",
  messagingSenderId: "494903856613",
  appId: "1:494903856613:web:4827301ae29f193f59b30c"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)