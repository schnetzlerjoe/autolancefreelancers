<script>
    import { initializeApp, getApps, getApp } from 'firebase/app';
    import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
    import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
    import Switch from "svelte-switch";
    import Button from './Button.svelte';
    import Loader from './Loader.svelte';
    import { get } from 'svelte/store'
    import { onMount } from 'svelte';
    import { user } from '../stores/user';
    import Alert from './Alert.svelte';

    // Set component states
    let currentuser = get(user);
    let profilePic;
    let name;
    let acceptingNewProjects;
    let filealert = false;

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

    function acceptingProjectChange(e) {
        const { checked } = e.detail;
        acceptingNewProjects = checked;
    }


    function setProfilePic(url) {
        profilePic = url;
    }

    async function uploadProfilePic(file) {
        var currentDate = new Date().getTime()

        const storage = getStorage();

        const profilePicRef = await ref(storage, "profilePics/" + String(currentDate) + "-" + file.name);

        if(file.type == "image/jpeg" || file.type == "image/jpg") {
            uploadBytes(profilePicRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    profilePic = downloadURL;
                });
            });
        } else {
            filealert = true;
        }
    }

    function sendResetPassEmail() {
        const auth = getAuth(app);
        sendPasswordResetEmail(auth, currentuser.email)
        .then(() => {
          alert("Reset email has been sent to your email.")
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(error.message)
        });
    }

    let promise = getFreelancer()
</script>

{#await promise}
  <Loader text="Gathering Your Data..."/>
{:then freelancerData}
    <Alert className={"is-danger"} display={filealert} title={"Wrong File Type"} message={"Your logo image must be a JPEG or JPG file. Please upload the correct file to change your logo."} />
  <div class="section">
      <div class="columns is-multiline is-centered">
          <div class="column is-12 is-centered">
              <label class="label field-label">Accepting New Projects</label>
          </div>
          <div class="column is-12 is-centered">
              <div align="left">
                  <Switch
                      checked={freelancerData.Accepting_Projects}
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
              <input type="text" class="input" placeholder="Enter your name or company name" id="nameSetting" value={freelancerData.Name} required>
          </div>
          <div class="column is-12 item" align="left">
              <button on:click={sendResetPassEmail} class="button is-secondary">Reset Password</button>
          </div>      
          <div class="column is-12">
              <Button profilePic={profilePic} currentuser={currentuser} accepting={acceptingNewProjects} onboard={false}/>
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
.toggleText {
    color: #fff;
    font-family: Arial,sans-serif;
}
.item {
    margin-top: 10px;
}
.is-secondary {
    background-color: #799ef6; 
}
button {
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