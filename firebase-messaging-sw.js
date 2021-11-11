// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";;
import { getMessaging, onMessage, getToken } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js";
import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-sw.js";

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
console.log(messaging);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('firebase-messaging-sw.js')
        .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
            messaging.getToken({
                // add your VPAID key here
                vapidKey: 'BBb5qeb0CXwm4_tKD5lxcNaM6_jnID1rOESaJxgFLS0X6pm8Tns7VJRsaBZvxpvafSlsxjOBVTrnAwAw_Nh4I5Y'})
                .then((currentToken) => {
                    if (currentToken) {
                        //TODO: Send the token to your server and update the UI if necessary
                        console.log(currentToken);
                    } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            askForPermissionToReceiveNotifications();
        }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
    }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
    });
}

getToken(messaging, { vapidKey: 'BBb5qeb0CXwm4_tKD5lxcNaM6_jnID1rOESaJxgFLS0X6pm8Tns7VJRsaBZvxpvafSlsxjOBVTrnAwAw_Nh4I5Y' }).then((currentToken) => {
    if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});

onMessage(messaging, payload => {
    console.log('Message received. ', payload);
});

onBackgroundMessage(messaging, (payload) => {
console.log('[firebase-messaging-sw.js] Received background message ', payload);
// Customize notification here
const notificationTitle = 'Background Message Title';
const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
};

self.registration.showNotification(notificationTitle,
    notificationOptions);
});
