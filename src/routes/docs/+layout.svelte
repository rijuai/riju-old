<script>
	import Footer from '$lib/ui/Footer.svelte';
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#1B1B1B" />

	<!-- Pico CSS -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@picocss/pico@next/css/pico.min.css"
	/>
</svelte:head>

<HomePageNavbar />

<slot />

<Footer />
