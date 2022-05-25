import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//    apiKey: "AIzaSyBRgySbxL4JeaAmZoKFw2ePirPj8OvslVk",
//    authDomain: "chat-6ac8b.firebaseapp.com",
//    projectId: "chat-6ac8b",
//    storageBucket: "chat-6ac8b.appspot.com",
//    messagingSenderId: "380401787169",
//    appId: "1:380401787169:web:a1ebca1a96fee69b5ede60",
//    measurementId: "G-EC7DYVKQR9",
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

firebase.initializeApp({
   apiKey: "AIzaSyBRgySbxL4JeaAmZoKFw2ePirPj8OvslVk",
   authDomain: "chat-6ac8b.firebaseapp.com",
   projectId: "chat-6ac8b",
   storageBucket: "chat-6ac8b.appspot.com",
   messagingSenderId: "380401787169",
   appId: "1:380401787169:web:a1ebca1a96fee69b5ede60",
   measurementId: "G-EC7DYVKQR9",
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Context.Provider value={{ firestore, auth, firebase }}>
         <App />
      </Context.Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
