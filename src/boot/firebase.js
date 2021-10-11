// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default async () => {
  return initializeApp(
  {
    apiKey: $API_KEY,
    authDomain: $AUTH_DOMAIN,
    projectId: $PROJECT_ID,
    storageBucket: $STORAGE_BUCKET,
    messagingSenderId: $MESSAGING_SENDER_ID,
    appId: $APP_ID,
    measurementId: $MEASUREMENT_ID
  });
};