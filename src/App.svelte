<script>
  import router from 'page';

  //Firebase Init and Imports
  import firebase from "firebase/app";
  import "firebase/analytics";
  import "firebase/auth";
  import { user } from './auth/index';

  // Include our Routes
  import LoginPage from './routes/LoginPage.svelte';
  import SignupPage from './routes/SignupPage.svelte';
  import Dashboard from './routes/Dashboard.svelte';
  import Profile from './routes/Profile.svelte';
  import Settings from './routes/Settings.svelte';

  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  // Variables
  let page;
  let params;

  const firebaseConfig = {
    apiKey: "AIzaSyDMcOBXFry4daxIxTMlJL5twW0aFqq-62E",
    authDomain: "autolance-617.firebaseapp.com",
    databaseURL: "https://autolance-617.firebaseio.com",
    projectId: "autolance-617",
    storageBucket: "autolance-617.appspot.com",
    messagingSenderId: "218900921287",
    appId: "1:218900921287:web:ef0384dc3215438bb6b7e2",
    measurementId: "G-13TQ6HPS8X"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  // Login Page Route
  router('/login', () => (page = LoginPage))

  // Signup Page Route
  router('/signup', () => (page = SignupPage))

  // Profile Page Route
  router('/profile', () => (page = Profile))

  // Profile Page Route
  router('/settings', () => (page = Settings))

  // Dashboard Page Route, If No User Detected -> Send to Login
  router('/', () => (page = Dashboard))

  // If the user is not set, redirect to login
  if (typeof($user) == "undefined" || $user == null) {
    router.redirect('/login')
  } else {
    page = Dashboard
  }

  // Set up the router to start and actively watch for changes
  router.start()
</script>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
  />
  <script src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</svelte:head>

<Header user={user}/>
  <svelte:component this="{page}" params="{params}" />
<Footer user={user}/>

<style>
  :global(body) {
    background-color: #011028;
    min-height: 100vh;
  }
  :global(main) {
    max-width: 90%;
    min-width: 80%;
  }
</style>