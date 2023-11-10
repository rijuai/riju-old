<script>
	import Footer from '$lib/components/Footer.svelte'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
</script>

<HomePageNavbar />

<main class="max-w-2xl mx-auto">
	<slot />

	<Footer />
</main>
