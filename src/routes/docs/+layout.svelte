<script>
	import Footer from '$lib/components/Footer.svelte'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
</script>

<main class="max-w-7xl mx-auto">
	<HomePageNavbar />
	<slot />
</main>
<Footer />
