// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOBfpW-pG5p-23dTjz60we-86n0VMNKX4",
  authDomain: "fir-chat-59cfb.firebaseapp.com",
  projectId: "fir-chat-59cfb",
  storageBucket: "fir-chat-59cfb.firebasestorage.app",
  messagingSenderId: "588123460667",
  appId: "1:588123460667:web:aac7bb3b5e512dbdd1381e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');