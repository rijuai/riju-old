<script>
	import Footer from '$lib/ui/Footer.svelte'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'
</script>

<HomePageNavbar />

<main class="container-fluid">
	<slot />

	<Footer />
</main>
