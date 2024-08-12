import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4wMrAH_rx3GG1tFMGG7pcz2yx23DGMlI",
  authDomain: "miniblog-sosovi.firebaseapp.com",
  projectId: "miniblog-sosovi",
  storageBucket: "miniblog-sosovi.appspot.com",
  messagingSenderId: "949761087432",
  appId: "1:949761087432:web:15fd0ea0b7801387ad52fd",
  measurementId: "G-0YKXQS4BWM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);