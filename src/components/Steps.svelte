<script>
    import { onMount } from 'svelte';

    export let currentStage;

    function updateSteps(currentStage) {
        document.getElementById("step" + String(currentStage)).classList.add("is-active");
    }

    onMount(() => {
        updateSteps(currentStage)
    })
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.rawgit.com/octoshrimpy/bulma-o-steps/master/bulma-steps.css">
</svelte:head>

<ul class="steps is-balanced has-content-centered">
    <li id="step1" class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 1</p>
        <p class="stepTextPara">Set up your profile and share details about yourself.</p>
        </div>
    </li>
    <li id="step2" class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 2</p>
        <p class="stepTextPara">A one on one meeting with Autolance.</p>
        </div>
    </li>
    <li id="step3" class="steps-segment is-active">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 3</p>
        <p class="stepTextPara">Thorough referrals and certification check.</p>
        </div>
    </li>
    <li id="step4" class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 4</p>
        <p class="stepTextPara">A detailed, final example project review.</p>
        </div>
    </li>
    <li id="step5" class="steps-segment">
        <span class="steps-marker"></span>
        <div class="steps-content">
        <p class="is-size-4 stepText">Stage 5</p>
        <p class="stepTextPara">Get accepted into the vetted Autolance network!</p>
        </div>
    </li>
</ul>

<style>
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