// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZuvvWVlt97hUyZM1i0ton4Nx7JEsAjkg",
  authDomain: "revolution-2021-11-10.firebaseapp.com",
  projectId: "revolution-2021-11-10",
  storageBucket: "revolution-2021-11-10.appspot.com",
  messagingSenderId: "41377889603",
  appId: "1:41377889603:web:fd66b94bff039029eb43f6",
  measurementId: "G-7TJEH5CPCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging(app);
getToken(messaging, { vapidKey: 'BBb5qeb0CXwm4_tKD5lxcNaM6_jnID1rOESaJxgFLS0X6pm8Tns7VJRsaBZvxpvafSlsxjOBVTrnAwAw_Nh4I5Y' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    document.getElementById('token').textContent = currentToken;
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});