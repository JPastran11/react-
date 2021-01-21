import firebase from "firebase/app";

import "firebase/firestore";

const miConfiguracion = {};

const app = firebase.initializeApp(miConfiguracion)

export const firestore =firebase.firestore(app)
