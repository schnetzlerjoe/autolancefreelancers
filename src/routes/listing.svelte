<script>
    import EditListing from '../lib/components/EditListing.svelte';
    import Listing from '../lib/components/Listing.svelte';
    import Loader from '../lib/components/Loader.svelte';
    import { user } from '../lib/stores/user';

    // Declare states
    let currentuser;

    $: {currentuser = $user}
</script>

<main>
    <h1 class="header-call-action">My Listing</h1>
    {#if currentuser}
        <EditListing currentuser={currentuser}/>
    {:else}
        <Loader text="Gathering Your Data..."/>
    {/if}
</main>

<style>
.header-call-action {
    margin-bottom: 30px;
    color: #fff;
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
}
main {
  max-width: 90%;
}
</style>