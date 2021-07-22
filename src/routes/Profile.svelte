<script>
    import EditListing from '../components/EditListing.svelte';
    import Listing from '../components/Listing.svelte';
    import Loader from '../components/Loader.svelte';

    let user = "35h356h35";
</script>

<main>
    {#if user}
        <h1 class="header-call-action">My Listing</h1>
        <Listing />
        <EditListing />
    {:else}
        <Loader />
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
</style>