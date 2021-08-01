import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { readable } from 'svelte/store';

const firebaseConfig = {
  apiKey: "AIzaSyDMcOBXFry4daxIxTMlJL5twW0aFqq-62E",
  authDomain: "autolance-617.firebaseapp.com",
  projectId: "autolance-617",
  appId: "1:218900921287:web:ef0384dc3215438bb6b7e2",
  measurementId: "G-13TQ6HPS8X",
  storageBucket: "autolance-617.appspot.com"
};

var app;
getApps().length === 0 ? app = initializeApp(firebaseConfig) : app = getApp();
const auth = getAuth(app);

export let user = readable(null, (set) => {
  onAuthStateChanged(auth, async function(user) {
    set(user)
  });
});