<script>
    import {onMount} from 'svelte';
    import MatchGrid from "../lib/components/MatchGrid.svelte";
    import OnboardDash from '../lib/components/OnboardDash.svelte';
    import Loader from "../lib/components/Loader.svelte";
    import { user } from '../lib/stores/user';

    // Declare states
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