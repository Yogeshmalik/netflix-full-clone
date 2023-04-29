// import firebase from "firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYmuI9to2yhIz5luegczDU19eeaRNOPWI",
  authDomain: "netflix-full-clone-ysm.firebaseapp.com",
  projectId: "netflix-full-clone-ysm",
  storageBucket: "netflix-full-clone-ysm.appspot.com",
  messagingSenderId: "653297183330",
  appId: "1:653297183330:web:4aca8dd3818fa41b02ff3b",
  measurementId: "G-JZ5PD6ZPFZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
