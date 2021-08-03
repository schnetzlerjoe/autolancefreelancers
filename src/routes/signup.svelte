<script>
    import { user } from '../lib/stores/user';
    import { goto } from '$app/navigation';
    import { initializeApp, getApps, getApp } from 'firebase/app';
    import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
    import { firebaseConfig } from '../lib/stores/config';
    import { onMount } from 'svelte';

    var app;
    getApps().length === 0 ? app = initializeApp(firebaseConfig) : app = getApp();
    const auth = getAuth(app);
    const createUserWithEmailPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            signOut(auth);
            alert("You have successfully signed up! Please login.")
        })
        .catch((error) => {
            if(error.message === "Firebase: Error (auth/email-already-in-use).") {
                alert("An account with this email already exists.");
            } else if(error.message === "Firebase: Error (auth/weak-password).") {
                alert("Weak password. Please try another.")
            } else {
                alert(error.message)
            }
        });
    }
    onMount(() => {
        document.getElementById("signinButton").onclick = function signupHandler() {
            var email = document.getElementById("signupemail").value;
            var pass = document.getElementById("signuppass").value;
            var passConfirm = document.getElementById("signuppassconfirm").value;
            if(pass === passConfirm) {
                createUserWithEmailPassword(email, pass)
                .catch((error) => {
                    alert(error.message);
                })
                goto("/")
            } else {
                alert("Passwords do not match.")
            }
        };
    })

    // Declare states
    let currentuser;

    $: {
        currentuser = $user;
        if(currentuser) {
            goto("/")
        }
    }
</script>

<main>
    <div class="section">
        <h1 class="header-call-action">Signup</h1>
        <div class="columns is-multiline is-centered">
            <div class="column is-11 is-centered">
                <label class="label field-label">Email</label>
            </div>
            <div class="column is-11 is-centered">
                <input type="email" class="input" maxlength="256" data-name="" placeholder="Enter your email" id="signupemail" required="">
            </div>
            <div class="column is-11 is-centered">
                <label class="label field-label">Password</label>
            </div>
            <div class="column is-11 is-centered">
                <input type="password" class="input" maxlength="256" data-name="" placeholder="Enter password" id="signuppass" required="">
            </div>
            <div class="column is-11 is-centered">
                <label class="label field-label">Confirm Password</label>
            </div>
            <div class="column is-11 is-centered">
                <input type="password" class="input" maxlength="256" data-name="" placeholder="Confirm password" id="signuppassconfirm" required="">
            </div>
            <div class="column is-11 is-centered">
                <a href="/"><label class="label field-label signup-login-toggle-text">Have an account already?</label></a>
            </div>
            <div class="column is-11 is-centered">
                <button id="signinButton" class="button login-button margin-top-fifteen">Signup</button>
            </div>
        </div>
    </div>
</main>

<style>
.header-call-action {
    margin-bottom: 20px;
    color: #fff;
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
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
.signup-login-toggle-text {
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
}
main {
  width: 90%;
}
</style>