<script>
export let user;
</script>

<footer class="footer">
    <div class="div-block-35">
        <div class="columns">
            <div class="column is-4">
                <ul role="list" class="w-list-unstyled">
                    <li>
                        <h1 class="heading-2">Company</h1>
                    </li>
                    <li>
                        <a href="/" class="nav-link footer-link">Home</a>
                    </li>
                    <li>
                        <a href="https://www.autolance.co/pricing" class="nav-link footer-link">Pricing</a>
                    </li>
                    <li>
                        <a href="https://www.autolance.co/freelancers" class="nav-link footer-link">Freelancers</a>
                    </li>
                    <li>
                        <a href="https://blog.autolance.co/" class="nav-link footer-link">Blog</a>
                    </li>
                </ul>
            </div>
            <div class="column is-4">
                <ul role="list" class="w-list-unstyled">
                    <li>
                        <h1 class="heading-2">Contact</h1>
                    </li>
                    <li class="list-item">
                        <a href="" class="nav-link contact mobile">Made In The Hudson Valley Of New York</a>
                    </li>
                    <li class="list-item">
                        <a href="" class="nav-link contact mobile">845-243-0062</a>
                    </li>
                    <li class="list-item">
                        <a href="" class="nav-link contact"><strong class="bold-text">contact@autolance.co</strong>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="column is-4">
                <ul role="list" class="w-list-unstyled">
                    <li>
                        <h1 class="heading-2">Newsletter</h1>
                    </li>
                    <li>
                        <p class="paragraph-10">Get freelancing data science articles, hiring tips and more with our newsletter.</p>
                    </li>
                    <li>
                        <div class="form-block w-form">
                            <input type="email" class="text-field-2 w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Enter your email" id="email-2" required="">
                            <button class="submit-button-2 button foot w-button">Subscribe</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: #011028;
        padding-left: 0px;
        padding-right: 0px;
    }
    li {
        padding-left: 0px;
        padding-right: 0px;
    }
    .div-block-35 {
        max-width: 85%;
        margin-right: auto;
        margin-left: auto;
    }
    .heading-2 {
        color: #fff;
        font-size: 22px;
        font-weight: 600;
    }
    .nav-link {
        margin-left: 0px;
        padding-right: 10px;
        padding-left: 10px;
        color: #eef0f2;
        font-size: 18px;
        font-weight: 600;
    }
    .nav-link.footer-link {
        display: block;
        margin-bottom: 10px;
        padding-right: 0px;
        padding-left: 0px;
        color: rgba(238, 240, 242, 0.81);
        font-weight: 500;
        text-decoration: none;
    }
    .paragraph-10 {
        color: #fff;
        font-size: 18px;
    }
    .text-field-2 {
        height: 60px;
        margin-top: 10px;
        border-radius: 7px;
        font-size: 18px;
        font-weight: 500;
    }
    .w-input, .w-select {
        display: block;
        width: 100%;
        height: 60px;
        padding: 8px 12px;
        margin-bottom: 10px;
        line-height: 1.42857143;
        color: #333333;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        height: 60px;
        margin-top: 10px;
        border-radius: 7px;
        font-size: 18px;
        font-weight: 500;
    }
    .submit-button-2.button {
        display: block;
        width: 100%;
        height: 60px;
        margin-top: 30px;
        margin-left: 0px;
        margin-top: 10px;
        background-color: #799ef6;
        border-width: 0px;
    }
    :focus-visible {
        border-width: 0px;
        outline: none;
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
    .list-item:not(:last-child) {
        border-bottom: none;
    }
    .nav-link.contact.mobile {
        text-decoration: none;
    }
    .nav-link.contact {
        padding-right: 0px;
        padding-left: 0px;
        font-weight: 400;
        text-decoration: none;
    }
    .button {
        border-width: 0px;
        color: #fff;
        font-weight: bold;
    }
    .button:hover{
        color: #333;
    }
</style>
