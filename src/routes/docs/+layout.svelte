<script>
	import Footer from '$lib/ui/Footer.svelte'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'
</script>

<HomePageNavbar />

<main class="container-fluid max-w-2xl mx-auto">
	<slot />

	<Footer />
</main>
