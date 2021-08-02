<script>
    import { getStorage, ref } from "firebase/storage";

    import Steps from './Steps.svelte';
    import Button from './Button.svelte';
    import Tags from "svelte-tags-input";
    import Loader from './Loader.svelte'
    import { get } from 'svelte/store';
    import { onMount } from 'svelte';
    import { user } from '../stores/user';

    // Set component states
    let currentuser = get(user);
    let links;
    let industries;
    let profilePic;

    //// Define functions ////

    async function getFreelancer() {
        const token = await currentuser.getIdToken(true);
        const res = await fetch("/api/freelancers/get", {
            method: 'GET',
            headers: new Headers({
                'Authorization': token
            })
          });
          return res.json()
    }

    function setLinks(event) {
        links = event.detail.tags;
    }

    function setIndustries(event) {
        industries = event.detail.tags;
    }

    function setProfilePic(url) {
        profilePic = url;
    }

    function uploadProfilePic(file) {
        var currentDate = new Date().getTime()
        // Create a root reference
        const storage = getStorage();

        const profilePicRef = ref(storage, "profilePics/" + String(currentDate) + "-" + file.name);

        // 'file' comes from the Blob or File API
        profilePicRef.put(file).then((snapshot) => {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                profilePic = downloadURL;
            });
        });
    }

    let promise = getFreelancer()
</script>

<svelte:head>
    <link rel='stylesheet' href='https://svelte-tags-input.vercel.app/svelte-tags-input-css.css'>
</svelte:head>

{#await promise}
    <Loader text="Gathering Your Data..."/>
{:then freelancerData}
    <div class="section">
        <h1 class="header-call-action">Onboarding</h1>
        <div class="columns is-multiline is-centered">
            <div class="column is-12 is-centered">
                <Steps currentStage={freelancerData.Vet_State}/>
            </div>
            <div class="column is-12 is-centered">
                <label class="label field-label">Logo</label>
            </div>
            <div class="column is-12 is-centered">
                <div id="profilePic" class="file">
                  <label class="file-label">
                      <input on:change={e => {uploadProfilePic(e.target.files[0])}} class="file-input fileUpload" type="file" name="resume">
                      <figure class="image is-128x128">
                          <img class="is-rounded" src={profilePic ? profilePic : freelancerData.Logo}>
                      </figure>
                  </label>
                </div>
            </div>
            <div class="column is-12 is-centered">
                <label class="label field-label">Name</label>
            </div>
            <div class="column is-12 is-centered">
                <input type="text" class="input" placeholder="Enter your name or company name" id="name" value={freelancerData.Name} required>
            </div>
            <div class="column is-12 is-centered">
                <label class="label field-label">List Your Focus Industries</label>
            </div>
            <div class="column is-12 is-centered">
                <div class="Tags">
                    <Tags on:tags={e => setIndustries(e)} id="industries" maxTags={5} onlyUnique={true} tags={freelancerData.Industries}></Tags>
                </div>
            </div>
            <div class="column is-12 is-centered">
                <label class="label field-label">Share Any Links</label>
            </div>
            <div class="column is-12 is-centered">
                <div class="Tags">
                    <Tags on:tags={e => setLinks(e)} id="links" maxTags={5} onlyUnique={true} tags={freelancerData.Links}></Tags>
                </div>
            </div>
            <div class="column is-12">
                <Button onboard={true} currentuser={currentuser} industries={industries} links={links} profilePic={profilePic}/>
            </div>
        </div>
    </div>
{:catch error}
    <p>error.message</p>
{/await}

<style>
.fileUpload {
    width: 0px;
}
.Tags :global(.svelte-tags-input-tag) {
    background-color: #6c757d;
    background: #6c757d;
    color: #fff;
    font-size: 16px;
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-weight: 700;
    height: 70%;
}
.Tags :global(.svelte-tags-input-tag-remove) {
    font-size: 16px;
    margin-left: 5px;
}
.Tags :global(.svelte-tags-input-layout) {
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
.header-call-action {
    margin-bottom: 40px;
    color: #fff;
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
}
.item {
    margin-top: 10px;
}
.is-secondary {
    background-color: #799ef6; 
}
a {
    margin-left: 0px;
    padding-right: 10px;
    padding-left: 10px;
    color: #eef0f2;
    font-size: 16px;
    font-weight: 600;
    border: none;
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