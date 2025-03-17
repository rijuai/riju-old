<script>
import HomePageNavbar from '../../routes/HomePageNavbar.svelte'

let { children } = $props()
</script>

<HomePageNavbar />

<main class="container mx-auto">
	<div class="px-4 py-12 md:py-16">
		{@render children()}
	</div>
</main>
