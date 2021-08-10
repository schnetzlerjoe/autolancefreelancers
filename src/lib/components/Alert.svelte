<script>
    export let message = null;
    export let title = null;
    export let display = false;
    export let className = "is-success";

    function toggleAlert() {
    if(display) {
        display = false
    } else {
        display = true
    }
  }
</script>

{#if display}
<article id="alert" class="message {className}">
    <div class="message-header">
        <p>{title}</p>
        <button on:click={toggleAlert} id="closeAlert" class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
        {message}
    </div>
</article>
{:else}
{/if}

<style>
    article {
        display: fixed;
        position: fixed;
        right: 1%;
        top: 1%;
        z-index: 100;
        width: 40%;
    }
</style>