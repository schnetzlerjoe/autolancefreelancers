<script>
    let name;
</script>


<div class="section">
    <div class="columns is-multiline is-centered">
        <div class="column is-12 is-centered">
            <label class="label field-label">Logo</label>
        </div>
        <div class="column is-12 is-centered">
            <figure class="image is-128x128">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
        </div>
        <div class="column is-12 is-centered">
            <label class="label field-label">Name</label>
        </div>
        <div class="column is-12 is-centered">
            <input type="text" class="input" placeholder="Enter your name or company name" id="name" required>
        </div>
        <div class="column is-12 item" align="left">
            <a class="button is-secondary" href="/profile">Reset Password</a>
        </div>      
        <div class="column is-12">
            <button id="saveButton" class="button login-button margin-top-fifteen">Save Changes</button>
        </div>
    </div>
</div>

<style>
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