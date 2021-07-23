<script>
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.rawgit.com/octoshrimpy/bulma-o-steps/master/bulma-steps.css">
</svelte:head>

<ul class="steps is-balanced has-content-centered">
    <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 1</p>
        <p class="stepTextPara">Set up your profile and share details about yourself.</p>
        </div>
    </li>
    <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 2</p>
        <p class="stepTextPara">A one on one meeting with Autolance.</p>
        </div>
    </li>
    <li class="steps-segment is-active">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 3</p>
        <p class="stepTextPara">Thorough referrals and certification check.</p>
        </div>
    </li>
    <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 4</p>
        <p class="stepTextPara">A detailed, final example project review.</p>
        </div>
    </li>
    <li class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 5</p>
        <p class="stepTextPara">Get accepted into the vetted Autolance network!</p>
        </div>
    </li>
</ul>

<style>
.steps-segment:after {
    background-color: #799ef6;
}
.steps:not(.is-hollow) .steps-segment.is-active .steps-marker:not(.is-hollow) {
    background-color: #23d160;
    color: #fff;
}
.steps.svelte-l49zgd:not(.is-hollow) .steps-segment.is-active .steps-marker.svelte-l49zgd:not(.is-hollow) {
    background-color: #799ef6;
    color: #fff;
}
.steps:not(.is-hollow) .steps-segment.is-active .steps-marker:not(.is-hollow) {
    background-color: #799ef6;
    color: #fff;
}
.steps:not(.is-hollow) .steps-marker:not(.is-hollow) {
    background-color: #799ef6;
    color: #fff;
}
.stepText {
    color: #fff;
    font-weight: 600;
    text-align: center;
}
.stepTextPara {
    color: #fff;
    font-weight: 500;
    text-align: center;
}
</style>