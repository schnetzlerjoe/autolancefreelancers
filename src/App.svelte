<script>
  import { onMount } from "svelte";
  import MatchGrid from "./components/MatchGrid.svelte";
  import Login from "./components/Login.svelte";

  export let user;

  onMount(async () => {
    
  });
</script>

<main>
{#if user}
<MatchGrid />
{:else}
<Login />
{/if}
</main>

<style>
:global(body) {
  background-color: #011028;
}
</style>
