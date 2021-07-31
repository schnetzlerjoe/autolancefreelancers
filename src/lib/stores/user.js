  
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { readable } from 'svelte/store';

const firebaseConfig = {
  apiKey: "AIzaSyDMcOBXFry4daxIxTMlJL5twW0aFqq-62E",
  authDomain: "autolance-617.firebaseapp.com",
  projectId: "autolance-617",
  appId: "1:218900921287:web:ef0384dc3215438bb6b7e2",
  measurementId: "G-13TQ6HPS8X",
  storageBucket: "autolance-617.appspot.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
   firebase.app();
}

const auth = firebase.auth();

export let user = readable(auth.currentUser, (set) => {
  auth.onAuthStateChanged(async function(user) {
    set(user)
  });
});