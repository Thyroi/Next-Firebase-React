import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDgPz2aJTbY92nzedtlZiUh3KuLiX27P6k",
    authDomain: "inextfirebase.firebaseapp.com",
    projectId: "inextfirebase",
    storageBucket: "inextfirebase.appspot.com",
    messagingSenderId: "727302922818",
    appId: "1:727302922818:web:b2943cecfc9d627e8743db"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const  storage = firebase.storage();
