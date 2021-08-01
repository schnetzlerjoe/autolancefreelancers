<script>
    import EditListing from '../lib/components/EditListing.svelte';
    import Listing from '../lib/components/Listing.svelte';
    import Loader from '../lib/components/Loader.svelte';
    import Login from '../lib/components/Login.svelte';
    import { user } from '../lib/stores/user';

    // Declare states
    let currentuser;

    $: {currentuser = $user}
</script>

<main>
    {#if currentuser}
        <h1 class="header-call-action">My Listing</h1>
        <EditListing currentuser={currentuser}/>
    {:else}
        <Login/>
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
    margin-top: 15px;
    width: 90%;
}
</style>