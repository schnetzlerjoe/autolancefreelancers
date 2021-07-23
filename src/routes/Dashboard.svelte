<script>
    import {onMount} from 'svelte';
    import MatchGrid from "../components/MatchGrid.svelte";
    import OnboardDash from '../components/OnboardDash.svelte';

    let retMatches;
    let user = {
      id: "nQlctvrF2SYFplFJ3viagqtq8H82",
      Vetted: false
    };

    onMount(async () => {
        const res = await fetch("/api/getMatches?uid=" + user.id);
        const matchesRet = await res.json();
        retMatches = matchesRet;
    });
</script>
  
  <main>
    {#if user.Vetted}
      <MatchGrid matches={retMatches} />
    {:else}
      <OnboardDash />
    {/if}
  </main>
