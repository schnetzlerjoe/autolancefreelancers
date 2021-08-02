import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { readable } from 'svelte/store';
import { firebaseConfig } from './config';

console.log(firebaseConfig)

var app;
getApps().length === 0 ? app = initializeApp(firebaseConfig) : app = getApp();
const auth = getAuth(app);

export let user = readable(null, (set) => {
  onAuthStateChanged(auth, async function(user) {
    set(user)
  });
});