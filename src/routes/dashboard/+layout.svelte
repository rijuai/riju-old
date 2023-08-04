<script lang="ts">
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import Navbar from '$lib/ui/dashboard/Navbar.svelte';
</script>

<Navbar />

<AnimatedRoute>
	<div class="mx-auto px-6 max-w-6xl">
		<slot />
	</div>
</AnimatedRoute>

<style>
	@import 'https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.0-alpha1/css/pico.min.css';
</style>
