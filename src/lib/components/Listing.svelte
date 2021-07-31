<script>
    import Loader from './Loader.svelte'

    export let currentuser;
    export let data;
</script>

<div class="search-div">
    <div class="columns">
        <div class="column is-6">
            <h1 class="freelancer-name">{data.name}</h1>
        </div>
        <div class="column is-6 alignRight" align="right">
            <button on:click={e => alert("This is just a preview button. It does not actually work.")} disabled id="subscribe-button" class="subscribe-button w-button">Subscribe</button>
        </div>
    </div>
    <div class="block">
        <p class="paragraph-11">
            <strong>{data.deliverables}</strong>
        </p>
    </div>
    <div id="skill-tags-grid" class="columns is-multiline">
        {#each data.skills as skill}
            <div class="column is-2">
                <button class="skill-tags w-button">{skill}</button>
            </div>
        {/each}
    </div>
</div>

<style>
.alignRight {
    justify-content: flex-end;
}
.search-div {
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
    box-shadow: 1px 0 8px 4px rgba(0, 0, 0, 0.1);
}
.freelancer-name {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #141414;
    font-size: 30px;
    line-height: 40px;
    font-weight: 600;
    text-align: left;
}
.subscribe-button {
    display: block;
    width: 30%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 5px;
    background-color: #799ef6;
    font-weight: 600;
    text-align: center;
}
.w-button {
    display: inline-block;
    padding: 9px 15px;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
}
.skill-tags {
    display: block;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 5px;
    background-color: #6c757d;
    font-weight: 600;
    text-align: center;
    cursor: default;
}
</style>