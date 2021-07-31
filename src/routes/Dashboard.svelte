<script>
    import {onMount} from 'svelte';
    import MatchGrid from "../lib/components/MatchGrid.svelte";
    import OnboardDash from '../lib/components/OnboardDash.svelte';
    import Loader from "../lib/components/Loader.svelte";
    import { user } from '../lib/stores/user';
    import firebase from 'firebase/app';

    const firebaseConfig = {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
      storageBucket: process.env.storageBucket
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }

    let error = null;

    const loginHandler = async event => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value
      try {
        error = null;
        await loginWithEmailPassword(email, password);
      } catch (err) {
        error = err;
      }
    };

    // Declare states
    let retMatches;
    let currentuser;

    $: {currentuser = $user}
</script>
  
  <main>
    {#if currentuser}
      <OnboardDash currentuser={currentuser}/>
    {:else}
      <Loader />
    {/if}
  </main>

<style>
  main {
    max-width: 90%;
  }
</style>