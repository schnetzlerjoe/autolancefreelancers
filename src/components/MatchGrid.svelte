<script>
    export let matches;
</script>

{#each match as matches}
    <div project="' + projectID + '" class="project-div">
        <h1 class="project-title">{match.Title}</h1>
        <div class="columns w-row">
            <div class="w-col w-col-6">
                <h1 class="project-title summary-dash">
                    <strong class="bold-text-2">{match.Num_Matches} Matches</strong>
                </h1>
            </div>
            <div class="w-col w-col-6">
                <h1 class="project-title summary-dash">
                    <strong class="bold-text-2">$ + string({match.Spent})  + Spent</strong>
                </h1>
            </div>
        </div>
    </div>
{/each}

<style>
</style>
