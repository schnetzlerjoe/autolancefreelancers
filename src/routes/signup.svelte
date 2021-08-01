<script>
</script>

<div class="section">
    <h1 class="header-call-action">Signup</h1>
    <div class="columns is-multiline is-centered">
        <div class="column is-11 is-centered">
            <label class="label field-label">Email</label>
        </div>
        <div class="column is-11 is-centered">
            <input type="email" class="input" maxlength="256" data-name="" placeholder="Enter your email" id="signinemail" required="">
        </div>
        <div class="column is-11 is-centered">
            <label class="label field-label">Password</label>
        </div>
        <div class="column is-11 is-centered">
            <input type="password" class="input" maxlength="256" data-name="" placeholder="Enter password" id="signinpass" required="">
        </div>
        <div class="column is-11 is-centered">
            <label class="label field-label">Confirm Password</label>
        </div>
        <div class="column is-11 is-centered">
            <input type="password" class="input" maxlength="256" data-name="" placeholder="Enter password" id="signinpassconfirm" required="">
        </div>
        <div class="column is-11 is-centered">
            <a href="/"><label class="label field-label signup-login-toggle-text">Have an account already?</label></a>
        </div>
        <div class="column is-11 is-centered">
            <button type="submit" data-wait="Please wait..." id="signinButton" class="button login-button margin-top-fifteen">Signup</button>
        </div>
    </div>
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
main {
  width: 90%;
}
</style>