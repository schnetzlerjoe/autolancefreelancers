<script>
    import Loader from './Loader.svelte'

    export let matches = null;
</script>

{#if matches}
    <h1 class="header-call-action">My Matches</h1>
    <div class="columns is-multiline">
        {#each matches as match}
            <div class="column is-4 is-centered is-vcentered">
                <div project="' + projectID + '" class="project-div">
                    <h1 class="project-title">{match.Title}</h1>
                    <div class="columns w-row">
                        <div class="column is-12">
                            <h1 class="project-title summary-dash">
                                <strong class="bold-text-2">{match.Company}</strong>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
{:else}
    <Loader />
{/if}

<style>
.project-div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    background-color: #fff;
    background-image: url("https://uploads-ssl.webflow.com/60f0f9ea9df6bf75fef5647c/60f0f9ea9df6bf2daff5648c_5f807fdd9f8cf7956f1f6c54_blob%20(1).svg");
    background-position: -125px -125px;
    background-repeat: no-repeat;
    box-shadow: 1px 0 8px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
.project-title {
    color: #141414;
    font-size: 30px;
    line-height: 40px;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
}
.project-title.summary-dash {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-right: 10px;
    padding-left: 0px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
}
.bold-text-2 {
    color: #799ef6;
}
.header-call-action {
    margin-bottom: 40px;
    color: #fff;
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
}
</style>
