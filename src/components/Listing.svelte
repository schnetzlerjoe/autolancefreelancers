<script>
    export let user;
</script>

<div class="search-div">
    <div class="columns">
        <div class="column is-6">
            <h1 class="freelancer-name">Joe Schnetzler</h1>
        </div>
        <div class="column is-6 alignRight" align="right">
            <a href="#" id="subscribe-button" class="subscribe-button w-button">Subscribe</a>
        </div>
    </div>
    <div class="block">
        <p class="paragraph-11">
            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</strong>
        </p>
    </div>
    <div id="skill-tags-grid" class="columns is-multiline">
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Data Science</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Python</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Selenium</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Web Scraper</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Data Mining</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Data Scraping</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Deep Learning</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Machine Learning</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Data Visualization</a>
        </div>
        <div class="column is-2">
            <a href="#" class="skill-tags w-button">Artificial Intelligence</a>
        </div>
    </div>
</div>

<style>
.alignRight {
    justify-content: flex-end;
}
.search-div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 1px 0 8px 4px rgba(0, 0, 0, 0.1);
}
.freelancer-name {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #141414;
    font-size: 30px;
    line-height: 40px;
    font-weight: 600;
    text-align: left;
}
.subscribe-button {
    display: block;
    width: 30%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 5px;
    background-color: #799ef6;
    font-weight: 600;
    text-align: center;
}
.w-button {
    display: inline-block;
    padding: 9px 15px;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
}
.skill-tags {
    display: block;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 5px;
    background-color: #6c757d;
    font-weight: 600;
    text-align: center;
    cursor: default;
}
</style>