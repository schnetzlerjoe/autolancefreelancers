<script>
    import { initializeApp, getApps, getApp } from 'firebase/app';
    import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';
    import { firebaseConfig } from '../stores/config';
    
    var app;
    getApps().length === 0 ? app = initializeApp(firebaseConfig) : app = getApp();
    const auth = getAuth(app);
    const loginWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            if(error.message === "Firebase: Error (auth/wrong-password).") {
                alert("Wrong password. Please try again.");
            } else if (error.message === "Firebase: Error (auth/user-not-found).") {
                alert("This user does not exist.");
            } else {
                alert(error.message)
            }
        })
    }
    function loginHandler() {
        var email = document.getElementById("email").value
        var pass = document.getElementById("password").value
        loginWithEmailPassword(email, pass)
    }
</script>

<div style={"width:100%"} class="section">
    <h1 class="header-call-action">Login</h1>
    <form>
        <div class="columns is-multiline is-centered">
            <div class="column is-11 is-centered">
                <label class="label field-label">Email</label>
            </div>
            <div class="column is-11 is-centered">
                <input type="email" class="input" maxlength="256" placeholder="Enter your email" id="email" required>
            </div>
            <div class="column is-11 is-centered">
                <label class="label field-label">Password</label>
            </div>
            <div class="column is-11 is-centered">
                <input type="password" class="input" maxlength="256" placeholder="Enter password" id="password" required>
            </div>
            <div class="column is-11 is-centered">
                <a href="/signup"><label class="label field-label signup-login-toggle-text">Need an account?</label></a>
            </div>
            <div class="column is-11 is-centered">
                <button on:click={loginHandler} type="button" id="signinButton" class="button login-button margin-top-fifteen">Login</button>
            </div>
        </div>
    </form>
</div>

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
</style>