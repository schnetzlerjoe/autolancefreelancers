<script>
    export let data;
</script>

{#if data.subscription}
    <div class="column is-6" style={"padding:0px"}>
        <div class="column is-12">
            <label class="label field-label">Availability</label>
        </div>
        <div class="column is-12">
            <input on:change={e => data['availability'] = e.target.value} value={data.availability} type="text" class="input skillTagInput" maxlength="256" data-name="" placeholder="Enter password" id="availability" required>
        </div>
    </div>
    <div class="column is-6" style={"padding:0px"}>
        <div class="column is-12">
            <label class="label field-label">Monthly Subscription Price</label>
        </div>
        <div class="column is-12">
            <input on:change={e => data['rate'] = e.target.value} value={data.rate} type="text" class="input skillTagInput" maxlength="256" data-name="" placeholder="Enter password" id="monthlySubscriptionPrice" required>
        </div>
    </div>
{:else}
    <div class="column is-5" style={"padding:0px"}>
        <div class="column is-12">
            <label class="label field-label">Price</label>
        </div>
        <div class="column is-12">
            <input on:change={e => data['rate'] = e.target.value} value={data.rate} type="number" class="input skillTagInput" maxlength="256" data-name="" placeholder="Enter password" id="monthlySubscriptionPrice" required>
        </div>
    </div>
    <div class="column is-2 perFlex" style={"padding:0px"}>
        <div class="column is-12 per">
            <label class="label per field-label">Per</label>
        </div>
    </div>
    <div class="column is-5" style={"padding:0px"}>
        <div class="column is-12">
            <label class="label field-label">Deliverable</label>
        </div>
        <div class="column is-12">
            <input on:change={e => data['fixedDeliverable'] = e.target.value} value={data.fixedDeliverable} type="text" class="input skillTagInput" maxlength="256" data-name="" placeholder="Enter password" id="monthlySubscriptionPrice" required>
        </div>
    </div>
{/if}

<style>
.perFlex{
    display: flex;
}
.per {
    display: inline-block;
    align-self: center;
    justify-self: center;
    text-align: center;
    font-size: medium;
}
.column {
    padding: 5px;
}
input {
    height: 60px;
    box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    border-color: #dbdbdb;
    border-radius: 7px;
    color: #363636;
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    display: inline-flex;
    font-size: 1rem;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(.5em - 1px);
    padding-left: calc(.75em - 1px);
    padding-right: calc(.75em - 1px);
    padding-top: calc(.5em - 1px);
    position: relative;
    vertical-align: top;
}
.field-label {
    color: #fff;
    font-family: Arial,sans-serif;
    line-height: 20px;
    text-align: left;
}
</style>