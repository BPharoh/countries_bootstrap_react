// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDD2vF-9RJGYs-Rl5g6MUNb80OMZrLBnJk",
  authDomain: "countries-bootstrap-typescript.firebaseapp.com",
  projectId: "countries-bootstrap-typescript",
  storageBucket: "countries-bootstrap-typescript.appspot.com",
  messagingSenderId: "459030578102",
  appId: "1:459030578102:web:a37f8a62596bbb0d49b717"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password )
        const user = res.user
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
