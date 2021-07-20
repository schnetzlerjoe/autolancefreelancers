<script>
  import router from 'page';

  // Include our Routes
  import LoginPage from './routes/LoginPage.svelte';
  import SignupPage from './routes/SignupPage.svelte';
  import Dashboard from './routes/Dashboard.svelte';
  import Profile from './routes/Profile.svelte';

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

<svelte:component this="{page}" params="{params}" />

<style>
  :global(body) {
    background-color: #011028;
  }
  :global(main) {
    max-width: 90%;
    min-width: 80%
  }
</style>