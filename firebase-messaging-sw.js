import { getMessaging } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js";
import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-sw.js";

const messaging = getMessaging();
// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });