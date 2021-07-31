<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />>

<style>
	slot {
		max-width: 90%;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	main {
		background-color: #011028;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
