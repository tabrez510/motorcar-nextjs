"use client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging"; 

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URI,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

let messaging;
// export const messaging = getMessaging(app);

if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  // Dynamically import only on the client
  import("firebase/messaging").then((firebaseMessaging) => {
    const { getMessaging } = firebaseMessaging;
    messaging = getMessaging(app);
  });
}

export const getFirebaseMessaging = () => {
  if (!messaging) {
    throw new Error("Firebase Messaging not initialized or called on server.");
  }
  return messaging;
};

export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const { getToken } = await import("firebase/messaging");
      const messaging = getFirebaseMessaging();
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });
      return token;
    }
  } catch (error) {
    console.error("FCM Token Error:", error);
    return null;
  }
};