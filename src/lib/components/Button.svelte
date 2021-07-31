<script>
  export let currentuser;
  export let industries;
  export let links;
  export let profilePic;
  export let onboard;
  export let accepting;
  export let subscription;
  export let skill_tags;
  export let availablity;
  export let price;
  export let delivarable;
  let loading;

  //// Define functions ////
  
  async function updateFreelancerOnboard(industries, links) {
      loading=true;
      var data = {
          name: document.getElementById("name").value,
          industries: industries,
          links: links,
          logo: profilePic
      };
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
  async function updateFreelancer(accepting) {
      loading=true;
      var data = {
          name: document.getElementById("nameSetting").value,
          logo: profilePic,
          accepting: accepting
      };
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
</script>
{#if loading}
    <button id="saveButton" class="button login-button margin-top-fifteen" disabled>
      <i class="fa fa-spinner fa-spin"></i>
    </button>
{:else}
  {#if onboard}
    <button on:click={updateFreelancerOnboard(industries, links)} id="saveButton" class="button login-button margin-top-fifteen">Save</button>
  {:else}
    <button on:click={updateFreelancer(accepting)} id="saveButton" class="button login-button margin-top-fifteen">Save Changes</button>
  {/if}
{/if}

<style>
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
</style>