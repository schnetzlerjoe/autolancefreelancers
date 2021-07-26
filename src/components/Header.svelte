<script>
    export let user;

    import firebase from 'firebase/app';
    import 'firebase/auth';

    const firebaseConfig = {
        apiKey: "AIzaSyDMcOBXFry4daxIxTMlJL5twW0aFqq-62E",
        authDomain: "autolance-617.firebaseapp.com",
        projectId: "autolance-617",
        appId: "1:218900921287:web:ef0384dc3215438bb6b7e2",
        measurementId: "G-13TQ6HPS8X"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const auth = firebase.auth();

    const logout = () => auth.signOut();
</script>

<nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img src="https://uploads-ssl.webflow.com/602b0b969e4787030f7f6d2c/602b0b969e478793cc7f6dc5_2.png" alt="Autolance Logo" width="225" height="57">
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
            <a class="navbar-item a-hover" href="/">
                Home
            </a>

            <a class="navbar-item a-hover" href="/settings">
                Settings
            </a>

            <a on:click={logout} class="navbar-item a-hover">
                Logout
            </a>

            <div class="navbar-item">
                <a class="button is-secondary" href="/profile">
                    <strong>My Listing</strong>
                </a>
            </div>           
        </div>
    </div>
</nav>

<style>
    .navbar {
        padding-top: 10px;
        padding-bottom: 10px;
        height: 60px;
        background-color: #011028;
    }
    a {
        margin-left: 0px;
        padding-right: 10px;
        padding-left: 10px;
        color: #eef0f2;
        font-size: 18px;
        font-weight: 600;
        border-bottom: none;
    }
    .navbar-item img {
        max-height: none;
    }
    .is-secondary {
        background-color: #799ef6; 
    }
    .button {
        border-width: 0px;
        color: #fff;
    }
    .a-hover:hover{
        color: #799ef6;
    }
    a:active {
        color: #799ef6;
    }
</style>
