<script>
  import router from 'page';

  // Include our Routes
  import LoginPage from './routes/LoginPage.svelte';
  import SignupPage from './routes/SignupPage.svelte';
  import Dashboard from './routes/Dashboard.svelte';
  import Profile from './routes/Profile.svelte';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  // Variables
  let page;
  let params;
  let user = "nQlctvrF2SYFplFJ3viagqtq8H82";

  // Login Page Route
  router('/login', () => (page = LoginPage))

  // Signup Page Route
  router('/signup', () => (page = SignupPage))

  // Profile Page Route
  router('/profile', () => (page = Profile))

  // Dashboard Page Route, If No User Detected -> Send to Login
  router('/', () => {
    // If the user is not set, redirect to login
    if (! user) {
      router.redirect('/login')
  }
    page = Dashboard
  })

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