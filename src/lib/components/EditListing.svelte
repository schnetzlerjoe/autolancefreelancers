<script>
    import PricingDisplay from './PricingDisplay.svelte';
    import Tags from "svelte-tags-input";
    import Switch from "svelte-switch";
    import Loader from './Loader.svelte'
    import Listing from './Listing.svelte'

    export let currentuser;

    let data = {};
    let loading;

    function acceptingProjectChange(e) {
        const { checked } = e.detail;
        data["subscription"] = checked;
    }

    async function getFreelancer() {
        const token = await currentuser.getIdToken(true);
        const res = await fetch("/api/freelancers/get", {
            method: 'GET',
            headers: new Headers({
                'Authorization': token
            })
          });
          var json = await res.json();
          data['name'] = json['Name']
          data["skills"] = json['Skills'];
          data["subscription"] = json['Subscription'];
          data["availability"] = json['Availability'];
          data["rate"] = json['Rate'];
          data["deliverables"] = json['Deliverables'];
          data['fixedDeliverable'] = json['Fixed_Deliverable'];
    };
  
    async function updateFreelancerListing(data) {
      loading=true;
      const token = await currentuser.getIdToken(true);
      const res = await fetch("/api/freelancers/put", {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: new Headers({
              "Content-Type": "application/json",
              'Authorization': token,
          })
        });
      loading=false;
    }

    // Get freelancer data and set initial states
    getFreelancer()
</script>

<svelte:head>
    <link rel='stylesheet' href='https://svelte-tags-input.vercel.app/svelte-tags-input-css.css'>
</svelte:head>

{#if Object.keys(data).length > 0}
    <Listing data={data} />
    <div class="section">
        <div class="columns is-multiline is-centered">
            <div class="column is-12 is-centered">
                <label class="label field-label">Subscription</label>
            </div>
            <div class="column is-12 is-centered">
                <div align="left">
                    <Switch
                        checked={data.subscription}
                        on:change={acceptingProjectChange}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        unCheckedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        containerClass="react-switch"
                        id="material-switch">
                        <span slot="checkedIcon" />
                        <span slot="unCheckedIcon" />
                    </Switch>
                </div>
            </div>
            <div class="column is-12">
                <label class="label field-label">Skill Tags</label>
            </div>
            <div class="column is-12">
                <div class="skillTagInput">
                    <Tags on:tags={e => data['skills'] = e.detail.tags} maxTags={10} onlyUnique={true} tags={data.skills}></Tags>
                </div>
            </div>
            <PricingDisplay data={data}/>
            <div class="column is-12 is-centered">
                <label class="label field-label">Deliverables</label>
            </div>
            <div class="column is-12 is-centered">
                <textarea on:change={e => data['deliverables'] = e.target.value} value={data.deliverables} class="input textarea" maxlength="256" placeholder="Describe your deliverable." id="deliverables" required></textarea>
            </div>
            <div class="column is-12 is-centered">
            {#if loading}
                <button id="saveButton" class="button login-button margin-top-fifteen" disabled>
                    <i class="fa fa-spinner fa-spin"></i>
                </button>
            {:else}
                <button on:click={updateFreelancerListing(data)} id="saveButton" class="button login-button margin-top-fifteen">Save Changes</button>
            {/if}
            </div>
        </div>
    </div>
{:else}
    <Loader text="Gathering Your Data..."/>
{/if}

<style>
.toggleText {
    color: #fff;
    font-family: Arial,sans-serif;
    line-height: 20px;
    text-align: left;
    font-weight: 700;
}
.skillTagInput :global(.svelte-tags-input-tag) {
    background-color: #6c757d;
    background: #6c757d;
    color: #fff;
    font-size: 16px;
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-weight: 700;
    height: 70%;
}
.skillTagInput :global(.svelte-tags-input-tag-remove) {
    font-size: 16px;
    margin-left: 5px;
}
.skillTagInput :global(.svelte-tags-input-layout) {
    min-height: 60px;
    border-radius: 7px;
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    padding: 8px 12px;
    line-height: 1.42857143;
    color: #333333;
    background-color: #ffffff;
    border: 1px solid #cccccc;
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
    color: #363636;
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 7px;
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