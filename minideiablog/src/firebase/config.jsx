// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4wMrAH_rx3GG1tFMGG7pcz2yx23DGMlI",
  authDomain: "miniblog-sosovi.firebaseapp.com",
  projectId: "miniblog-sosovi",
  storageBucket: "miniblog-sosovi.appspot.com",
  messagingSenderId: "949761087432",
  appId: "1:949761087432:web:15fd0ea0b7801387ad52fd",
  measurementId: "G-0YKXQS4BWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);