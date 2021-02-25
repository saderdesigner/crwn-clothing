import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAXHWc79z0zLcUc4krzCHlf0fJy5OlzvH0",
  authDomain: "crwn-db-6f386.firebaseapp.com",
  projectId: "crwn-db-6f386",
  storageBucket: "crwn-db-6f386.appspot.com",
  messagingSenderId: "438631435",
  appId: "1:438631435:web:58c36a2ec1bfb5f6e91b0e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
