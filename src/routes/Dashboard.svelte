<script>
    import {onMount} from 'svelte';
    import MatchGrid from "../components/MatchGrid.svelte";
    import OnboardDash from '../components/OnboardDash.svelte';
    import router from 'page';
    import { user } from '../auth/index';
    import Loader from "../components/Loader.svelte";

    // Declare states
    let retMatches;
    let currentuser;

    // Declare reactive statements for redirection if user is not logged in
    $: {
      currentuser = $user;
      if(!currentuser) {
        router.redirect("/login")
      } else{
        onMount(async () => {
          const res = await fetch("/api/getMatches?uid=" + currentuser.uid);
          const matchesRet = await res.json();
          retMatches = matchesRet;
        });
      }
    }
</script>
  
  <main>
    {#if !currentuser}
      <Loader />
    {:else}
      {#if !currentuser}
        <MatchGrid matches={retMatches} />
      {:else}
        <OnboardDash />
      {/if}
    {/if}
  </main>
