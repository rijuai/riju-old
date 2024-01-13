<script>
	import Footer from '$lib/components/Footer.svelte'
	import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
</script>

<HomePageNavbar />
<main>
	<slot />
</main>
<Footer />
