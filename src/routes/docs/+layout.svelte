<script>
	import Footer from '$lib/ui/Footer.svelte';
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte';
</script>

<main class="container-fluid">
	<HomePageNavbar />

	<slot />

	<Footer />
</main>
