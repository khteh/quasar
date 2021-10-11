// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDML0CfKGG0Y23u132FxIbpXtCI8knPHRg",
  authDomain: "khteh-b08b5.firebaseapp.com",
  projectId: "khteh-b08b5",
  storageBucket: "khteh-b08b5.appspot.com",
  messagingSenderId: "922780783713",
  appId: "1:922780783713:web:1eb6620f816073021a8620",
  measurementId: "G-2DDNJQYVS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);