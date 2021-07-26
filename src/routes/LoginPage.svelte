<script>
  import Login from "../components/Login.svelte";
  import router from 'page';
  import { user } from '../auth/index';

  // Declare states
  let currentuser;

  // Declare reactive statements for redirection if user is not logged in
  $: {
    currentuser = $user;
    if(currentuser) {
      router.redirect("/")
    }
  }
</script>
  
  <main>
    <Login />
  </main>
  
  <style>
  :global(body) {
    background-color: #011028;
  }
  </style>
  