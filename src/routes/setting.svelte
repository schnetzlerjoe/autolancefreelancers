<script>
    import SettingForm from '../lib/components/SettingForm.svelte';
    import Loader from '../lib/components/Loader.svelte';
    import Login from '../lib/components/Login.svelte';
    import { user } from '../lib/stores/user'

    // Declare states
    let currentuser;
    let token;

    $: {currentuser = $user;
        if($user) {
            token = $user.getIdToken();}
        }
</script>

<main>
    {#if !currentuser}
        <Login />
    {:else}
        <h1 class="header-call-action">Settings</h1>
        <SettingForm />
    {/if}
</main>

<style>
main {
    width: 90%;
}
.header-call-action {
    margin-bottom: 30px;
    color: #fff;
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
}
</style>