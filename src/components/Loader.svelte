<script>
    export let text;
</script>
<div class="columns is-centered">
    <div class="column">
        <img class="loader" src="https://uploads-ssl.webflow.com/5f2c3c6ce58ad2ce1c6e2159/5fc018bf1f7d75177f0139cb_Autolance%20Symbol.png">
        {#if text}
            <h1 class="content is-size-4 loadClass">{text}</h1>
        {/if}
    </div>
</div>

<style>
    .loadClass {
        color: #fff;
        font-weight: 600;
        text-align: center;
    }
    .loader {
    width: 200px;
    height: 200px;
    animation: spin 2s linear infinite;
    border: none;
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
    img {
        display: inline;
    }
</style>