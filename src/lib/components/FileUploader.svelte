<script>
    export let imgSrc = "https://bulma.io/images/placeholders/128x128.png";
</script>

<div id="profilePic" class="file">
    <label class="file-label">
      <input on:change={e => console.log(e.target.value)} class="file-input" type="file" name="resume">
        <figure class="image is-128x128">
            <img class="is-rounded" src={imgSrc}>
        </figure>
    </label>
  </div>