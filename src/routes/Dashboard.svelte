<script>
    import {onMount} from 'svelte';
    import MatchGrid from "../components/MatchGrid.svelte";

    let retMatches;
    let user = "nQlctvrF2SYFplFJ3viagqtq8H82";

    onMount(async () => {
        const res = await fetch("/api/getMatches?uid=" + user);
        const matchesRet = await res.json();
        retMatches = matchesRet;
    });
</script>
  
  <main>
    <MatchGrid matches={retMatches} />
  </main>
