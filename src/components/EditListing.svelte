<script>
    import Tags from "svelte-tags-input";

    let tags = ["Python", "API", "Flask", "Django"]
</script>

<svelte:head>
    <link rel='stylesheet' href='https://svelte-tags-input.vercel.app/svelte-tags-input-css.css'>
</svelte:head>

<div class="section">
    <div class="columns is-multiline is-centered">
        <div class="column is-12 is-centered">
            <label class="label field-label">Skill Tags</label>
        </div>
        <div class="column is-12 is-centered">
            <div class="skillTagInput">
                <Tags maxTags={10} onlyUnique={true} tags={tags}></Tags>
            </div>
        </div>
        <div class="column is-12 is-centered">
            <div class="columns">
                <div class="column is-6">
                    <div class="column is-12 is-centered">
                        <label class="label field-label">Availability</label>
                    </div>
                    <div class="column is-12 is-centered">
                        <input type="text" class="input" maxlength="256" data-name="" placeholder="Enter password" id="availability" required="">
                    </div>
                </div>
                <div class="column is-6">
                    <div class="column is-12 is-centered">
                        <label class="label field-label">Monthly Subscription Price</label>
                    </div>
                    <div class="column is-12 is-centered">
                        <input type="text" class="input" maxlength="256" data-name="" placeholder="Enter password" id="monthlySubscriptionPrice" required="">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-12 is-centered">
            <label class="label field-label">Deliverables</label>
        </div>
        <div class="column is-12 is-centered">
            <textarea class="input textarea" maxlength="256" placeholder="Python, Flask, API" id="skilltags" required></textarea>
        </div>
        <div class="column is-12 is-centered">
            <button id="saveButton" class="button login-button margin-top-fifteen">Save Changes</button>
        </div>
    </div>
</div>

<style>
.skillTagInput :global(.svelte-tags-input-tag) {
    background-color: #6c757d;
    color: #fff;
    font-size: 16px;
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-weight: 700;
    height: 70%;
    align-items: center;
    justify-content: center;
}
.skillTagInput :global(.svelte-tags-input-tag-remove) {
    font-size: 16px;
    margin-left: 5px;
}
.skillTagInput :global(.svelte-tags-input-layout) {
    height: 60px;
    border-radius: 7px;
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    padding: 8px 12px;
    line-height: 1.42857143;
    color: #333333;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    align-items: center;
    justify-content: center;
}
.field-label {
    color: #fff;
    font-family: Arial,sans-serif;
    line-height: 20px;
    text-align: left;
}
.column {
    padding: .3rem;
}
.login-button {
    height: 60px;
    background-color: #799ef6;
    border-width: 0px;
    color: #fff;
    align-items: center;
    border-radius: 5px;
    font-weight: 600;
    text-align: center;
    width: 100%;
}
.margin-top-fifteen {
    margin-top: 15px;
}
.input {
    height: 60px;
}
.textarea {
    height: 150px;
}
input {
    height: 60px;
    box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,.05);
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(.5em - 1px);
    padding-left: calc(.75em - 1px);
    padding-right: calc(.75em - 1px);
    padding-top: calc(.5em - 1px);
    position: relative;
    vertical-align: top;
}
</style>