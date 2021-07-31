<script>
    import {onMount} from 'svelte';
    import OnboardDash from '../lib/components/OnboardDash.svelte';
    import Login from "../lib/components/Login.svelte";
    import { user } from '../lib/stores/user'

    // Declare states
    var retMatches;
    var currentuser;

    // Declare reactive statements for redirection if user is not logged in
    $: {
      currentuser = $user;
      if(currentuser) {
        onMount(async () => {
          const token = await currentuser.getIdToken();
          const res = await fetch("/api/getMatches", {
            headers: new Headers({
              'Authorization': token
            })
          });
          const matchesRet = await res.json();
          retMatches = matchesRet;
        });
      }
    }
</script>
  
  <main>
    {#if !currentuser}
      <Login />
    {:else}
      <OnboardDash />
    {/if}
  </main>

<style>
main {
  max-width: 90%;
}
</style>