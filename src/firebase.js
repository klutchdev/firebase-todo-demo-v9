import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA721K04b3ZXqAXwPW6Rwz1IoAMNSCID7I",
  authDomain: "fir-v9-demo.firebaseapp.com",
  projectId: "fir-v9-demo",
  storageBucket: "fir-v9-demo.appspot.com",
  messagingSenderId: "383053642068",
  appId: "1:383053642068:web:5590ef7c45252f412eb0c1",
  measurementId: "G-QLJS9Q1GYH",
};
const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);

export const auth = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);
export const firestore = getFirestore(firebaseApp);

/*===================================================================//
  Firestore references
//===================================================================*/
export const todosRef = collection(firestore, "todos");
export const usersRef = collection(firestore, "users");

/*===================================================================//
  Auth references
//===================================================================*/
// Google
const provider = new GoogleAuthProvider();
export const googleSignIn = async () => {
  await signInWithPopup(auth, provider);
};
export const logOut = () => signOut(auth);
export const currentUser = auth.currentUser;
