// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFUusLwEyMWuu5-YsMhDr3cnw1W8gn2as",
  authDomain: "social-media-82aab.firebaseapp.com",
  projectId: "social-media-82aab",
  storageBucket: "social-media-82aab.appspot.com",
  messagingSenderId: "1042453105306",
  appId: "1:1042453105306:web:f748fbba50cbfa502aed23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();