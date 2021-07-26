<script>
    import SettingForm from '../components/SettingForm.svelte'
    import Loader from '../components/Loader.svelte';
    import router from 'page';
    import { user } from '../auth/index';

    // Declare states
    let currentuser;

    // Declare reactive statements for redirection if user is not logged in
    $: {
      currentuser = $user;
      if(!currentuser) {
        router.redirect("/login")
      }
    }
</script>

<main>
    {#if !currentuser}
      <Loader />
    {:else}
        <h1 class="header-call-action">Settings</h1>
        <SettingForm />
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