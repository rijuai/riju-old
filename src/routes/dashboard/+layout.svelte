<script lang="ts">
	import Navbar from '$lib/ui/dashboard/Navbar.svelte';
</script>

<Navbar />

<div class="mx-auto px-6 max-w-6xl">
	<slot />
</div>

<style>
	@import 'https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.0-alpha1/css/pico.min.css';
</style>
